import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import img from '../../styles/aboutPh.jpg'; // Adjust the path based on your file structure
{/* <img src={img} alt="About photo" className="img-fluid mb-3" /> */ }

export default function Header() {
    return (
        <div>
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5 hidden">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 animated slideInDown text-white fw-bold" >За Нас</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><Link className="text-white" to="/">Начало</Link></li>
                                    <li className="breadcrumb-item"><Link className="text-white" to="/about">За Нас</Link></li>
                                    <li className="breadcrumb-item"><Link className="text-white" to="/course">Контакти</Link></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
