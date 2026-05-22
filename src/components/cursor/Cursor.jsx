import React, { useState, useEffect } from 'react';
import './Cursor.sass';

function Cursor({ x, y, o, mode }) {

    return (
        <>
            {/* CURSOR */}
            <div className="cursorDotContainer">
                <div className="cursorDot" style={{background: `${mode === 'dark' ? '#d2d1d1' : '#1e1e1e'}`, transform: `translateY(${y}px) translateY(-50%) translateX(${x}px) translateX(-50%)` }}></div>
            </div>
            <div className="cursorContainer">
                <div style={{ transform: `translateY(${y}px) translateY(-50%) translateX(${x}px) translateX(-50%)`, width: `${o}px`, height: `${o}px` }} className="cursor"></div>
            </div>
            {/* CURSOR */}
        </>
    );
}

export default Cursor;