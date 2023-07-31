import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Client from './Client';
const Clients = () => {
    const [clients, setClients] = useState([]);
    const [error, setError] = useState('');

    // const url = 'https://localhost:7089/api/clients/';

    // const fetchedClients = async () => {
    //     try {
    //         const response = await fetch(url);
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch clients.');
    //         }
    //         const data = await response.json();
    //         setClients(data);
    //     } catch (error) {
    //         setError(error.message);
    //     }
    // };

    // useEffect(() => {
    //     fetchedClients();
    // }, []);

    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                    <h1 className="mb-5">Our Students Say!</h1>
                </div>
                <div className="owl-carousel testimonial-carousel position-relative">
                    {error ? (
                        <div className="text-center">Error: {error}</div>
                    ) : (
                        clients.map((c) => (
                            <Client key={c.id} client={c} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Clients;
