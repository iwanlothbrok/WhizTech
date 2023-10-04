import React from 'react';

function Client({ client }) {

    return (

        <div className="testimonial-item text-center bg-white border p-3">
            <img className="border rounded-circle p-1 mx-auto mb-3"
                src={client.img}
                style={{ width: '80px', height: '80px' }}
                alt={client.fullName}
            />
            <div className='row d-flex justify-content-center'>
                <h5 className="mb-0 text-black ">{client.fullName}</h5>
                <p className='text-black'>{client.profession}</p>
                <div className="testimonial-text bg-white text-center p-4 text-black ">
                    <p className="mb-0">{client.feedback}</p>
                </div>
            </div>
        </div>
    );
}

export default Client;