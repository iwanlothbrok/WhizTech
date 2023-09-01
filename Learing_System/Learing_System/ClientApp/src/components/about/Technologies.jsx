import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router for navigation
import js from '../../styles/js-logo.png'
import csharp from '../../styles/c#-logo.png'
import cpp from '../../styles/ISO_C++_Logo.svg.png'
import java from '../../styles/Java-Logo.jpg'

function Technologies() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 text-center mb-4 text-white">
                    <h2>Съвременно практическо обучение</h2>
                    <p>
                        СофтУни организира най-задълбочените професионални програми по софтуерно и Q
                        A инженерство в България, предоставяйки възможност на курсистите да придобия
                        т професия "софтуерен инженер" или "инженер по автоматизирано тестване на со
                        фтуер". Учебните планове по софтуерно и QA инженерство на СофтУни са внимател
                        но разработени с прякото участие на компаниите от IT сектора, включвайки работ
                        а с най-съвременните софтуерни технологии и усвояване на най-добрите практики в с
                        ферата на програмирането и софтуерното тестване.
                    </p>
                </div>
                <div className="col-md-6 text-center">
                    <div className="logo-container">
                        {/* Use Link components to navigate to other pages */}
                        <Link to="/javascript">
                            <img src={js} alt="JavaScript" style={{ width: '50px' }} className="logo" />
                        </Link>
                        <Link to="/csharp">
                            <img src={csharp} alt="C#" style={{ width: '50px' }} className="logo" />
                        </Link>
                        <Link to="/cplusplus">
                            <img src={cpp} alt="C++" style={{ width: '50px' }} className="logo" />
                        </Link>
                        <Link to="/java">
                            <img src={java} alt="Java" style={{ width: '50px' }} className="logo" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;
