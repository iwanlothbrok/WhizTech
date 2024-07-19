import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import js from '../../styles/js-logo.png';
import csharp from '../../styles/Csharp_Logo.png';
import cpp from '../../styles/ISO_C++_Logo.svg.png';
import java from '../../styles/java-logo.webp';
import sql from '../../styles/sql.png';
import '../../styles/css/custom.css'
function Technologies() {
    const onClickHandle = () => scroll.scrollToTop({ duration: 200 })
    return (
        <div className="container mt-5 hidden">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-8 text-center text-white">
                    <h1 className="wow animate__fadeInDown">Индивидуални менторски уроци за <span className="text-bright-green">начинаещи</span></h1>
                    <p style={{ fontSize: '20px' }} className="wow animate__fadeInUp" data-wow-delay="0.2s">
                        В <span className="text-bright-green">Whiz Academy</span> предлагаме <strong>висококачествено менторство</strong> за начинаещи, съобразено с нуждите на съвременния ИТ пазар. Нашата програма обхваща основите на програмирането и включва най-новите технологии и тенденции. С <strong className='text-bright-green'>опитен екип от ментори-програмисти</strong>, ние предлагаме персонализирани уроци, които ви позволяват да се фокусирате върху конкретните си интереси и цели. Вярваме, че <strong>всеки може да научи програмиране</strong> и да изгради успешна кариера в софтуерната индустрия.
                        <br /><br />Започнете своя път към успешна кариера с нашите индивидуални менторски уроци. Свържете се с нас и се запишете за първи урок, който ще ви даде необходимите знания и увереност.
                    </p>
                    <p style={{ fontSize: '30px' }} className="text-center mt-4 mb-4 text-white wow animate__fadeInUp" data-wow-delay="0.4s">
                        Запиши се за първи урок{' '}
                        <Link to="/calendar" className="link clickLink fw-bold text-success">ТУК</Link>
                    </p>
                </div>
            </div>


            <div className="row justify-content-center align-items-center">

                <div className="col-md-6 text-center">
                    <div className="logo-container">
                        <Link to="/study/javascript">
                            <img className="logoJs hidden m-1" src={js} alt="JavaScript" onClick={onClickHandle} />
                        </Link>
                        <Link to="/study/csharp">
                            <img src={csharp} alt="C#" onClick={onClickHandle} className="logoCs hidden m-1" />
                        </Link>
                        <Link to="/study/cplus">
                            <img src={cpp} alt="C++" onClick={onClickHandle} className="logoCp hidden m-1" />
                        </Link>
                        <Link to="/study/java">
                            <img src={java} alt="Java" onClick={onClickHandle} className="logoJava hidden m-3" />
                        </Link>
                        <Link to="/study/sql">
                            <img src={sql} alt="Sql" onClick={onClickHandle} className="logoSql hidden m-3" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;
