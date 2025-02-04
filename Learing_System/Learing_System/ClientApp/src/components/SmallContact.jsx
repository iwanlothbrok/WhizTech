import React, { useState, useEffect } from 'react';
import { contactSubmitHandle, courseSubmitHandle } from '../firebaseConfig'
import '../styles/css/btn.css';

export default function SmallContact() {
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const [error, setError] = useState('')
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
            formData.PhoneNumber &&
            formData.Description
        ) {

            if (!validateEmail(formData.Email)) {
                // Email is invalid, set the error message
                setError('Email is invalid. Please enter a valid email address.');
                return;
            }


            const result = await contactSubmitHandle(formData);
            console.log(result);
            // console.log('before');
            // const result = await courseSubmitHandle();
            console.log('after');
            if (result.success) {
                setFormData({
                    FullName: '',
                    Email: '',
                    PhoneNumber: '',
                    Description: ''
                });

                setSuccessMessageVisible(true);
                setSubmitButtonClicked(false);
            } else {
                console.log('Form submission failed');
            }
        }

        console.log('After setFormData');
    };

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }
    return (
        <div className='text-white' >
            <h2 className='mb-5 mt-4 md-4 display-4 text-center text-white' >Контакти</h2>

            <div className="container ">
                <div className="row container-fluid justify-content-center align-items-center" >
                    {successMessageVisible && (
                        <div className="alert alert-success" role="alert">
                            Успешно изпратено запитване!
                        </div>
                    )}

                    <div className="col text-white">
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
                                        <div className="alert alert-danger">Полето е задължително!</div>
                                    )}
                                </div>
                                <div className="col-md-7 mb-1 pb-3">
                                    <label htmlFor="input-email" className="form-label">Имейл</label>
                                    <input
                                        type="email"
                                        className={`form-control form-control-lg ${submitButtonClicked && !formData.Email ? 'is-invalid' : ''}`}
                                        id="input-email"
                                        placeholder="Имейл"
                                        value={formData.Email}
                                        onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                                        required
                                    />
                                    {submitButtonClicked && !formData.Email && (
                                        <div className="alert alert-danger">Полето е задължително!</div>
                                    )}
                                    {error && (
                                        <div className="alert alert-danger">{error}</div>
                                    )}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 mb-4 pb-2">
                                    <label htmlFor="input-subject" className="form-label"> </label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-lg ${submitButtonClicked && !formData.PhoneNumber ? 'is-invalid' : ''}`}
                                        id="input-subject"
                                        placeholder="Телефонен номер"
                                        value={formData.PhoneNumber}
                                        onChange={(e) => setFormData({ ...formData, PhoneNumber: e.target.value })}
                                        required
                                    />
                                    {submitButtonClicked && !formData.PhoneNumber && (
                                        <div className="alert alert-danger">Полето е задължително!</div>
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
                                    <div className="alert alert-danger">Полето е задължително!</div>
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
