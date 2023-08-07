import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    FullName: '',
    Email: '',
    PhoneNumber: '',
    Description: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://localhost:5001/api/contact/', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();

    setFormData({
      FullName: '',
      Email: '',
      PhoneNumber: '',
      Description: ''
    });
    console.log(result);
  }

  return (
    <section className="h-100 vh-100 gradient-custom-2">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-6 bg-indigo text-white">
          <div className="p-5">
            <h3 className="fw-normal mb-5">Свържете се с нас</h3>

            <div className="mb-4 pb-2">
              <div className="form-outline form-white">
                <label className="form-label" htmlFor="form3Examplea2">Две имена: </label>
                <input
                  type="text" id="name"
                  className="form-control form-control-lg"
                  value={formData.FullName}
                  onChange={(e) => setFormData({ ...formData, FullName: e.target.value })} />
              </div>
            </div>

            <div className="col-md-7 mb-4 pb-2">
              <div className="form-outline form-white">
                <label className="form-label" htmlFor="form3Examplea8">Телефон за връзка:</label>
                <input
                  type="text" id="phone"
                  className="form-control form-control-lg"
                  value={formData.PhoneNumber}
                  onChange={(e) => setFormData({ ...formData, PhoneNumber: e.target.value })} />
              </div>
            </div>
            <div className="mb-4 pb-2">
              <div className="form-outline form-white">
                <label className="form-label" htmlFor="form3Examplea3">Email:</label>
                <input
                  type="text" id="email"
                  className="form-control form-control-lg"
                  value={formData.Email}
                  onChange={(e) => setFormData({ ...formData, Email: e.target.value })} />
              </div>
            </div>
            <div className="mb-4 pb-2">
              <div className="form-outline form-white">
                <label className="form-label" htmlFor="form3Examplea3">Запитване:</label>
                <input
                  type="text" id="description"
                  className="form-control form-control-lg"
                  value={formData.Description}
                  onChange={(e) => setFormData({ ...formData, Description: e.target.value })} />
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