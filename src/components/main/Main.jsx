import React, { useState, useEffect, useRef, act } from 'react';
import Header from './header/Header.jsx';
import Dashboard from './modules/Dashboard.jsx';
import Odatlar from './modules/Odatlar.jsx';
import Eslatmalar from './modules/Eslatmalar';
import Sozlamalar from './modules/Sozlamalar';
import './Main.sass';

function Main({ setMode, cursorOO, cursorOK, activeTab, mode }) {
    document.title = `notes - ${activeTab}`;

    const [eslatmas, seteslatmas] = useState(() => {
        const saved = localStorage.getItem('local_eslatmas');
        return saved ? JSON.parse(saved) : [];
    });

    const [odatlar, setodatlar] = useState(() => {
        const saved = localStorage.getItem('local_odatlar');
        return saved ? JSON.parse(saved) : [];
    });

    return (
        <>
            <div className="header__container">
                <Header setMode={setMode} cursorOK={cursorOK} cursorOO={cursorOO} activeTab={activeTab} mode={mode} />
            </div>
            <div className="bolim">
                {activeTab === 'dashboard' && <Dashboard mode={mode} cursorOO={cursorOO} cursorOK={cursorOK} odatlar={odatlar} eslatmas={eslatmas} />}
                {activeTab === 'odatlar' && <Odatlar cursorOK={cursorOK} cursorOO={cursorOO} mode={mode} odatlar={odatlar} setodatlar={setodatlar} />}
                {activeTab === 'eslatmalar' && <Eslatmalar mode={mode} cursorOO={cursorOO} cursorOK={cursorOK} eslatmas={eslatmas} seteslatmas={seteslatmas} />}
                {activeTab === 'sozlamalar' && <Sozlamalar mode={mode} setMode={setMode} cursorOK={cursorOK} cursorOO={cursorOO} />}
            </div>
        </>
    );
}

export default Main;