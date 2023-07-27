import React, { useState } from 'react';
import { Client } from './Client';

const Clients = () => {
    const [clients, setClients] = useState([]);
    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                    <h1 className="mb-5">Our Students Say!</h1>
                </div>
                <div className="owl-carousel testimonial-carousel position-relative">
                    {clients.map((client) => { <Client key={client.Id} client={client} ></Client> })}
                </div>
            </div>
        </div >
    );
};

export default Clients;
