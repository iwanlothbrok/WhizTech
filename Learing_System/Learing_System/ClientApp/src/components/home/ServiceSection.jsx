import React, { useEffect, useState } from 'react';
function ServiceSection() {
  return (
    <div className='hidden' style={{ backgroundColor: '#232323' }}>
      <div className="container-xxl py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h2 className="mb-5 text-white">За кого са предназначени уроците</h2>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp logo hidden" data-wow-delay="0.1s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-graduation-cap text-alert mb-4"></i>
                  <h5 className="mb-3">Студенти</h5>
                  <p>имащи нужда от помощ с материала изучаван в университета, подготовка за изпити или курсови работи</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp logo hidden" data-wow-delay="0.3s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-globe text-alert mb-4"></i>
                  <h5 className="mb-3">Самообучаващи</h5>
                  <p>амбициозни и целеустремини, искайки да научат важните концпеции на програмирането самостоятелно</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp logo hidden" data-wow-delay="0.5s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-home text-alert mb-4"></i>
                  <h5 className="mb-3">Ученици</h5>
                  <p>които имат нужда от помощ с учебния материал, или искат да се развиват в сферата на програмирането и технологиите</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp logo hidden" data-wow-delay="0.7s">
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-book-open text-alert mb-4"></i>
                  <h5 className="mb-3">Ентусиасти</h5>
                  <p>които обичат предизвикателствата и искат да разширят своите знания и умения в програмирането.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
