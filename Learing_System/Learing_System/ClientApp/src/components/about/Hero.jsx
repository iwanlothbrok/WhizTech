import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../styles/photos/ronaldo.png';
import '../../styles/css/hero.css';
import { animateScroll as scroll } from "react-scroll";

export default function Hero() {
    const onClickHandle = () => scroll.scrollToTop({ duration: 200 });

    return (
        <section className="hero d-flex flex-column justify-content-center align-items-center mt-4" id="intro">
            <div className="text-center wow animate__fadeInUp" data-wow-delay="0.1s">
                <h2 className="mb-2 text-success">Ментор</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="mx-auto col-lg-6 mt-4 col-md-5 col-12">
                        <img
                            src={hero}
                            className="img-fluid hero-img wow animate__fadeInLeft"
                            alt="Mentor"
                        />
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center col-lg-6 col-md-7 col-12 text-white hero-text-container mt-4 p-4 wow animate__fadeInRight">
                        <div className="hero-text">
                            <h1 className="hero-title">
                                Иван Цветанов Иванов
                                <p className='text-bright-green'>Software Developer</p>
                            </h1>
                            <p className='mb-2'>
                                <strong>Иван Иванов</strong> е специалист с над <strong>1000 часа преподаване</strong> и е обучил повече от <strong>30 ученика</strong>. Започва да програмира през 2021 година и в момента работи като <strong>Mid Software Developer</strong> в CPD Energy. Той има опит със C#, JavaScript, C++, Java, SQL, както и с технологии като <strong>React и ASP.NET</strong>. Иван е участвал в професионални проекти с различни технологии и има страст към софтуерното инженерство, както на Back-End, така и на Front-End. Обича да предава знанията си и да помага на хората да напредват. <br /><strong>Неговата цел</strong> е да помогне на начинаещите да станат разработчици възможно <strong>най-бързо</strong>.
                            </p>
                            <Link to='/course' onClick={onClickHandle}>
                                <button className='btn btn-lg mt-3 mb-5 consultationBtn'>КОНСУЛТАЦИЯ</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
