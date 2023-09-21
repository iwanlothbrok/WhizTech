import React, { useState, useEffect } from 'react';
import clientPhoto from '../../styles/teacher01.png'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel'; // Import Owl Carousel
import 'animate.css/animate.min.css';
import Client from './Client';

const Clients = () => {

    // const [clients, setClients] = useState([]);

    const clients = [
        {
            img: clientPhoto,
            fullName: 'Ivan Ivanov',
            profession: 'Developer',
            feedback: 'The'
        },
        {
            img: clientPhoto,
            fullName: 'Gogo',
            profession: 'Prigranus',
            feedback: 'The besst'
        },

    ]


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
                <div className="owl-carousel testimonial-carousel position-relative" style={carouselStyle}>

                    {clients.map((testimonial, index) => (
                        <Client
                            key={index}
                            client={testimonial}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Clients;
