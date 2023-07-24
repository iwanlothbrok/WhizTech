import React from 'react';

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
                        <img className="border rounded-circle p-2 mx-auto mb-3" src="/img/testimonial-1.jpg" style={{ width: '80px', height: '80px' }} alt="Client Name" />
                        <h5 className="mb-0">Client Name</h5>
                        <p>Profession</p>
                        <div className="testimonial-text bg-light text-center p-4">
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                    </div>
                    {/* Add similar code blocks for other testimonials */}
                    <div className="testimonial-item text-center">
                        {/* Testimonial 2 content */}
                    </div>
                    <div className="testimonial-item text-center">
                        {/* Testimonial 3 content */}
                    </div>
                    <div className="testimonial-item text-center">
                        {/* Testimonial 4 content */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;
