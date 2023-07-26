import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (you can send the data to the server or perform any other actions)
    setStatus('Thank you! Your message has been sent.');
    // Clear the form fields after submission (optional)
    e.target.reset();
  };

  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo"
                    className="img-fluid"
                    style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">Student registration form</h3>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1m" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Example1m">Вашите три имена:</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1m1" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Example1m1">Три имена на родител:</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1m1" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Example1m1">Телефон за връзка:</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example8">Адрес:</label>
                      <input type="text" id="form3Example8" className="form-control form-control-lg" />
                    </div>

                    <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                      <h6 className="mb-0 me-4">Студент ли сте: </h6>

                      <div className="form-check form-check-inline mb-0 me-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          value="option1"
                        />
                        <label className="form-check-label" htmlFor="femaleGender">Да</label>
                      </div>

                      <div className="form-check form-check-inline mb-0 me-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="maleGender"
                          value="option2"
                        />
                        <label className="form-check-label" htmlFor="maleGender">Не</label>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example90">Град:</label>
                        <input type="text" id="form3Example90" className="form-control form-control-lg" />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example90">Пощенски код:</label>
                        <input type="text" id="form3Example90" className="form-control form-control-lg" />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example99">Курс:</label>
                        <input type="text" id="form3Example99" className="form-control form-control-lg" />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example97">Имейл:</label>
                        <input type="text" id="form3Example97" className="form-control form-control-lg" />
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light btn-lg">Reset all</button>
                        <button type="button" className="btn btn-warning btn-lg ms-2">Submit form</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
