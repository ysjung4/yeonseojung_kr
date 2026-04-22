// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const handleDownload = (e) => {
        const confirmDownload = window.confirm("이력서를 다운로드하시겠습니까?");
        if (!confirmDownload) {
            e.preventDefault();
        }
    };

    return (
        <nav className="navbar">
            <Link to="/">PROJECTS</Link>
            <Link to="/about">ABOUT ME</Link>
            <a 
                href="/YeonseoJung_kr.pdf" 
                download="YeonseoJung_kr.pdf" 
                onClick={handleDownload}
            >
                Download CV
            </a>
        </nav>
    );
}

export default Navbar;
