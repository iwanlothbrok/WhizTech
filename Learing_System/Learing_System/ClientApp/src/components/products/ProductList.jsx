// src/components/products/ProductList.js
import React, { useEffect } from 'react';
import Product from './Product';
import Header from '../about/Header';
import fadeInAnimation from '../../animation/fadeInAnimation';
import products from './data/products';  // Adjust the path if necessary

export default function ListProducts() {
    useEffect(() => {
        const elementsToAnimate = document.querySelectorAll('.hidden');
        fadeInAnimation(elementsToAnimate);
    }, []);

    return (
        <>
            <Header pageInformation="Обучения" />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-2">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
                        {products.map(product => (
                            <Product
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
