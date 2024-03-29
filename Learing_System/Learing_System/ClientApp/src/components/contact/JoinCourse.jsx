import React, { useEffect, useState } from 'react'
import '../../styles/css/joinCourse.css'
import backgroundImage from '../../styles/photos/bg02.jpg'
import { contactSubmitHandle, courseSubmitHandle } from '../../firebaseConfig'
export default function JoinCourse() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        FullName: '',
        Email: '',
        Language: ''
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
            formData.Language
        ) {

            if (!validateEmail(formData.Email)) {
                // Email is invalid, set the error message
                setError('Email is invalid. Please enter a valid email address.');
                return;
            }


            const result = await courseSubmitHandle(formData);
            console.log(result);
            // console.log('before');
            // const result = await courseSubmitHandle();
            console.log('after');
            if (result.success) {
                setFormData({
                    FullName: '',
                    Email: '',
                    Language: ''
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

    const handleLanguageChange = (e) => {
        setFormData({
            ...formData,
            Language: e.target.value // Update Language field in the state with the selected value
        });
    };
    console.log(successMessageVisible);

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    }
    const formCss = {
        width: '440px',
        height: isMobile ? '490px' : '510px'
    }
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`, // Use the imported background image
        backgroundSize: 'cover', // Adjust this according to your preference
        backgroundPosition: 'center', // Adjust this according to your preference
        width: '100vw',  // Make the section cover the full viewport width
        height: '100vh'
    };
    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (

        <section style={sectionStyle}>
            {successMessageVisible && error == ''
                (
                    <div className="alert alert-success" role="alert">
                        Успешно изпратено запитване!
                    </div>
                )
                // :
                // (
                //     <div className="alert alert-danger" role="alert">
                //         {error}
                //     </div>
                // )
            }

            <div className="container d-flex justify-content-center align-items-center h-100">

                <div >
                    {error != ' ' && submitButtonClicked == true &&
                        (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        )
                    }   
                    <form className='formCourse' style={formCss}>
                        <h2 className='joinOurCourse'><strong className='gray'><span className='green'>ЗАПИШИ</span> СЕ</strong></h2>
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
                            onChange={(e) => setFormData({ ...formData, FullName: e.target.value })}
                            required

                        />

                        <label className='labelCourse' htmlFor="language"><strong>ПРОГРАМЕН ЕЗИК:</strong></label>
                        <select
                            id="language"
                            className='inputCourse'
                            value={formData.Language} // Bind the value of the select to the Language field in state
                            onChange={handleLanguageChange} // Call
                        >
                            <option value="">Изберете Език</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="C#">C#</option>
                        </select>

                        <button
                            className='joinBtn btn-lg'
                            onClick={handleSubmit}
                            type='submit'
                        >ИЗПРАТИ</button>
                        <div className='iconsDiv m-2 p-1 text-center '>
                            <span class="fa fa-phone icon"></span>088 904 4614
                            <br></br>
                            <span class="fa fa-envelope-o icon"></span> contact@company.com
                        </div>
                    </form>
                </div>
            </div>

        </section>
    )
}
