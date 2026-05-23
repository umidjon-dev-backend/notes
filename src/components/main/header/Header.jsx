import React, { useState, useEffect, useRef } from 'react';
import './Header.sass';

function Header({ setMode, cursorOO, cursorOK, activeTab, mode }) {

    const modeButtonRef = useRef(null);

    const cursorPosition = (e) => {
        if (modeButtonRef.current) {
            const modeBox = modeButtonRef.current.getBoundingClientRect();

            setModeX(e.clientX - (modeBox.left + modeBox.width / 2))
            setModeY(e.clientY - (modeBox.top + modeBox.height / 2))
        }
    };

    const [modeX, setModeX] = useState(0)
    const [modeY, setModeY] = useState(0)

    return (
        <>
            <header className="header">
                <h1 className='activeTab__name'>{activeTab}</h1>
                <div onClick={setMode} className="mode__switch__container" ref={modeButtonRef} onMouseLeave={() => { setModeX(0), setModeY(0), cursorOK() }} onMouseMove={(e) => { cursorPosition(e) }} onMouseEnter={cursorOO} >
                    <button className="mode__switch" style={{ color: `${mode === 'dark' ? '#ffd500' : '#0000b1'}`, background: `${mode === 'dark' ? '#33333354' : '#ffffff54'}` }}>{mode === 'dark' ? '☼' : '☾'}</button>
                </div>
            </header>
        </>
    );
}

export default Header;