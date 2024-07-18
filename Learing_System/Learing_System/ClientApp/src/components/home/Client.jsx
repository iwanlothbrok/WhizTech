import React from 'react';

function Client({ client }) {
    return (
        <div className="testimonial-item text-center bg-secondary border p-4" style={{ borderRadius: '10px' }}>
            <img className="border rounded-circle p-2 mx-auto mb-3"
                src={client.img}
                style={{ width: '120px', height: '120px', borderColor: '#71F483' }}
                alt={client.fullName}
            />
            <div className="row d-flex justify-content-center">
                <h4 className="mb-0 ">{client.fullName}</h4>
                <p className="text-light">{client.profession}</p>
                <div className="testimonial-text text-center p-3 text-light bg-dark rounded" style={{ borderColor: '#71F483' }}>
                    <p className="mb-0">{client.feedback}</p>
                </div>
            </div>
        </div>
    );
}

export default Client;
