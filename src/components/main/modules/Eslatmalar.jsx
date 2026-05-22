import React, { useState, useEffect, useRef } from 'react';
import './Eslatmalar.sass';

function Eslatmalar({ cursorOK, cursorOO, mode, eslatmas, seteslatmas }) {

    const [eslatmainputValue, seteslatmaInputValue] = useState('');
    const [eslatmainputDescr, seteslatmaInputDescr] = useState('');
    const [yil, setYil] = useState(new Date().getFullYear())
    const [oy, setOy] = useState(new Date().getMonth())
    const [sana, setSana] = useState(new Date().getDate())

    useEffect(() => {
        localStorage.setItem('local_eslatmas', JSON.stringify(eslatmas));
    }, [eslatmas]);

    const handleAddeslatma = (e) => {
        e.preventDefault();

        if (!eslatmainputValue.trim()) return;
        if (!eslatmainputDescr.trim()) return;

        const neweslatma = {
            id: Date.now(),
            text: eslatmainputValue,
            descr: eslatmainputDescr,
            yil: yil,
            oy: oy,
            sana, sana,
        };

        seteslatmas([...eslatmas, neweslatma]);
        seteslatmaInputValue('');
        seteslatmaInputDescr('');
        setYil(new Date().getFullYear())
        setOy(new Date().getMonth())
        setSana(new Date().getDate())
    };

    const deleteeslatma = (id) => {
        const filtered = eslatmas.filter(eslatma => eslatma.id !== id);
        seteslatmas(filtered);
    };

    const eSaqlashRef = useRef(null);

    const eSaqlashPosition = (e) => {
        if (eSaqlashRef.current) {
            const box = eSaqlashRef.current.getBoundingClientRect();

            seteSaqlashX(e.clientX - (box.left + box.width / 2))
            seteSaqlashY(e.clientY - (box.top + box.height / 2))
        }
    };

    const [eSaqlashX, seteSaqlashX] = useState(0)
    const [eSaqlashY, seteSaqlashY] = useState(0)

    return (
        <>
            <div className="eslatmaContainer">
                <form onSubmit={handleAddeslatma} className="eslatmaForm" style={{ background: `${mode === 'dark' ? '#22222254' : '#ffffff54'}` }}>
                    <input className="eslatmaInput"
                        style={{ color: `${mode === 'dark' ? '#fff' : '#000'}` }}
                        type="text"
                        placeholder="sarlavha..."
                        value={eslatmainputValue}
                        onChange={(e) => seteslatmaInputValue(e.target.value)}
                    />
                    <textarea className='eslatmaDescr'
                        style={{ color: `${mode === 'dark' ? '#fff' : '#000'}` }}
                        type="text"
                        placeholder='note...'
                        value={eslatmainputDescr}
                        onChange={(e) => seteslatmaInputDescr(e.target.value)}
                    >

                    </textarea>
                    <button type="submit" className="eslatmaButtonContainer" onMouseLeave={() => { cursorOK(), seteSaqlashX(0), seteSaqlashY(0) }} onMouseMove={(e) => { eSaqlashPosition(e) }} onMouseEnter={cursorOO} ref={eSaqlashRef} >
                        <button className="eslatmaButton" style={{ transform: `translate(${eSaqlashX}px, ${eSaqlashY}px)` ,color: `${mode === 'dark' ? '#fff' : '#000'}` }}>Saqlash</button>
                    </button>
                </form>

                <div className="eslatmaList">
                    {eslatmas.map((eslatma) => (
                        <div key={eslatma.id} className="eslatma" style={{ background: `${mode === 'dark' ? '#22222254' : '#ffffff54'}` }}>
                            <div className='mainEslatma'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512"><path fill="#0074A8" d="M491 326V92.143C491 79.021 480.259 68 467.137 68H341.13c-9.287 0-17.723 5.603-21.596 14.044l-12.709 27.903C302.952 118.388 294.516 124 285.229 124H67.538C54.416 124 44 134.426 44 147.549v216.363C44 377.034 54.416 388 67.538 388h399.599c.628 0 1.248-.36 1.863-.408V433h.342c0 6 4.877 10.636 10.829 10.636c5.952 0 10.829-4.967 10.829-10.919V326z" /><path fill="#59CAFC" d="M480.171 443.636c-5.952 0-10.829-4.636-10.829-10.636H469V210.181C469 197.058 458.661 186 445.539 186H45.94C32.818 186 22 197.058 22 210.181V449.37C22 462.492 32.818 473 45.94 473h399.599c1.385 0 2.741-.06 4.061-.288c1.639.227 3.31.385 5.012.385c20.04 0 36.136-16.229 36.136-36.269c0-.534-.036-1.058-.058-1.586c-1.147 4.766-5.435 8.394-10.519 8.394z" /></svg>
                                <div className="eslatmaText">
                                    {eslatma.text}
                                </div>
                                <div style={{ color: 'gray', fontSize: '1.3rem' }}>
                                    {eslatma.descr}
                                </div>
                                <div style={{ color: 'gray', fontSize: '0.8rem' }}>
                                    {eslatma.sana} / {eslatma.oy + 1} / {eslatma.yil}
                                </div>
                            </div>
                            <button className='deleteeslatmaButton' onClick={() => deleteeslatma(eslatma.id)} onMouseEnter={cursorOO} onMouseLeave={cursorOK}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 26 26"><path fill="#ff0000b9" d="M11.5-.031c-1.958 0-3.531 1.627-3.531 3.594V4H4c-.551 0-1 .449-1 1v1H2v2h2v15c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V8h2V6h-1V5c0-.551-.449-1-1-1h-3.969v-.438c0-1.966-1.573-3.593-3.531-3.593h-3zm0 2.062h3c.804 0 1.469.656 1.469 1.531V4H10.03v-.438c0-.875.665-1.53 1.469-1.53zM6 8h5.125c.124.013.247.031.375.031h3c.128 0 .25-.018.375-.031H20v15c0 .563-.437 1-1 1H7c-.563 0-1-.437-1-1V8zm2 2v12h2V10H8zm4 0v12h2V10h-2zm4 0v12h2V10h-2z" /></svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Eslatmalar;