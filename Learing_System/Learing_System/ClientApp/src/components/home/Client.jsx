import React from 'react';

function Client({ client }) {
    console.log('clienta');
    console.log(client);
    return (
        <div className="testimonial-item text-center bg-white">
            <img className="border rounded-circle p-2 mx-auto mb-3" src={client.img} style={{ width: '80px', height: '80px' }} alt="Client 1" />
            <h5 className="mb-0 text-black ">{client.fullName}</h5>
            <p className='text-black'>{client.profession}</p>
            <div className="testimonial-text bg-white text-center p-4 text-black ">
                <p className="mb-0">{client.feedback}</p>
            </div>
        </div>
    );
}

export default Client;