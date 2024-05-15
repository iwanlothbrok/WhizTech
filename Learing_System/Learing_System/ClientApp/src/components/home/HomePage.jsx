import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img from '../../styles/photos/bg-biju.png'; // Adjust the path based on your file structure
import { animateScroll as scroll } from "react-scroll";

export default function HomePage() {
    const [isMobile, setIsMobile] = useState(false);

    const onClickHandle = () => scroll.scrollToTop({ duration: 200 });

    useEffect(() => {
        function handleWindowSizeChange() {
            setIsMobile(window.innerWidth <= 768);
        }

        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);
        return () => window.removeEventListener('resize', handleWindowSizeChange);
    }, []);

    const sectionStyle = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    };

    const btnStyle = {
        borderColor: 'black',
        borderRadius: '25px',
        padding: '30px 40px',
        backgroundColor: 'white',
        color: 'black',
        fontSize: '1.5rem',
        transition: 'background-color 0.3s, color 0.3s',
    };

    const btnHoverStyle = {
        backgroundColor: 'black',
        color: 'white',
    };

    return (
        <section style={sectionStyle}>
            <div className="photo-container d-flex flex-column justify-content-center align-items-center">
                <div className="centered-text text-center p-4">
                    <h2 className={`display-2 mb-0 text-white ${isMobile ? 'mt-0' : 'mt-5'}`}>
                        <strong>ИНДИВИДУАЛНИ УРОЦИ ПО ПРОГРАМИРАНЕ ЗА <span style={{ color: '#71F483' }}>НАЧИНАЕЩИ</span></strong>
                    </h2>
                    <h4 className={`mb-0 text-white ${isMobile ? 'mt-4' : 'mt-1'}`}>
                        ЗАПИШИ СЕ СЕГА И ПОЛУЧИ ПЪРВИ <span style={{ color: '#71F483' }}>БЕЗПЛАТЕН УРОК</span>
                    </h4>
                </div>
                <Link to='/signin'>
                    <button
                        style={btnStyle}
                        onMouseEnter={(e) => { e.target.style.backgroundColor = btnHoverStyle.backgroundColor; e.target.style.color = btnHoverStyle.color; }}
                        onMouseLeave={(e) => { e.target.style.backgroundColor = btnStyle.backgroundColor; e.target.style.color = btnStyle.color; }}
                        onClick={onClickHandle}
                        className="btn btn-outline-secondary fw-bold mt-0 m-2 btn-lg flex-fill custom-button"
                    >
                        ЗАПИШИ СЕ
                    </button>
                </Link>
            </div>
        </section>
    );
}
