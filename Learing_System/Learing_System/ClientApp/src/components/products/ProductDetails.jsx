
// src/components/products/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/css/productDetails.css';
import products from './data/products'; // Adjust the path if necessary
import CourseDesciption from './CourseDesciption';

export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [isMobile, setIsMobile] = useState(false);

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
                <h1 className='text-- p-5 m-5'>Product Not Found!</h1>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="video-container">
                        <video controls className="video">
                            <source src={product.videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <CourseDesciption />
                </div>
            </div>
        </div>
    );
}