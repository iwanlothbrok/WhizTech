import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    FullName: 'gogo',
    Email: '12312312',
    PhoneNumber: 'gogo@abg.bg',
    Description: 'helloooo!!'
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://localhost:7089/api/contact/',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        console.log('Data saved successfully!');
        setFormData({
          FullName: '',
          Email: '',
          PhoneNumber: '',
          Description: ''
        });
      } else {
        console.error('Failed to save data');
      }
    } catch (error) {
      console.error('Error:', error);
      console.log(formData);
    }
  };

  return (
    <section className="h-100 vh-100 gradient-custom-2">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-6 bg-indigo text-white">
          <div className="p-5">
            <h3 className="fw-normal mb-5">Свържете се с нас</h3>

            <div className="mb-4 pb-2">
              <div className="form-outline form-white">
                <label className="form-label" htmlFor="form3Examplea2">Две имена: </label>
                <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
              </div>
            </div>

            <div className="col-md-7 mb-4 pb-2">
              <div className="form-outline form-white">
                <label className="form-label" htmlFor="form3Examplea8">Телефон за връзка:</label>
                <input type="text" id="form3Examplea8" className="form-control form-control-lg" />
              </div>
            </div>
            <div className="mb-4 pb-2">
              <div className="form-outline form-white">
                <label className="form-label" htmlFor="form3Examplea3">e-mail:</label>
                <input type="text" id="form3Examplea3" className="form-control form-control-lg" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <button
              type="button"
              className="btn btn-light btn-lg btn-block"
              data-mdb-ripple-color="dark"
              onClick={handleSubmit} // Call the handleSubmit function when the button is clicked
            >
              Изпрати
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;