import React, { useState, useEffect, useRef } from 'react';
import './Sozlamalar.sass';

function Sozlamalar({ mode, setMode, cursorOO, cursorOK }) {

    const lDelRef = useRef(null);

    const lDelPosition = (e) => {
        if (lDelRef.current) {
            const box = lDelRef.current.getBoundingClientRect();

            setlDelX(e.clientX - (box.left + box.width / 2))
            setlDelY(e.clientY - (box.top + box.height / 2))
        }
    };

    const [lDelX, setlDelX] = useState(0)
    const [lDelY, setlDelY] = useState(0)


    return (
        <>
            <div className="settingsContainer">
                <div className="settingContainer" style={{ background: `${mode === 'dark' ? '#1c1c1c' : '#fff'}` }}>
                    <h2 style={{ color: 'gray' }}>Qorong'u rejim</h2>
                    <button onClick={setMode} onMouseEnter={cursorOO} onMouseLeave={cursorOK} className="modeSwitcherBtnContainer" style={{ background: `${mode === 'dark' ? '#09ff006a' : '#eee'}`, justifyContent: `${mode === 'dark' ? 'end' : 'start'}` }}>
                        <button className="modeSwitcher"></button>
                    </button>
                </div>
                <button className="malumotDelBtnContainer" ref={lDelRef} onMouseEnter={cursorOO} onMouseMove={(e) => { lDelPosition(e)}} onMouseLeave={() => {cursorOK(), setlDelX(0), setlDelY(0)}} onClick={() => localStorage.clear()}>
                    <div className="malumotDelBtn">LocalStorageni tozalash</div>
                </button >
            </div >
        </>
    );
}

export default Sozlamalar;