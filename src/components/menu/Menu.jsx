import React, { useState, useEffect, useRef } from 'react';
import './Menu.sass';

function Menu({ mode, openMenu, nav, cursorOO, cursorOK, activeTab, setActiveTabDashboard, setActiveTabOdatlar, setActiveTabEslatmalar, setActiveTabSozlamalar }) {

    const buttonRef = useRef(null);

    const cursorPosition = (e) => {
        if (buttonRef.current) {
            const box = buttonRef.current.getBoundingClientRect();

            setX(e.clientX - (box.left + box.width / 2))
            setY(e.clientY - (box.top + box.height / 2))
        }
    };

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const dashboardRef = useRef(null);
    const [dashboardX, setDashboardX] = useState(0)
    const [dashboardY, setDashboardY] = useState(0)
    const odatlarRef = useRef(null);
    const [odatlarX, setOdatlarX] = useState(0)
    const [odatlarY, setOdatlarY] = useState(0)
    const eslatmalarRef = useRef(null);
    const [eslatmalarX, setEslatmalarX] = useState(0)
    const [eslatmalarY, setEslatmalarY] = useState(0)
    const sozlamalarRef = useRef(null);
    const [sozlamalarX, setSozlamalarX] = useState(0)
    const [sozlamalarY, setSozlamalarY] = useState(0)

    const dashboardPosition = (e) => {
        if (dashboardRef.current) {
            const box = dashboardRef.current.getBoundingClientRect();

            setDashboardX(e.clientX - (box.left + box.width / 2))
            setDashboardY(e.clientY - (box.top + box.height / 2))
        }
    };

    const odatlarPosition = (e) => {
        if (odatlarRef.current) {
            const box = odatlarRef.current.getBoundingClientRect();

            setOdatlarX(e.clientX - (box.left + box.width / 2))
            setOdatlarY(e.clientY - (box.top + box.height / 2))
        }
    };

    const eslatmalarPosition = (e) => {
        if (eslatmalarRef.current) {
            const box = eslatmalarRef.current.getBoundingClientRect();

            setEslatmalarX(e.clientX - (box.left + box.width / 2))
            setEslatmalarY(e.clientY - (box.top + box.height / 2))
        }
    };

    const sozlamalarPosition = (e) => {
        if (sozlamalarRef.current) {
            const box = sozlamalarRef.current.getBoundingClientRect();

            setSozlamalarX(e.clientX - (box.left + box.width / 2))
            setSozlamalarY(e.clientY - (box.top + box.height / 2))
        }
    };

    return (
        <>
            <div onClick={openMenu} className="nav__module__header" ref={buttonRef} onMouseLeave={() => { setX(0), setY(0), cursorOK(22) }} onMouseMove={(e) => { cursorPosition(e) }} onMouseEnter={cursorOO}>
                <button className="nav__module__header__item">
                    <div className="svg__container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="#FFD469" d="M450.812 462.658H74.759a8.802 8.802 0 0 1-8.802-8.802V77.802A8.802 8.802 0 0 1 74.759 69H290.76l168.854 168.854v216.001a8.802 8.802 0 0 1-8.802 8.803z" /><path fill="#597B91" d="M242.863 168.403H126.007c-6.613 0-11.974-5.361-11.974-11.974s5.361-11.974 11.974-11.974h116.856c6.613 0 11.974 5.361 11.974 11.974s-5.361 11.974-11.974 11.974zm11.974 66.401c0-6.613-5.361-11.974-11.974-11.974H126.007c-6.613 0-11.974 5.361-11.974 11.974s5.361 11.974 11.974 11.974h116.856c6.613-.001 11.974-5.361 11.974-11.974zm0 78.374c0-6.612-5.361-11.974-11.974-11.974H126.007c-6.613 0-11.974 5.361-11.974 11.974s5.361 11.974 11.974 11.974h116.856c6.613-.001 11.974-5.362 11.974-11.974zm101.165 78.374c0-6.612-5.361-11.974-11.974-11.974H126.007c-6.613 0-11.974 5.361-11.974 11.974s5.361 11.974 11.974 11.974h218.021c6.613-.001 11.974-5.362 11.974-11.974zm40.334-78.374c0-6.612-5.361-11.974-11.974-11.974h-80.668c-6.612 0-11.974 5.361-11.974 11.974s5.361 11.974 11.974 11.974h80.668c6.613-.001 11.974-5.362 11.974-11.974z" /><path fill="#FFB636" d="m290.76 69l168.854 168.854H326.651c-19.822 0-35.891-16.069-35.891-35.891V69z" /></svg>                    </div>
                    {nav ? <h1 className='main__name' style={{ textTransform: 'capitalize', color: `${mode === 'dark' ? 'white' : 'black'}` }}>notes</h1> : null}
                </button>
            </div>
            <div className="nav__module">
                <div onMouseLeave={() => { setDashboardX(0), setDashboardY(0), cursorOK() }} onMouseMove={(e) => { dashboardPosition(e) }} onMouseEnter={cursorOO} ref={dashboardRef} className="nav__item__container" onClick={setActiveTabDashboard}>
                    <div className="nav__item" style={{ color: `${activeTab === 'dashboard' ? '#6366F1' : '#515151'}`, background: `${activeTab === 'dashboard' ? 'rgba(99, 102, 241, 0.133)' : '#51515100'}` }} >
                        <div className="nav__item__image"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={`${activeTab === 'dashboard' ? '#6366F1' : '#515151'}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"></path></svg></div>
                        {nav ? <div className="nav__item__name">asosiy</div> : null}
                    </div>
                </div>
                <div onMouseLeave={() => { setOdatlarX(0), setOdatlarY(0), cursorOK() }} onMouseMove={(e) => { odatlarPosition(e) }} onMouseEnter={cursorOO} ref={odatlarRef} className="nav__item__container" onClick={setActiveTabOdatlar}>
                    <div className="nav__item" style={{ color: `${activeTab === 'odatlar' ? '#6366F1' : '#515151'}`, background: `${activeTab === 'odatlar' ? 'rgba(99, 102, 241, 0.133)' : '#51515100'}` }}>
                        <div className="nav__item__image"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={`${activeTab === 'odatlar' ? '#6366F1' : '#515151'}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path></svg></div>
                        {nav ? <div className="nav__item__name">odatlar</div> : null}
                    </div>
                </div>
                <div onMouseLeave={() => { setEslatmalarX(0), setEslatmalarY(0), cursorOK() }} onMouseMove={(e) => { eslatmalarPosition(e) }} onMouseEnter={cursorOO} ref={eslatmalarRef} className="nav__item__container" onClick={setActiveTabEslatmalar}>
                    <div className="nav__item" style={{ color: `${activeTab === 'eslatmalar' ? '#6366F1' : '#515151'}`, background: `${activeTab === 'eslatmalar' ? 'rgba(99, 102, 241, 0.133)' : '#51515100'}` }}>
                        <div className="nav__item__image"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={`${activeTab === 'eslatmalar' ? '#6366F1' : '#515151'}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5v-15z"></path></svg></div>
                        {nav ? <div className="nav__item__name">eslatmalar</div> : null}
                    </div>
                </div>
                <div onMouseLeave={() => { setSozlamalarX(0), setSozlamalarY(0), cursorOK() }} onMouseMove={(e) => { sozlamalarPosition(e) }} onMouseEnter={cursorOO} ref={sozlamalarRef} className="nav__item__container" onClick={setActiveTabSozlamalar}>
                    <div className="nav__item" style={{ color: `${activeTab === 'sozlamalar' ? '#6366F1' : '#515151'}`, background: `${activeTab === 'sozlamalar' ? 'rgba(99, 102, 241, 0.133)' : '#51515100'}` }}>
                        <div className="nav__item__image"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={`${activeTab === 'sozlamalar' ? '#6366F1' : '#515151'}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></svg></div>
                        {nav ? <div className="nav__item__name">sozlamalar</div> : null}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;