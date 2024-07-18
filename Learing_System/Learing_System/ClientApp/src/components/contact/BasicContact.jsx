import React, { useEffect, useState } from 'react';
import '../../styles/css/joinCourse.css';
import { contactSubmitHandle } from '../../firebaseConfig';

export default function BasicContact() {
    const [isMobile, setIsMobile] = useState(false);
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        FullName: '',
        Email: '',
        Phone: ''
    });

    useEffect(() => {
        function handleWindowSizeChange() {
            const isMobile = window.innerWidth <= 768;
            setIsMobile(isMobile);
        }

        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);
        return () => window.removeEventListener('resize', handleWindowSizeChange);
    }, []);

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
        if (formData.FullName && formData.Email && formData.Phone) {
            if (!validateEmail(formData.Email)) {
                setError('Невалиден имейл!');
                return;
            }
            if (!validatePhone(formData.Phone)) {
                setError('Невалиден номер!');
                return;
            }
            const result = await contactSubmitHandle(formData);
            if (result.success) {
                setFormData({
                    FullName: '',
                    Email: '',
                    Phone: ''
                });
                setSuccessMessageVisible(true);
                setSubmitButtonClicked(false);
                setError('');
            } else {
                setError('Form submission failed');
            }
        } else {
            setError('Невалидни данни!');
        }
    };

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }

    function validatePhone(phone) {
        const regex = /\d/;
        return regex.test(phone);
    }

    const formCss = {
        width: '540px',
        height: isMobile ? '380px' : '405px'
    };

    return (
        <section style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2 className="mb-4 mt-4 text-center text-white">ПОЛУЧИ БЕЗПЛАТНА КОНСУЛТАЦИЯ</h2>
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div>
                    {successMessageVisible && error === '' && (
                        <div className="alert alert-success mb-3" role="alert">
                            Успешно изпратено запитване!
                        </div>
                    )}
                    {error !== '' && submitButtonClicked && (
                        <div className="alert alert-danger mb-3" role="alert">
                            {error}
                        </div>
                    )}
                    <form className="formCourse mt-1 p-4 bg-dark rounded" style={formCss} onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label text-white" htmlFor="input-name"><strong>ТРИ ИМЕНА:</strong></label>
                            <input
                                id="input-name"
                                className="form-control inputCourse"
                                placeholder="Иван Иванов"
                                style={{ color: 'white', background: 'black' }} // Ensure text color is always visible
                                value={formData.FullName}
                                onChange={(e) => setFormData({ ...formData, FullName: e.target.value })}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white" htmlFor="email"><strong>ИМЕЙЛ:</strong></label>
                            <input
                                id="email"
                                className="form-control inputCourse"
                                placeholder="example@example.com"
                                style={{ color: 'white', background: 'black' }} // Ensure text color is always visible
                                value={formData.Email}
                                onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-white" htmlFor="phone"><strong>ТЕЛ. НОМЕР:</strong></label>
                            <input
                                id="phone"
                                className="form-control inputCourse"
                                placeholder="+359 88 888 8888"
                                style={{ color: 'white', background: 'black' }} // Ensure text color is always visible
                                value={formData.Phone}
                                onChange={(e) => setFormData({ ...formData, Phone: e.target.value })}
                                required
                            />
                        </div>
                        <button
                            className="btn btn-success btn-lg w-100"
                            type="submit"
                        >
                            ИЗПРАТИ
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
