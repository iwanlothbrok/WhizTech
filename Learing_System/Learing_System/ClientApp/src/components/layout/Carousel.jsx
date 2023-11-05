import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { event } from 'jquery';
import football from '../../styles/photos/imgFootball.png'
import coding from '../../styles/photos/imgCoding.png'
import english from '../../styles/photos/english.jpg'

function Carousel() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [number, setNumber] = useState('Номер за връзка');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };


  useEffect(() => {

  }, []);
  const imgStyle = {
    background: 'rgba(0, 0, 0, 0.68)'
  }



  return (
    <div className="container-fluid p-0 mb-5 text-center text-sm-start" >

      <Slider {...settings}>

        <div className="carousel-item position-relative">
          <img className="img-fluid w-100" src={coding} alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={imgStyle}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8 position-relative z-index-1">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown mt-5"></h5>
                  <h1 className="display-3 text-white animated slideInDown">Станете магьосник на код с нашите персонални уроци по програмиране!</h1>
                  {windowWidth >= 768 ? (
                    <React.Fragment>
                      <p className="fs-5 text-white mb-4 pb-2">Изживейте омагьосано кодиращо пътешествие с нашите персонализирани уроци!
                        Превърнете се в добросъвестни кодови магьосници, независимо дали сте магьосник на синтаксиса или магьосник на алгоритми. </p>
                      <Link to="/contact" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Контакти</Link>
                      <Link to='/' className="btn btn-light py-md-3 px-md-5 animated slideInRight">{number}</Link>
                    </React.Fragment>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img className="img-fluid w-100" src={football} alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={imgStyle}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8 position-relative z-index-1">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown"></h5>
                  <h1 className="display-3 text-white animated slideInDown">Овладейте занаята на кодирането с C#, C++, SQL и JavaScript!</h1>
                  {windowWidth >= 768 ? (
                    <React.Fragment>
                      <p className="fs-5 text-white mb-4 pb-2">Впуснете се в кодиращо пътешествие, което обхваща най-важното от C#, C++, SQL и JavaScript.
                        От изработване на елегантни решения с C# до навлизане в света на динамичната уеб разработка с JavaScript, нашите уроци ви дават възможност да създавате стабилни софтуерни системи,
                        да изследвате манипулирането на данни с SQL и да отключите потенциала на езиците за програмиране, които движат иновациите.</p>
                      <Link to="/teachers" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Още информация</Link>
                      <Link to='/' className="btn btn-light py-md-3 px-md-5 animated slideInRight">{number}</Link>
                    </React.Fragment>
                  ) : null}
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="img-fluid w-100 " src={english} alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={imgStyle}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8 position-relative z-index-1">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown"></h5>
                  <h1 className="display-3 text-white animated slideInDown">Енглиш</h1>
                  {windowWidth >= 768 ? (
                    <React.Fragment>
                      <p className="fs-5 text-white mb-4 pb-2">Впуснете се в кодиращо пътешествие, което обхваща най-важното от C#, C++, SQL и JavaScript.
                        От изработване на елегантни решения с C# до навлизане в света на динамичната уеб разработка с JavaScript, нашите уроци ви дават възможност да създавате стабилни софтуерни системи,
                        да изследвате манипулирането на данни с SQL и да отключите потенциала на езиците за програмиране, които движат иновациите.</p>
                      <Link to="/teachers" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Още информация</Link>
                      <Link to='/' className="btn btn-light py-md-3 px-md-5 animated slideInRight">{number}</Link>
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
