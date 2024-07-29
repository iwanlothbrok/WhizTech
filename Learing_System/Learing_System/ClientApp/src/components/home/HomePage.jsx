import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img from '../../styles/photos/bg-biju.png';
import { animateScroll as scroll } from "react-scroll";
import '../../styles/css/homePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

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

    return (
        <section style={sectionStyle} className="animate__animated animate__fadeIn">
            <div className="photo-container d-flex flex-column justify-content-center align-items-center">
                <div className="centered-text text-center p-4">
                    <h2 className={`display-2 mb-0 text-white ${isMobile ? 'mt-0' : 'mt-5'} animate__animated animate__fadeInDown`}>
                        <strong>
                            ПЕРСОНАЛИЗИРАНО ОБУЧЕНИЕ ЗА ТРАНСФОРМИРАНЕ НА <span className="text-bright-green">НАЧИНАЕЩИ В ЕКСПЕРТНИ ПРОГРАМИСТИ</span>
                        </strong>
                    </h2>
                    <h4 className={`mb-0 text-white ${isMobile ? 'mt-4' : 'mt-1'} animate__animated animate__fadeInUp animate__delay-1s`}>
                        ЗАПОЧНИ СВОЕТО ПЪТЕШЕСТВИЕ ДНЕС!<span className="text-bright-green"> ПОЛУЧИ БЕЗПЛАТНА КОНСУЛТАЦИЯ</span>
                    </h4>
                </div>

                <Link to='/course'>
                    <button
                        className="signBtn btn btn-lg btn-outline-light animate__animated animate__zoomIn animate__delay-2s"
                        onMouseEnter={(e) => {
                            e.target.classList.add('btn-success');
                            e.target.classList.remove('btn-outline-light');
                        }}
                        onMouseLeave={(e) => {
                            e.target.classList.add('btn-outline-light');
                            e.target.classList.remove('btn-success');
                        }}
                    >
                        ЗАПИШИ СЕ
                    </button>
                </Link>
            </div>
        </section >
    );
}
