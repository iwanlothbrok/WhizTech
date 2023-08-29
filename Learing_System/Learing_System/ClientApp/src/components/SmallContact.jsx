import React, { useState, useEffect } from 'react';
import ContactInfoSection from './contact/ContactInfoSection'
export default function SmallContact() {

    const [formData, setFormData] = useState({
        FullName: '',
        Email: '',
        PhoneNumber: '',
        Description: ''
    });
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);

    useEffect(() => {
        if (successMessageVisible) {

            setTimeout(() => {
                setSuccessMessageVisible(false);
            }, 5000);
        }
    }, [successMessageVisible]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        const response = await fetch('https://localhost:7089/api/contact/', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

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
    }
    return (
        //             <div className="row justify-content-center">
        <div style={{ backgroundColor: '#232323' }}>

            <div className="container">

                <div className="row container-fluid  justify-content-center align-items-center" style={{ backgroundColor: '#232323' }}>
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h3 className="mb-5 text-white">Contact us</h3>
                    </div>
                    {successMessageVisible && (
                        <div className="alert alert-success" role="alert">
                            Form submitted successfully!
                        </div>
                    )}

                    <div class="col">
                        <form className="mx-md-5">
                            <div className="row">
                                <div className="col-md-5 mb-1 pb-2">
                                    <input
                                        type="text"
                                        className="form-control half-width"
                                        id="input-name"
                                        placeholder="Name"
                                        value={formData.FullName}
                                        onChange={(e) => setFormData({ ...formData, FullName: e.target.value })}
                                    />
                                </div>
                                <div className="col-md-7 mb-1 pb-3">
                                    <input
                                        type="email"
                                        className="form-control half-width"
                                        id="input-email"
                                        placeholder="Email address"
                                        value={formData.Email}
                                        onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-13 mb-4 pb-2">
                                    <input
                                        type="text"
                                        className="form-control "
                                        id="input-subject"
                                        placeholder="Phone"
                                        value={formData.PhoneNumber}
                                        onChange={(e) => setFormData({ ...formData, PhoneNumber: e.target.value })}
                                    />
                                </div>
                                <div className="col-md-13 mb-4 pb-2">
                                    <textarea
                                        className="form-control half-width"
                                        id="input-message"
                                        placeholder="Message"
                                        rows="7"
                                        value={formData.Description}
                                        onChange={(e) => setFormData({ ...formData, Description: e.target.value })}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-outline-secondary text-white p-4 px-5 mt-2 mx-auto"
                                    id="input-submit"
                                    onClick={handleSubmit}
                                    style={{ borderRadius: '20px' }}
                                >
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>

                    {/* information */}
                    <div class="col-6" style={{ backgroundColor: '#71F483' }}>
                        {/* <div className="col-md-5 d-flex align-items-stretch"> */}
                        <div className="info-wrap w-100 p-lg-5 p-4">
                            <h3 className="mb-4 mt-md-4">Contact us</h3>
                            <div className="dbox w-100 d-flex align-items-start">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-map-marker"></span>
                                </div>
                                <div className="text pl-3">
                                    <p>
                                        <span>Address:</span> 198 West 21th Street, Suite 721 New York NY
                                        10016
                                    </p>
                                </div>
                            </div>
                            <div className="dbox w-100 d-flex align-items-start">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-map-marker"></span>
                                </div>
                                <div className="text pl-3">
                                    <p>
                                        <span>Phone:</span> 198 West 21th Street, Suite 721 New York NY
                                        10016
                                    </p>
                                </div>
                            </div> <div className="dbox w-100 d-flex align-items-start">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-map-marker"></span>
                                </div>
                                <div className="text pl-3">
                                    <p>
                                        <span>Email:</span> 198 West 21th Street, Suite 721 New York NY
                                        10016
                                    </p>
                                </div>
                            </div>

                            {/* </div> */}
                        </div>
                    </div>

                </div>
            </div >
        </div>

    );
}