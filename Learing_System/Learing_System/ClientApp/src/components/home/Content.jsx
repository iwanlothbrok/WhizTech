import React from 'react';
import img from '../../styles/favicon.png'
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
                            <h1 className="mb-4">Добре дошли в ЕУРОЦИ</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div className="row gy-2 gx-4 mb-4">
                                <div className="col-12 col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-alert me-2"></i>Skilled Instructors</p>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-alert me-2"></i>Online Classes</p>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-alert me-2"></i>International Certificate</p>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-alert me-2"></i>Skilled Instructors</p>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-alert me-2"></i>Online Classes</p>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-alert me-2"></i>International Certificate</p>
                                </div>
                            </div>
                            <a className="btn bg-black text-white py-3 px-5 mt-2" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Content;
