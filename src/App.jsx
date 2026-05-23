import React, { useState, useEffect, useRef } from 'react';
import Cursor from './components/cursor/Cursor.jsx';
import Menu from './components/menu/Menu.jsx';
import Main from './components/main/Main.jsx';
import './App.css';

function App() {

    // CURSOR
    const [clienty, setClienty] = useState(0);
    const [clientx, setClientx] = useState(0);
    const [cursorO, setCursorO] = useState(22);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setClientx(e.clientX);
            setClienty(e.clientY);
        };

        const handleTouchMove = (e) => {
            if (e.touches && e.touches.length > 0) {
                setClientx(e.touches[0].clientX);
                setClienty(e.touches[0].clientY);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);
    // CURSOR

    const [activeTab, setActiveTab] = useState('dashboard')
    const [openNav, setOpenNav] = useState(true)
    const [mode, setMode] = useState(() => {
        const savedMode = localStorage.getItem('app-mode');
        return savedMode ? savedMode : 'dark';
    })

    useEffect(() => {
        localStorage.setItem('app-mode', mode);
    }, [mode])

    return (
        <>
            <Cursor x={clientx} y={clienty} o={cursorO} mode={mode} />
            <main className="main" style={{ gridTemplateColumns: `${openNav ? '1.4fr 8.6fr' : '0.5fr 9.5fr'}`, background: `${mode === 'light' ? '#eee' : '#111'}`, color: `${mode === 'dark' ? '#fff' : '#000'}` }}>
                <nav className="navbar" style={{ background: `${mode === 'dark' ? '#111' : '#fff'}` }}>
                    <Menu mode={mode} setActiveTabSozlamalar={() => setActiveTab('sozlamalar')} setActiveTabEslatmalar={() => setActiveTab('eslatmalar')} setActiveTabOdatlar={() => setActiveTab('odatlar')} setActiveTabDashboard={() => setActiveTab('dashboard')} activeTab={activeTab} openMenu={() => setOpenNav(openNav ? false : true)} nav={openNav} cursorOO={() => { setCursorO(38) }} cursorOK={() => { setCursorO(22) }} />
                </nav>
                <section className="asosiySection" style={{ background: `${mode === 'dark' ? '#000' : '#eee'}` }}>
                    <Main mode={mode} setMode={() => { setMode(mode === 'dark' ? 'light' : 'dark') }} activeTab={activeTab} cursorOO={() => { setCursorO(38) }} cursorOK={() => { setCursorO(22) }} />
                </section>
            </main>
        </>
    );
}

export default App;