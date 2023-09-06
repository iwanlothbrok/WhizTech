import React, { useState, useEffect } from 'react';
import ContactInfoSection from './contact/ContactInfoSection'
import { contactSubmitHandle } from '../firebaseConfig'
import '../styles/css/btn.css';

export default function SmallContact() {
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

    const [formData, setFormData] = useState({
        FullName: '',
        Email: '',
        PhoneNumber: '',
        Description: ''
    });


    useEffect(() => {
        if (successMessageVisible) {

            setTimeout(() => {
                setSuccessMessageVisible(false);
            }, 5000);
        }
    }, [successMessageVisible]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitButtonClicked(true);

        // Check if all fields are completed
        if (
            formData.FullName &&
            validateEmail(formData.Email) &&
            formData.PhoneNumber &&
            formData.Description
        ) {
            const result = await contactSubmitHandle(formData);

            if (result.success) {
                // CLEARING THE STATE
                setFormData({
                    FullName: '',
                    Email: '',
                    PhoneNumber: '',
                    Description: ''
                });

                setSuccessMessageVisible(true); // Show the success message
            } else {
                console.log('Form submission failed');
            }
        } else {
            console.log('Please complete all fields before submitting.');
        }

        console.log('After setFormData');
    };

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }
    return (
        <div style={{ backgroundColor: '#232323' }}>
            <div className="container">
                <div className="row container-fluid justify-content-center align-items-center" style={{ backgroundColor: '#232323' }}>
                    {submitButtonClicked && (
                        <div className="alert alert-success" role="alert">
                            Form submitted successfully!
                        </div>
                    )}

                    <div className="col">
                        <form className="mx-md-5">
                            <div className="row">
                                <div className="col-md-5 mb-1 pb-2">
                                    <label htmlFor="input-name" className="form-label">Име</label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-lg ${submitButtonClicked && !formData.FullName ? 'is-invalid' : ''}`}
                                        id="input-name"
                                        placeholder="Име"
                                        value={formData.FullName}
                                        onChange={(e) => setFormData({ ...formData, FullName: e.target.value })}
                                        required
                                    />
                                    {submitButtonClicked && !formData.FullName && (
                                        <div className="invalid-feedback">Полето е задължително!</div>
                                    )}
                                </div>
                                <div className="col-md-7 mb-1 pb-3">
                                    <label htmlFor="input-email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className={`form-control form-control-lg ${submitButtonClicked && !formData.Email ? 'is-invalid' : ''}`}
                                        id="input-email"
                                        placeholder="Email"
                                        value={formData.Email}
                                        onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                                        required
                                    />
                                    {submitButtonClicked && !formData.Email && (
                                        <div className="invalid-feedback">Please choose a username.</div>
                                    )}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 mb-4 pb-2">
                                    <label htmlFor="input-subject" className="form-label">Телефон</label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-lg ${submitButtonClicked && !formData.PhoneNumber ? 'is-invalid' : ''}`}
                                        id="input-subject"
                                        placeholder="Телефон"
                                        value={formData.PhoneNumber}
                                        onChange={(e) => setFormData({ ...formData, PhoneNumber: e.target.value })}
                                        required
                                    />
                                    {submitButtonClicked && !formData.PhoneNumber && (
                                        <div className="invalid-feedback">Полето е задължително!</div>
                                    )}
                                </div>
                            </div>

                            <div className="col-md-12 mb-4 pb-2">
                                <label htmlFor="input-message" className="form-label">Запитване</label>
                                <textarea
                                    className={`form-control form-control-lg ${submitButtonClicked && !formData.Description ? 'is-invalid' : ''}`}
                                    id="input-message"
                                    placeholder="Запитване"
                                    rows="7"
                                    value={formData.Description}
                                    onChange={(e) => setFormData({ ...formData, Description: e.target.value })}
                                    required
                                />
                                {submitButtonClicked && !formData.Description && (
                                    <div className="invalid-feedback">Полето е задължително!</div>
                                )}
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-outline-secondary btn-lg text-white p-4 px-5 mt-2 mb-4 mx-auto"
                                    id="input-submit"
                                    onClick={handleSubmit}
                                    style={{ borderRadius: '20px' }}
                                >
                                    Изпрати
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
