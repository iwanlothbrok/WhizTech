import React from 'react';

function Client({ client }) {

    return (

        <div className="testimonial-item text-center bg-secondary border p-3">
            <img className="border rounded-circle p-1 mx-auto mb-3"
                src={client.img}
                style={{ width: '120px', height: '120px' }}
                alt={client.fullName}
            />
            <div className='row d-flex justify-content-center'>
                <h5 className="mb-0 text-white ">{client.fullName}</h5>
                <p className='text-white'>{client.profession}</p>
                <div className="testimonial-text text-center p-2 text-white ">
                    <p className="mb-0 ">{client.feedback}</p>
                </div>
            </div>
        </div>
    );
}

export default Client;