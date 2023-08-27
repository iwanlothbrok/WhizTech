import React, { useState, useEffect } from 'react';

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
        <div className="container-fluid  justify-content-center align-items-center" style={{ backgroundColor: '#232323' }}>
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h3 className="mb-5 text-white">Contact us</h3>
            </div>
            {successMessageVisible && (
                <div className="alert alert-success" role="alert">
                    Form submitted successfully!
                </div>
            )}
            <form className="mx-md-5">
                <div className="row">
                    <div className="col-md-3 mb-1 pb-2">
                        <input
                            type="text"
                            className="form-control half-width"
                            id="input-name"
                            placeholder="Name"
                            value={formData.FullName}
                            onChange={(e) => setFormData({ ...formData, FullName: e.target.value })}
                        />
                    </div>
                    <div className="col-md-4 mb-1 pb-3">
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
                    <div className="col-md-7 mb-4 pb-2">
                        <input
                            type="text"
                            className="form-control half-width"
                            id="input-subject"
                            placeholder="Phone"
                            value={formData.PhoneNumber}
                            onChange={(e) => setFormData({ ...formData, PhoneNumber: e.target.value })}
                        />
                    </div>
                    <div className="col-md-7 mb-4 pb-2">
                        <textarea
                            className="form-control half-width"
                            id="input-message"
                            placeholder="Message"
                            rows="5"
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
    );
}