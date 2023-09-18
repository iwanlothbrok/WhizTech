import React, { useState } from 'react';
import { Link } from 'react-router-dom'
const Footer = () => {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Add smooth scrolling behavior for a smoother transition
        });
    }
    const [email, setEmail] = useState(''); // Initialize email state with an empty string

    const handleButtonClick = () => {
        // Reset the email input value to an empty string
        setEmail('');
    }

    return (
        //<div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">

        <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Полезни линкове</h4>
                        <Link className="btn btn-link" onClick={scrollToTop} to="/blog">Блог</Link>
                        <Link className="btn btn-link" onClick={scrollToTop} to="/study/csharp">Уроци по C#</Link>
                        <Link className="btn btn-link" onClick={scrollToTop} to="/study/js">Уроци по JavaScript</Link>
                        <Link className="btn btn-link" onClick={scrollToTop} to="/study/java">Уроци по Java</Link>
                        <Link className="btn btn-link" onClick={scrollToTop} to="/study/cplus">Уроци по C++</Link>
                        <Link className="btn btn-link" onClick={scrollToTop} to="/study/sql">Уроци по SQL</Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Контакти</h4>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+359 88 904 4614</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>whiz.tech@gmail.column</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Изпрати Имейл</h4>
                        <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>

                            <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <button type="button" onClick={handleButtonClick} className="btn bg-black text-white py-2 position-absolute top-0 end-0 mt-2 me-2">Изпрати</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">WhizTech</a>, All Right Reserved.
                            <a className="border-bottom m-2" href="https://htmlcodex.com">HTML Codex</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
