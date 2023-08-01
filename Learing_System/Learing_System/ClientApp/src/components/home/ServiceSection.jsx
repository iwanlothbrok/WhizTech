import React from 'react';

function ServiceSection() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                <h5 className="mb-3">Студенти</h5>
                <p>имащи нужда от помощ с материала изучаван в университета, подготовка за изпити или курсови работи</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                <h5 className="mb-3">Самообучаващи</h5>
                <p>амбициозни и целеустремини, искайки да научат важните концпеции на програмирането самостоятелно</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-home text-primary mb-4"></i>
                <h5 className="mb-3">Ученици</h5>
                <p>които имат нужда от помощ с учебния материал, или искат да се развиват в сферата на програмирането и технологиите</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                <h5 className="mb-3">Online Videos and Resourses</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
