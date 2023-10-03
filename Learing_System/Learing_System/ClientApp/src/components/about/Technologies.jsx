import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import js from '../../styles/js-logo.png';
import csharp from '../../styles/Csharp_Logo.png';
import cpp from '../../styles/ISO_C++_Logo.svg.png';
import java from '../../styles/java-logo.webp';
import sql from '../../styles/sql.png';
function Technologies() {
    const onClickHandle = () => scroll.scrollToTop({ duration: 200 })

    return (
        <div className="container mt-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 text-center mb-4 text-white">
                    <h1>Индивидуални уроци</h1>
                    <p style={{ fontSize: '20px' }}>
                        Ние в WhizTech предлагаме висококачествено обучение,
                        съобразено със съвременните изисквания на ИТ пазара. Нашата учебна програма обхваща най-новите технологии и тенденции в програмирането.

                        Благодарение на нашия опитен екип от инструктори и персонализираните уроци можете да се съсредоточите върху конкретните си
                        интереси и цели. Ние вярваме, че всеки може да научи програмиране и да изгради успешна кариера в софтуерната индустрия.

                        Не се колебайте повече, започнете пътя си към успешна кариера в областта на програмирането с нас.
                        Свържете се с нас и се запишете за частни уроци по програмиране, които ще ви осигурят необходимите знания и увереност. <p style={{ fontSize: '30px' }} className="text-center mb-4 text-white">
                            Запиши се {' '}
                            <Link to="/contact" className="link" style={{ color: '#71F483' }}>ТУК</Link>
                        </p>
                    </p>
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 text-center">
                    <div className="logo-container">
                        <Link to="/study/javascript">
                            <img src={js} alt="JavaScript" onClick={onClickHandle} style={{ width: '70px' }} className="logo m-1" />
                        </Link>
                        <Link to="/study/csharp">
                            <img src={csharp} alt="C#" onClick={onClickHandle} style={{ width: '120px' }} className="logo m-1" />
                        </Link>
                        <Link to="/study/cplus">
                            <img src={cpp} alt="C++" onClick={onClickHandle} style={{ width: '70px' }} className="logo m-1" />
                        </Link>
                        <Link to="/study/java">
                            <img src={java} alt="Java" onClick={onClickHandle} style={{ width: '60px' }} className="logo m-3" />
                        </Link>
                        <Link to="/study/sql">
                            <img src={sql} alt="Java" onClick={onClickHandle} style={{ width: '70px' }} className="logo m-3" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;
