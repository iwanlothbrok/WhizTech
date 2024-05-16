import React, { useEffect, useState } from 'react'
import '../../styles/css/joinCourse.css'
import backgroundImage from '../../styles/photos/bg02.jpg'
import { courseSubmitHandle, contactSubmitHandle } from '../../firebaseConfig'
export default function BasicContact() {
    const [isMobile, setIsMobile] = useState(false);
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const [error, setError] = useState('')
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
        // Check if all fields are completed
        if (
            formData.FullName &&
            formData.Email &&
            formData.Phone
        ) {

            if (!validateEmail(formData.Email)) {
                // Email is invalid, set the error message
                setError('Невалиден имейл!');
                return;
            }
            if (!validatePhone(formData.Phone)) {
                // Email is invalid, set the error message
                setError('Невалиден номер!');
                return;
            }



            console.log('before');

            const result = await contactSubmitHandle(formData);

            console.log('after');
            if (result.success) {
                setFormData({
                    FullName: '',
                    Email: '',
                    Phone: ''
                });

                setSuccessMessageVisible(true);
                setSubmitButtonClicked(false);
            } else {
                console.log('Form submission failed');
            }
        }
        else {
            setError('Невалидни данни!')
        }
        console.log('After setFormData');
    };


    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }

    function validatePhone(phone) {
        var regex = /\d/;

        // Test the input string against the regular expression
        return regex.test(phone)
    }
    const formCss = {
        width: '540px',
        height: isMobile ? '380px' : '405px'
    }


    return (

        <section >

            <h2 className='mb-2 mt-4 md-4 text-center text-white' >Запиши се</h2>
            <div className="container d-flex justify-content-center align-items-center h-100">

                <div >
                    {successMessageVisible && error == '' && (
                        <div className="alert alert-success mb-0" role="alert">
                            Успешно изпратено запитване!
                        </div>
                    )}
                    {error !== '' && submitButtonClicked && (
                        <div className="alert alert-danger mb-0" role="alert">
                            {error}
                        </div>
                    )}
                    <form className='formCourse mt-1' style={formCss}>
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
                            className={`inputCourse`}
                            placeholder="example@example.com"
                            value={formData.Email}
                            onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                            required

                        />
                        <label className='labelCourse' htmlFor="phone"><strong>ТЕЛ. НОМЕР:</strong></label>
                        <input
                            id="phone"
                            className={`inputCourse`}
                            placeholder="+359 88 888 8888"
                            value={formData.Phone}
                            onChange={(e) => setFormData({ ...formData, Phone: e.target.value })}
                            required

                        />
                        <button
                            className='joinBtn btn-lg '
                            onClick={handleSubmit}
                            type='submit'
                        >ИЗПРАТИ</button>

                    </form>
                </div>
            </div>

        </section>
    )
}
