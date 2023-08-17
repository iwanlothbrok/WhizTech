import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { event } from 'jquery';


function Carousel() {

  const [isPhone, setPhone] = useState(window.innerWidth);
  const [number, setNumber] = useState('Номер за връзка')
  const isMobile = window.innerWidth <= 768; // Define mobile breakpoint

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  function onClickNumber(e) {
    e.preventDefault();
    if (number === 'Номер за връзка') {
      setNumber('0889100848')
    } else {
      setNumber('Номер за връзка');
    }
  }

  useEffect(() => {

  }, [isPhone]);


  return (
    <div className="container-fluid p-0 mb-5 text-center text-sm-start" >

      <Slider {...settings}>

        <div className="carousel-item position-relative">
          <img className="img-fluid w-100" src="img/carousel-1.jpg" alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(24, 29, 56, .7)" }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8 position-relative z-index-1">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown mt-5"></h5>
                  <h1 className="display-3 text-white animated slideInDown">Частни уроци по програмиране предназначени за всяка възраст</h1>
                  {isPhone >= 768 ? (
                    <React.Fragment>
                      <p className="fs-5 text-white mb-4 pb-2">Ако искате да добиете нужните умения за да станете софтуерени инженери сте на правилното място.</p>
                      <Link to="/contact" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Контакти</Link>
                      <Link to='/' onClick={onClickNumber} className="btn btn-light py-md-3 px-md-5 animated slideInRight">{number}</Link>
                    </React.Fragment>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img className="img-fluid w-100" src="img/carousel-2.jpg" alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(24, 29, 56, .7)" }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8 position-relative z-index-1">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown"></h5>
                  <h1 className="display-3 text-white animated slideInDown">Квалифицирани лектори, които работят с профисионализъм</h1>
                  {isPhone >= 768 ? (
                    <React.Fragment>
                      <p className="fs-5 text-white mb-4 pb-2">Нашите програмисти, които водят уроците са с много годишен опит в сферата
                        на софтуерните технологии и имат не малък опит с преподаването.
                        Изкарали са множество курсове с езиците C#, Java Script, C++, C, SQL и множество други технологии.</p>
                      <Link to="/teachers" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Още информация</Link>
                      <Link to='/' onClick={onClickNumber} className="btn btn-light py-md-3 px-md-5 animated slideInRight">{number}</Link>
                    </React.Fragment>
                  ) : null}
                </div>
              </div>

            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
