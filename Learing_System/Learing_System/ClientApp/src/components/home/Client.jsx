import React from 'react';

const Client = ({ client }) => {
  return (
    <div className="owl-item" style={{ width: '336px', marginRight: '24px' }}>
      <div className="testimonial-item text-center">
        <img
          className="border rounded-circle p-2 mx-auto mb-3 img-responsive"
          src={client.imageUrl ? client.imageUrl : 'https://cdn.w600.comps.canstockphoto.com/young-woman-holding-pink-balloons-and-stock-image_csp20297467.jpg'}
          alt={`Photo of ${client.firstName} ${client.lastName}`}
        />
        <h5 className="mb-0">
          {client.firstName} {client.lastName}
        </h5>
        <p>{client.information ? client.information : 'Student'}</p>
        <div className="testimonial-text bg-light text-center p-4">
          <p className="mb-0">{client.firstName}</p>
        </div>
      </div>
    </div>
  );
};

export default Client;
