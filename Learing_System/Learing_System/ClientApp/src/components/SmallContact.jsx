import React, { useState, useEffect } from 'react';
import ContactInfoSection from './contact/ContactInfoSection'
import { contactSubmitHandle } from '../firebaseConfig'

export default function SmallContact() {
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);

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

        console.log('Before contactSubmitHandle');
        const result = await contactSubmitHandle(formData);
        console.log('After contactSubmitHandle');

        console.log(result);
        console.log('Before setFormData');

        if (result.success) {
            console.log('Form submitted successfully');

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

        console.log('After setFormData');
    };

    
    return (
        //             <div className="row justify-content-center">
        <div style={{ backgroundColor: '#232323' }}>

            <div className="container">

                <div className="row container-fluid  justify-content-center align-items-center" style={{ backgroundColor: '#232323' }}>

                    {successMessageVisible && (
                        <div className="alert alert-success" role="alert">
                            Form submitted successfully!
                        </div>
                    )}

                    <div class="col">
                        <h3 className="mb-4 mt-md-4 display-4 text-center" style={{ color: '#71F483' }}>Запитване</h3> {/* Use Bootstrap display-4 class for bigger text */}
                        <form className="mx-md-5">

                            <div className="row">
                                <div className="col-md-5 mb-1 pb-2">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="input-name"
                                        placeholder="Име"
                                        value={formData.FullName}
                                        onChange={(e) => setFormData({ ...formData, FullName: e.target.value })}
                                    />
                                </div>
                                <div className="col-md-7 mb-1 pb-3">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        id="input-email"
                                        placeholder="Email"
                                        value={formData.Email}
                                        onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-13 mb-4 pb-2">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="input-subject"
                                        placeholder="Телефон"
                                        value={formData.PhoneNumber}
                                        onChange={(e) => setFormData({ ...formData, PhoneNumber: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="col-md-13 mb-4 pb-2">
                                <textarea
                                    className="form-control form-control-lg"
                                    id="input-message"
                                    placeholder="Запитване"
                                    rows="7"
                                    value={formData.Description}
                                    onChange={(e) => setFormData({ ...formData, Description: e.target.value })}
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-outline-secondary btn-lg text-white p-4 px-5 mt-2 mx-auto"
                                    id="input-submit"
                                    onClick={handleSubmit}
                                    style={{ borderRadius: '20px' }}
                                >
                                    Изпрати
                                </button>
                            </div>

                        </form>
                    </div>

                    <ContactInfoSection />
                </div>
            </div>
        </div>

    );
}