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
                    <h1>Индивидуални уроци за <span class="greenText">начинаещи</span></h1>
                    <p style={{ fontSize: '20px' }}>

                        В Whiz Academy сме специализирани в предоставянето на висококачествено обучение за начинаещи,
                        което отговаря на съвременните изисквания на ИТ пазара. Нашата учебна програма е предназначена за начинаещи
                        и обхваща основите на програмирането, като включва най-новите технологии и тенденции в областта.
                        С <strong>опитен екип </strong>от
                        програмисти ние предлагаме персонализирани уроци,
                        които Ви позволяват да се съсредоточите върху конкретните си интереси и цели.
                        <strong> Ние вярваме</strong>, че всеки може да научи програмирането
                        и да изгради успешна кариера в софтуерната индустрия. Не се колебайте повече,
                        а започнете пътя си към успешна кариера в програмирането.
                        <br />Свържете се с нас и се запишете на<strong> индивидуални
                            уроци по програмиране</strong>, които ще Ви дадат необходимите знания и увереност.
                        <p style={{ fontSize: '30px' }} className="text-center mt-4 mb-4 text-white">
                            Запиши се за първи урок {' '}
                            <Link to="/calendar" className="link clickLink fw-bold"> ТУК</Link>
                        </p>
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
