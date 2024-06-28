
// src/components/products/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/css/productsDescriptionFunnel.css';
// import video from '../../styles/videos/0625.mp4';
import video from '../../styles/videos/0625 - 16х9.mp4';
import products from './data/products'; // Adjust the path if necessary
import CourseDesciption from './CourseDesciption';
import DiffCourse from './DiffCourse';
import StickyBuyNowCard from './StickyBuyNowCard';

export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [isMobile, setIsMobile] = useState(false);
    const [timeLeft, setTimeLeft] = useState(86400); // Initial time for 24 hours in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        function handleWindowSizeChange() {
            const isMobile = window.innerWidth <= 768; // Adjust the threshold as needed
            setIsMobile(isMobile);
        }

        // Add an event listener to check if the screen size changes
        window.addEventListener('resize', handleWindowSizeChange);

        // Check the initial screen size
        handleWindowSizeChange();

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    if (!product) {
        return (
            <div className='text-center p-5'>
                <h1 className='text-white p-5 m-5'>Невалиден продукт !</h1>
            </div>
        );
    }

    return (
        <div className="container mt-5">

            <div className="row">
                <h1 className='header-main fw-bold'>Първи стъпки в програмирането - Създаване на първия проекти</h1>
                <div className="col-md-8 col-sm-12" style={{ paddingRight: '0px' }}>
                    <div className="funnel-description text-white pr-0">

                        <div className="video-container">
                            <video controls className="video">
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <DiffCourse />
                    </div>
                </div>

                <div className="col-md-4 col-sm-12" style={{ paddingLeft: '0px' }}>
                    {/* here */}
                    <StickyBuyNowCard />
                </div>
            </div>
        </div>
    );
}