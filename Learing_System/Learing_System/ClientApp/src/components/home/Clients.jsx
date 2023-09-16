import React, { useState, useEffect } from 'react';
import client from '../../styles/teacher01.png'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel'; // Import Owl Carousel
import 'animate.css/animate.min.css';

const Clients = () => {
    const carouselStyle = {
        boxShadow: '5px 5px 10px rgba(255, 0, 0, 0.5);' /* Change the color here */

    }
    useEffect(() => {
        if (window.$) {
            window.$('.testimonial-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 4000,

                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            });
        }
    }, []);


    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="owl-carousel testimonial-carousel position-relative" style={carouselStyle}  >
                    <div className="testimonial-item text-center bg-black" >
                        <img className="border rounded-circle p-2 mx-auto mb-3" src={client} style={{ width: '80px', height: '80px' }} alt="Client 1" />
                        <h5 className="mb-0 text-white ">Николай Желев</h5>
                        <p className='text-white'>Студент по Софтуерни технологии</p>
                        <div className="testimonial-text bg-black text-center p-4 text-white ">
                            <p className="mb-0">Уроците промениха живота ми, обичам ги.</p>
                        </div>
                    </div>
                    <div className="testimonial-item text-center bg-black">
                        <img className="border rounded-circle p-2 mx-auto mb-3" src={client} style={{ width: '80px', height: '80px' }} alt="Client 1" />
                        <h5 className="mb-0 text-white ">Client Name</h5>
                        <p className='text-white'>Profession</p>
                        <div className="testimonial-text bg-black text-center p-4 text-white ">
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Clients;
