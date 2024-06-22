// src/components/products/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/css/productDetails.css';
import products from './data/products'; // Adjust the path if necessary

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
                <div className="col-md-6 col-sm-10">
                    <img src={product.bookCover} alt="book-cover" className="img-fluid rounded h-100 w-100" />
                </div>
                <div className={`col-md-6 col-sm-12 mt-${isMobile ? 4 : 0}`}>
                    <div className="project-info-box mt-0">
                        <h5>BOOK DETAILS</h5>
                        <p>{product.description}</p>
                    </div>
                    <div className="project-info-box">
                        <p><b>Categories:</b> {product.categories.join(', ')}</p>
                        <p><b>Skills:</b> {product.skills.join(', ')}</p>
                    </div>
                    <div className="project-info-box">
                        <p><b>Date:</b> 14.02.2020</p>
                        <p><b>Author:</b> Jane Doe</p>
                        <p><b>Price:</b> ${product.price.toFixed(2)}</p>
                    </div>
                    <div className="project-info-box mt-0">
                        <p className="mb-0">
                            Share:
                            <a href="#facebook" className="btn btn-xs btn-facebook btn-circle btn-icon ml-2"><i className="fab fa-facebook-f"></i></a>
                            <a href="#twitter" className="btn btn-xs btn-twitter btn-circle btn-icon ml-2"><i className="fab fa-twitter"></i></a>
                            <a href="#pinterest" className="btn btn-xs btn-pinterest btn-circle btn-icon ml-2"><i className="fab fa-pinterest"></i></a>
                            <a href="#linkedin" className="btn btn-xs btn-linkedin btn-circle btn-icon ml-2"><i className="fab fa-linkedin-in"></i></a>
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        {/* // Existing code for product details
                    onClick={handleBuyNow} */}
                        <button
                            style={{
                                padding: '30px 50px',  // Removed the semicolon here
                                fontSize: '16px',       // Use camelCase for multi-word CSS properties
                                cursor: 'pointer'
                            }}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}
