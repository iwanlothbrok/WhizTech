import React, { useEffect } from 'react';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ServiceSection() {
  useEffect(() => {
    const wow = require('wowjs');
    new wow.WOW({ live: false, offset: 100, mobile: true, duration: 0.5 }).init();
  }, []);

  return (
    <div className="service-section" style={{ backgroundColor: '#232323' }}>
      <div className="container-xxl py-5">
        <div className="text-center wow animate__fadeInUp" data-wow-delay="0.1s">
          <h2 className="mb-5 text-white">ЗАЩО ДА ИЗБЕРЕТЕ WHIZ ACADEMY?</h2>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow animate__fadeInUp fadeInUp logo hidden" data-wow-delay="0.2s">
              <div className="service-item text-center p-4 bg-dark rounded">
                <i className="fa fa-3x fa-user-cog text-success mb-4"></i>
                <h5 className="mb-3 text-white">🎓 Персонализирано обучение</h5>
                <p className="text-light">
                  Нашите програми са създадени да отговарят на вашите индивидуални нужди и цели.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow animate__fadeInUp fadeInUp logo hidden" data-wow-delay="0.5s">
              <div className="service-item text-center p-4 bg-dark rounded">
                <i className="fa fa-3x fa-clock text-success mb-4"></i>
                <h5 className="mb-3 text-white">⏰ Гъвкав график</h5>
                <p className="text-light">
                  Учете в удобно за вас време, без да жертвате текущите си ангажименти.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow animate__fadeInUp fadeInUp logo hidden" data-wow-delay="0.8s">
              <div className="service-item text-center p-4 bg-dark rounded">
                <i className="fa fa-3x fa-chalkboard-teacher text-success mb-4"></i>
                <h5 className="mb-3 text-white">👩‍🏫 Експертни ментори</h5>
                <p className="text-light">
                  Получете насоки от опитни професионалисти, които ще ви помогнат да се развиете бързо.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow animate__fadeInUp fadeInUp logo hidden" data-wow-delay="1.1s">
              <div className="service-item text-center p-4 bg-dark rounded">
                <i className="fa fa-3x fa-briefcase text-success mb-4"></i>
                <h5 className="mb-3 text-white">💼 Реални проекти</h5>
                <p className="text-light">
                  Работете по проекти, които Ви подготвят за реални работни ситуации.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
