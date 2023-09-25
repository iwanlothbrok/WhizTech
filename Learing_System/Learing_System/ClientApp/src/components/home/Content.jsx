import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../styles/blackLogo.png'
const Content = () => {
    return (
        <div className='text-white'>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-12 col-lg-6 wow fadeInUp" data-wow-delay="0.5s" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="img-fluid position-absolute w-100 h-100" src={img} alt="LOGO" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h1 className="mb-4">Добре дошли в WhizTech</h1>
                            <p className="mb-4">Независимо дали сте начинаещ или опитен програмист, ние ви предлагаме персонализирани уроци, които ще ви помогнат да достигнете нови висоти в програмирането.</p>
                            <p className="mb-4">В програмирането никога не спираме да учим и растем. Нашият образователен подход е създаден така, че да отговаря на вашите специфични нужди и ниво на опит. Ако сте начинаещ, нашите уроци ще ви предоставят твърда основа и ясно разбиране на основните концепции. Ако сте опитен програмист, нашите уроци ще ви помогнат да разширите вашите умения и да се издигнете на нови нива на експертност.</p>
                            <div className="row gy-2 gx-4 mb-4">
                                <div className="col-12 col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-alert me-2"></i>Професионални Инструктори</p>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-alert me-2"></i>Гъвкави Онлайн Уроци</p>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-alert me-2"></i>Персонализиран Подход</p>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-alert me-2"></i>Онлайн Ресурси</p>
                                </div>

                            </div>
                            <Link to='/contact'>
                                <button  className="btn p-4 btn-lg  custom-button">Запиши се</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Content;
