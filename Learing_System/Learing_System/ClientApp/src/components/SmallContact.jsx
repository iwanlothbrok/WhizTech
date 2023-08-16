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
        <>
            {successMessageVisible && (
                <div className="alert alert-success" role="alert">
                    Form submitted successfully!
                </div>
            )}
            <h1 className="mb-5 text-center">Elegant Contact Form</h1>
            <form className="conDtainer">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="input-name"
                            placeholder="Name"
                            value={formData.FullName}
                            onChange={(e) => setFormData({ ...formData, FullName: e.target.value })}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="input-email"
                            placeholder="Email address"
                            value={formData.Email}
                            onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="input-subject"
                        placeholder="Phone"
                        value={formData.PhoneNumber}
                        onChange={(e) => setFormData({ ...formData, PhoneNumber: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="input-message"
                        placeholder="Message"
                        rows="5"
                        value={formData.Description}
                        onChange={(e) => setFormData({ ...formData, Description: e.target.value })}
                    ></textarea>
                </div>
                <div className="d-flex justify-content-center">
                    <button
                        type="submit"
                        className="btn btn-primary py-3 px-5 mt-2 mx-auto"
                        id="input-submit"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}
