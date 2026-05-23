import React, { useState, useEffect, useRef } from 'react';
import './Odatlar.sass';

function Odatlar({ cursorOK, cursorOO, mode, odatlar, setodatlar }) {
    const haftaKunlari = ['du', 'se', 'ch', 'pa', 'ju', 'sha', 'yak'];

    const qoshishRef = useRef(null);

    const qoshishPosition = (e) => {
        if (qoshishRef.current) {
            const box = qoshishRef.current.getBoundingClientRect();

            setqoshishX(e.clientX - (box.left + box.width / 2))
            setqoshishY(e.clientY - (box.top + box.height / 2))
        }
    };

    const [qoshishX, setqoshishX] = useState(0)
    const [qoshishY, setqoshishY] = useState(0)

    const [odatlarInput, setodatlarInput] = useState('');

    useEffect(() => {
        localStorage.setItem('local_odatlar', JSON.stringify(odatlar));
    }, [odatlar]);

    const handleddodat = (e) => {
        e.preventDefault();

        if (!odatlarInput.trim()) return;

        const boshKunlar = {};
        haftaKunlari.forEach(kun => {
            boshKunlar[kun] = false;
        });

        const newodat = {
            id: Date.now(),
            text: odatlarInput,
            kunlar: boshKunlar
        };

        setodatlar([...odatlar, newodat]);
        setodatlarInput('');
    };

    const toggleodat = (id, kun) => {
        const updated = odatlar.map(odat => {
            if (odat.id === id) {
                return {
                    ...odat,
                    kunlar: {
                        ...odat.kunlar,
                        [kun]: !odat.kunlar[kun]
                    }
                };
            }
            return odat;
        });
        setodatlar(updated);
    };

    const deleteodat = (id) => {
        const filtered = odatlar.filter(odat => odat.id !== id);
        setodatlar(filtered);
    };

    return (
        <>
            <div className="odats-container" style={{ background: `${mode === 'dark' ? '#1c1c1c' : '#ffffff54'}` }}>
                <form className="odat-form" onSubmit={handleddodat}>
                    <input
                        style={{ color: `${mode === 'dark' ? '#fff' : '#000'}` }}
                        type="text"
                        placeholder="Odat nomi..."
                        className="odat-input"
                        value={odatlarInput}
                        onChange={(e) => setodatlarInput(e.target.value)}
                    />
                    <button type="submit" ref={qoshishRef} className="odat-btnContainer" onMouseEnter={cursorOO} onMouseMove={(e) => { qoshishPosition(e) }} onMouseLeave={() => { cursorOK(), setqoshishX(0), setqoshishY(0) }}>
                        <div className='odatBtn'>Qo'shish</div>
                    </button>
                </form>
                <div className="mainOdatlarTable">
                    <div className="tepaOdatPanel">
                        <div style={{ color: 'gray', textTransform: 'uppercase' }}>odat</div>
                        {haftaKunlari.map((item, index) => {
                            return <div className="haftakuni" style={{ textTransform: 'uppercase', color: 'gray' }} key={index}>{item}</div>
                        })}
                        <div></div>
                    </div>
                    <div className="asosiyOdatlar">
                        {odatlar.map((odat) => (
                            <label key={odat.id} className="odatItem" style={{ margin: '10px 0', listStyleType: 'none' }}>

                                <div className='odatText'>{odat.text}</div>

                                {haftaKunlari.map((kun) => (
                                    <input
                                        key={kun}
                                        className="odatCheckbox"
                                        type="checkbox"
                                        checked={odat.kunlar?.[kun] || false}
                                        onChange={() => toggleodat(odat.id, kun)}
                                    />
                                ))}

                                <button type="button" className='deleteodatButton' onClick={() => deleteodat(odat.id)} onMouseEnter={cursorOO} onMouseLeave={cursorOK}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 26 26"><path fill="#ff0000b9" d="M11.5-.031c-1.958 0-3.531 1.627-3.531 3.594V4H4c-.551 0-1 .449-1 1v1H2v2h2v15c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V8h2V6h-1V5c0-.551-.449-1-1-1h-3.969v-.438c0-1.966-1.573-3.593-3.531-3.593h-3zm0 2.062h3c.804 0 1.469.656 1.469 1.531V4H10.03v-.438c0-.875.665-1.53 1.469-1.53zM6 8h5.125c.124.013.247.031.375.031h3c.128 0 .25-.018.375-.031H20v15c0 .563-.437 1-1 1H7c-.563 0-1-.437-1-1V8zm2 2v12h2V10H8zm4 0v12h2V10h-2zm4 0v12h2V10h-2z" /></svg>
                                </button>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Odatlar;