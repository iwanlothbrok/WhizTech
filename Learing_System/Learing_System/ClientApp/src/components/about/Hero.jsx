import React from 'react'
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation
import hero from '../../styles/photos/aivan.png'
import '../../styles/css/hero.css'
import { animateScroll as scroll } from "react-scroll";

export default function Hero() {
    const green = { color: '#71F483' }
    const onClickHandle = () => scroll.scrollToTop({ duration: 200 })

    return (
        <section className="hero d-flex flex-column  justify-content-center align-items-center mt-4" id="intro">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h2 className="mb-2 text-white">Ментор</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="mx-auto col-lg-5 mt-4 col-md-5 col-10">
                        <img src={hero} className="img-fluid" alt="Ben Resume HTML Template" />
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-7 col-12 text-white bg-secondary mt-4 ">
                        <div className="hero-text">
                            <h1 className="hero-title">Иван Цветанов Иванов<p style={green}>Software Developer</p></h1>
                            <p className='mb-3'><strong>Иван Иванов</strong> е специалист с повече от <strong>1000 часа</strong> в преподаването и е работил с над <strong>30 обучаеми.</strong> <br />
                                Той програмира от 2021 година и в момента е <strong>Mid Software Developer</strong> в CPD Energy. Иван има опит в програмирането със C#, JavaScript, C++, Java, SQL, както и с технологии, като<strong> React и ASP.NET. </strong>
                                Участвал е в професионални проекти с различни технологии и има страст към софтуерното инженерство.
                                Вълнува се от програмиране, както на Back-End, така и на Front-End.<br></br> Обича да предава знанията си и да помага на хората да ги усвояват и напредват. <br />
                                <strong>Целта му</strong> като преподавател е да помогне на начинаещите да станат разработчици възможно <strong>най-бързо</strong>.</p>
                            <Link to='/course' onClick={onClickHandle}>  <button className='btn btn-lg mt-0 mb-5 consultationBtn'>КОНСУЛТАЦИЯ</button> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
