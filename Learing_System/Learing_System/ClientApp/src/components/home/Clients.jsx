import React, { useState, useEffect } from 'react';
import testimonialImage1 from '../../styles/testimonial-3.jpg'
import testimonialImage2 from '../../styles/testimonial-4.jpg'

const Clients = () => {
    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                    <h1 className="mb-5">Our Students Say!</h1>
                </div>
                <div className="owl-carousel testimonial-carousel position-relative">
                    <div className="testimonial-item text-center">
                        <img className="border rounded-circle p-2 mx-auto mb-3" src={testimonialImage1} style={{ width: '80px', height: '80px' }} alt="Client 1" />
                        <h5 className="mb-0">Client Name</h5>
                        <p>Profession</p>
                        <div className="testimonial-text bg-light text-center p-4">
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                    </div>

                    <div className="testimonial-item text-center">
                        <img className="border rounded-circle p-2 mx-auto mb-3" src={testimonialImage2} style={{ width: '80px', height: '80px' }} alt="Client 2" />
                        <h5 className="mb-0">Client Name</h5>
                        <p>Profession</p>
                        <div className="testimonial-text bg-light text-center p-4">
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Clients;
