import React, { useEffect, useState } from 'react';
import '../../styles/css/joinCourse.css';
import backgroundImage from '../../styles/photos/courseBg.jpg';
import { csharpCourseSubmitHandle } from '../../firebaseConfig';

export default function CsharpCourseForm() {
    const [isMobile, setIsMobile] = useState(false);
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        Email: '',
        FullName: '',
        Phone: '',
        PreviousExperience: '',
        Date: '',
        PreviousExperienceCheck: false,
        Questions: '',
        Language: '',
        LeadSource: '',
        ContactMethod: 'email',
        AdditionalComments: ''
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
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const result = await csharpCourseSubmitHandle(formData);
        if (result.success) {
            setFormData({
                FullName: '',
                Email: '',
                Phone: '',
                PreviousExperience: '',
                Date: '',
                PreviousExperienceCheck: false,
                LeadSource: '',
                ContactMethod: 'email',
            });
            setSuccessMessageVisible(true);
            setSubmitButtonClicked(false);
            setErrors({});
        } else {
            console.log('Form submission failed');
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.FullName) {
            errors.FullName = 'Моля, въведете трите си имена.';
        }
        if (!formData.Email) {
            errors.Email = 'Моля, въведете имейл адрес.';
        } else if (!validateEmail(formData.Email)) {
            errors.Email = 'Невалиден имейл адрес.';
        }
        if (!formData.Phone) {
            errors.Phone = 'Моля, въведете телефонен номер.';
        } else if (!validatePhone(formData.Phone)) {
            errors.Phone = 'Невалиден телефонен номер.';
        }

        return errors;
    };

    const handleLanguageChange = (e) => {
        setFormData({
            ...formData,
            Language: e.target.value
        });
    };

    const sectionStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: formData.PreviousExperienceCheck ? '120vh' : '100vh'
    };

    return (
        <section style={sectionStyle}>
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="form-wrapper">
                    {successMessageVisible && Object.keys(errors).length === 0 && (
                        <div className="alert alert-success mb-0" role="alert">
                            Успешно изпратено запитване!
                        </div>
                    )}
                    {Object.keys(errors).length > 0 && submitButtonClicked && (
                        <div className="alert alert-danger mb-0" role="alert">
                            {Object.values(errors).map((error, index) => (
                                <div key={index}>{error}</div>
                            ))}
                        </div>
                    )}
                    <form className='formCourse mt-1' onSubmit={handleSubmit}>
                        <h2 className='joinOurCourse text-center'><strong style={{ color: '#15b115' }}>ЗАПИШИ СЕ</strong></h2>
                        <label className='labelCourse'><strong>ТРИ ИМЕНА:</strong></label>
                        <input
                            id="input-name"
                            className='inputCourse'
                            placeholder="Иван Иванов"
                            value={formData.FullName}
                            onChange={(e) => setFormData({ ...formData, FullName: e.target.value })}
                            required
                        />

                        <label className='labelCourse' htmlFor="email"><strong>ИМЕЙЛ:</strong></label>
                        <input
                            id="email"
                            className='inputCourse'
                            placeholder="example@example.com"
                            value={formData.Email}
                            onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                            required
                        />
                        <label className='labelCourse' htmlFor="phone"><strong>ТЕЛ. НОМЕР:</strong></label>
                        <input
                            id="phone"
                            className='inputCourse'
                            placeholder="+359 88 888 8888"
                            value={formData.Phone}
                            onChange={(e) => setFormData({ ...formData, Phone: e.target.value })}
                            required
                        />



                        <label className='labelCourse'>
                            <strong>ИМАТЕ ЛИ ПРЕДИШЕН ОПИТ?</strong>
                        </label>
                        <div style={{ position: 'relative', height: '2rem', width: '8rem' }}>
                            <input
                                type="checkbox"
                                id="toggle"
                                checked={formData.PreviousExperienceCheck}
                                onChange={(e) => setFormData({ ...formData, PreviousExperienceCheck: e.target.checked })}
                            />
                        </div>

                        {formData.PreviousExperienceCheck && (
                            <>
                                <label className='labelCourse' htmlFor="previousExperience"><strong>КАКЪВ Е ВАШИЯ ОПИТ:</strong></label>
                                <textarea
                                    id="previousExperience"
                                    className='inputCourse'
                                    placeholder="Опишете предишния си опит - с кой език сте се занимавали, до къде сте стигнали"
                                    value={formData.PreviousExperience}
                                    onChange={(e) => setFormData({ ...formData, PreviousExperience: e.target.value })}
                                />
                            </>
                        )}

                        <label className='labelCourse' htmlFor="leadSource"><strong>КАК НАУЧИХТЕ ЗА НАС?</strong></label>
                        <select
                            id="leadSource"
                            className='inputCourse'
                            value={formData.LeadSource}
                            onChange={(e) => setFormData({ ...formData, LeadSource: e.target.value })}
                        >
                            <option value="">Изберете опция</option>
                            <option value="internet">Интернет</option>
                            <option value="friend">Приятел</option>
                            <option value="advertisement">Реклама</option>
                        </select>
                        <button
                            className='navBtn btn'
                            type='submit'
                        >
                            <b>ИЗПРАТИ</b>
                        </button>

                        <div className='iconsDiv p-1 text-center'>
                            <span className="fa fa-phone icon"></span>+359 88 904 4614
                            <br />
                            <span className="fa fa-envelope-o icon"></span> whiztech.team@gmail.com
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

function validatePhone(phone) {
    const regex = /\d/;
    return regex.test(phone);
}
