// src/components/products/Product.js
import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Product = ({ product }) => {
    const onClickHandle = () => scroll.scrollToTop({ duration: 200 });

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div className="card h-100">
                <img className="card-img-top" src={product.bookCover} alt={product.title} />
                <div className="card-body p-1">
                    <div className="text-center">
                        <h5 className="fw-bolder">{product.title}</h5>
                        {product.price} BGN
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <Link
                            to={`/product/${product.id}`}
                            onClick={onClickHandle}
                        >
                            <button className='btn btn-lg mt-3 mb-5 navBtn'>
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
