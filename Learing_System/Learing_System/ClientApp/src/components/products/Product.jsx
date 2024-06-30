// src/components/products/Product.js
import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import '../../styles/css/product.css';

const Product = ({ product }) => {
    const onClickHandle = () => scroll.scrollToTop({ duration: 200 });

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div className="card h-100">
                <div className="card-img-top-container" style={{ position: 'relative', width: '100%', paddingBottom: '76.25%' }}>
                    <img
                        className="card-img-top"
                        src={product.cover}
                        alt={product.title}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                <div className="card-body p-1">
                    <div className="text-center">
                        <h5 className="fw-bolder mt-1">
                            <Link to={`/product/${product.id}`} className="product-title" onClick={onClickHandle}>
                                {product.title}
                            </Link>
                        </h5>
                        <p className="product-description">
                            {product.description.length > 120 ? `${product.description.substring(0, 120)}...` : product.description}
                        </p>
                        <p><span className='compare-price' style={{ fontSize: '20px', color: 'red' }}> 597 лв.</span> <span style={{ fontSize: '28px' }} className="current-price">{product.price}</span></p>
                    </div>
                </div>
                <div className="card-footer mb-0 p-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <Link
                            to={`/product/${product.id}`}
                            onClick={onClickHandle}>
                            <button className='btn btn-lg mt-3 mb-5 learnBtn'>
                                НАУЧИ ПОВЕЧЕ
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
