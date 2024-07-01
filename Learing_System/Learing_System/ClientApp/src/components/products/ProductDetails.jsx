
// src/components/products/ProductDetails.js
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/css/productsDescriptionFunnel.css';
// import video from '../../styles/videos/0625.mp4';
import products from './data/products'; // Adjust the path if necessary
import CourseDesciption from './CourseDesciption';
import DiffCourse from './DiffCourse';
import StickyBuyNowCard from './StickyBuyNowCard';

export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [isMobile, setIsMobile] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play();
        }
    }, [product.video]);

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
                <h1 className='text-white p-5 m-5'>Невалиден продукт!</h1>
            </div>
        );
    }

    return (
        <div className="container mt-5">

            <div className="row">
                <h1 className='header-main fw-bold'>{product.title}</h1>
                <div className="col-md-8 col-sm-12" style={{ paddingRight: '0px' }}>
                    <div className="funnel-description text-white pr-0">

                        <div className="video-container">
                            <video controls className="video" ref={videoRef}>
                                <source src={product.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <DiffCourse />
                    </div>
                </div>

                <div className={`col-md-4 col-sm-12 ${isMobile ? 'mt-3' : 'mt-0'}`} style={{ paddingLeft: '0px' }}>
                    <StickyBuyNowCard />
                </div>
            </div>
        </div>
    );
}