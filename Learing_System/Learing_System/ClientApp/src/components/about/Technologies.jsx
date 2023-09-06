import React from 'react';
import { Link } from 'react-router-dom'; 
import js from '../../styles/js-logo.png';
import csharp from '../../styles/Csharp_Logo.png';
import cpp from '../../styles/ISO_C++_Logo.svg.png';
import java from '../../styles/java-logo.webp';

function Technologies() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 text-center mb-4 text-white">
                    <h1>Съвременно практичесо обучение</h1>
                    <p style={{ fontSize: '20px' }}>
                        СофтУни организира най-задълбочените професионални програми по софтуерно и QA инженерство в България, предоставяйки възможност на курсистите да придобият професия "софтуерен инженер" или "инженер по автоматизирано тестване на софтуер". Учебните планове по софтуерно и QA инженерство на СофтУни са внимателно разработени с прякото участие на компаниите от IT сектора, включвайки работа с най-съвременните софтуерни технологии и усвояване на най-добрите практики в сферата на програмирането и софтуерното тестване.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 text-center">
                    <div className="logo-container">
                        <Link to="/javascript">
                            <img src={js} alt="JavaScript" style={{ width: '70px' }} className="logo m-1" />
                        </Link>
                        <Link to="/csharp">
                            <img src={csharp} alt="C#" style={{ width: '120px' }} className="logo m-1" />
                        </Link>
                        <Link to="/cplusplus">
                            <img src={cpp} alt="C++" style={{ width: '70px' }} className="logo m-1" />
                        </Link>
                        <Link to="/java">
                            <img src={java} alt="Java" style={{ width: '60px' }} className="logo m-3" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;
