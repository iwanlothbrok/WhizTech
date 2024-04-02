import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundImage from '../styles//photos/bg01.jpg'; // Adjust the path based on your file structure

const Contact = () => {
    // state of the form 
    const [formData, setFormData] = useState({
        FullName: '',
        Email: '',
        PhoneNumber: '',
        Description: ''
    });

    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);


    // // style
    const sectionStyle = {
        // background-image: linear-gradient(to right, rgba(109, 179, 242, .6), rgba(109, 179, 242, .6)), url('images/checked.png');

        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`, // Add black overlay with 60% opacity
        backgroundSize: 'cover', // Adjust this according to your preference
        backgroundPosition: 'center', // Adjust this according to your preference
        width: '100vw',  // Make the section cover the full viewport width
        height: '100vh'
    };
    const formStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity and color as needed
        padding: '20px', // Add padding to the form to separate it from the background
        borderRadius: '10px', // Add rounded corners for a better look
    };


    useEffect(() => {
        if (successMessageVisible) {

            setTimeout(() => {
                setSuccessMessageVisible(false);
            }, 5000);
        }
    }, [successMessageVisible]);


    // func for click event 
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        setSubmitButtonClicked(true);

        // fetch to the api 
        const response = await fetch('https://localhost:7089/api/contact/', {
            method: 'POST',
            // !!!!!!!!! FOR EVERY POST,PUT
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // FOR SUCC MESSAGE
        if (response.ok) {
            console.log('Form submitted successfully');
            setSuccessMessageVisible(true); // Show the success message
        } else {
            console.log('Form submission failed');
        }

        // CLEARING THE STATE
        setFormData({
            FullName: '',
            Email: '',
            PhoneNumber: '',
            Description: ''
        });

        // IF YOU WANT TO RELOAD THE PAGE
        //window.location.reload();
    }


    return (

        <section className="h-100 vh-100 mt-0 mb-0 gradient-custom-2" style={sectionStyle}>
            {successMessageVisible && (
                <div className="alert alert-success" role="alert">
                    Form submitted successfully!
                </div>
            )}

            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-6 bg-indigo text-white border-10px-inclined" style={formStyle}>
                    <div className="p-5">
                        <h3 className="fw-normal mb-5">Свържете се с нас</h3>

                        <div className="mb-4 pb-2">
                            <div className="form-outline form-white">
                                <label>Две имена</label>
                                <input
                                    placeholder='Две имена'
                                    type="text" id="name"
                                    className={`form-control form-control-lg ${submitButtonClicked && formData.FullName ? 'is-valid' : (submitButtonClicked ? 'is-invalid' : '')}`}
                                    value={formData.FullName}
                                    onChange={(e) => setFormData({ ...formData, FullName: e.target.value })}
                                    required
                                />
                                <div style={{ fontSize: '1.5rem' }} className={submitButtonClicked && formData.FullName ? 'valid-feedback' : (submitButtonClicked ? 'invalid-feedback' : '')}>
                                    {submitButtonClicked && formData.FullName ? 'Валиден вход!' : (submitButtonClicked ? 'Полето е задължително!' : '')}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7 mb-4 pb-2">
                            <div className="form-outline form-white">
                                <input
                                    type="text" id="phone"
                                    placeholder='Телефонен номер'
                                    className={`form-control form-control-lg ${submitButtonClicked && formData.PhoneNumber ? 'is-valid' : (submitButtonClicked ? 'is-invalid' : '')}`}
                                    value={formData.PhoneNumber}
                                    onChange={(e) => setFormData({ ...formData, PhoneNumber: e.target.value })}
                                    required />
                                <div style={{ fontSize: '1.5rem' }} className={submitButtonClicked && formData.PhoneNumber ? 'valid-feedback' : (submitButtonClicked ? 'invalid-feedback' : '')}>
                                    {submitButtonClicked && formData.PhoneNumber ? 'Looks good!' : (submitButtonClicked ? 'Please choose a username.' : '')}
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 pb-2">
                            <div className="form-outline form-white">
                                <input
                                    placeholder='Email'
                                    type="email" id="email"
                                    className={`form-control form-control-lg ${submitButtonClicked && formData.Email ? 'is-valid' : (submitButtonClicked ? 'is-invalid' : '')}`}
                                    value={formData.Email}
                                    onChange={(e) => setFormData({ ...formData, Email: e.target.value })} required />
                                <div style={{ fontSize: '1.5rem' }} className={submitButtonClicked && formData.Email ? 'valid-feedback' : (submitButtonClicked ? 'invalid-feedback' : '')}>
                                    {submitButtonClicked && formData.Email ? 'Looks good!' : (submitButtonClicked ? 'Please choose a username.' : '')}
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 pb-2">
                            <div className="form-outline form-white">
                                <textarea
                                    placeholder='Запитване'
                                    type="text" id="description"
                                    className={`form-control form-control-lg ${submitButtonClicked && formData.Description ? 'is-valid' : (submitButtonClicked ? 'is-invalid' : '')}`}
                                    value={formData.Description}
                                    rows={4}
                                    onChange={(e) => setFormData({ ...formData, Description: e.target.value })} required />
                                <div style={{ fontSize: '1.5rem' }} className={submitButtonClicked && formData.Description ? 'valid-feedback' : (submitButtonClicked ? 'invalid-feedback' : '')}>
                                    {submitButtonClicked && formData.Description ? 'Looks good!' : (submitButtonClicked ? 'Please choose a username.' : '')}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mb-4">
                        <button
                            type="button"
                            className="btn btn-light btn-lg btn-block"
                            data-mdb-ripple-color="dark"
                            onClick={handleSubmit}

                        >
                            Изпрати
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;