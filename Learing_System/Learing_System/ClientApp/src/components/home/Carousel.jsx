import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';


function Carousel() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };


  return (
    <div className="container-fluid p-0 mb-5" >
      <Slider {...settings}>
        <div className="carousel-item">
          <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(24, 29, 56, .7)" }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                  <h1 className="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
                  <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                  <Link to="/read-more" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</Link>
                  <Link to="/join-now" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(24, 29, 56, .7)" }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                  <h1 className="display-3 text-white animated slideInDown">Get Educated Online From Your Home</h1>
                  <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                  <Link to="/read-more" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</Link>
                  <Link to="/join-now" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</Link>
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
