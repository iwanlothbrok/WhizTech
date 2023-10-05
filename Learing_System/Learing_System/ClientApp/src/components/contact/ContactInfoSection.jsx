import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const ContactInfoSection = () => {

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        function handleWindowSizeChange() {
            const isMobile = window.innerWidth <= 768;
            setIsMobile(isMobile);
        }

        handleWindowSizeChange();

    }, []);

    let emailStyle = {
        fontSize: isMobile ? '1.6rem' : '2rem',
        marginRight: '30px',
    }


    let phoneStyle = {
        fontSize: isMobile ? '1.8' : '2rem',
        whiteSpace: 'nowrap',
        marginRight: '24px'
    }
    return (
        <div className='col-lg-6 col-md-12 text-black' style={{ marginLeft: '40px' }}>
            <div className='row'>
                <div className='col-md-6 d-flex align-items-center justify-content-center'>
                    <div className='info-wrap w-100 p-lg-5 p-4'>
                        {/* phone */}
                        <div className='row m-4'>
                            <div className='col-md-12'>
                                <div className='d-flex flex-column flex-md-row align-items-center'>
                                    <div className='icon d-flex align-items-center justify-content-center'>
                                        <span className='fa fa-phone fa-2x'></span>
                                    </div>
                                    <div className='d-flex flex-column flex-md-row align-items-center'>
                                        <span className='p-2 p-md-4 h1'>Телефон: </span>
                                        <a href='tel:+359889044614' className='p-2 p-md-4 h3' style={phoneStyle}>+359 88 904 4614</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* email */}
                        <div className='row m-4'>
                            <div className='col-md-12'>
                                <div className='d-flex flex-column flex-md-row align-items-center'>
                                    <div className='icon d-flex align-items-center justify-content-center'>
                                        <span className='fa fa-paper-plane fa-2x'></span>
                                    </div>
                                    <div className='d-flex flex-column flex-md-row align-items-center'>
                                        <span className='p-2 p-md-4 h1'>Email: </span>
                                        <a href='mailto:whiztech.team@gmail.com' className='p-2 p-md-4 h5' style={emailStyle}>whiztech.team@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* site */}
                        <div className='row m-4'>
                            <div className='col-md-12'>
                                <div className='d-flex flex-column flex-md-row align-items-center'>
                                    <div className='icon d-flex align-items-center justify-content-center'>
                                        <span className='fa fa-globe fa-2x'></span>
                                    </div>
                                    <div className='d-flex flex-column flex-md-row align-items-center'>
                                        <span className='p-2 p-md-4 h1'>Website: </span>
                                        <Link className='p-2 p-md-4 h2' style={emailStyle} to='/' >whiztechlessons.com</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* instagram */}

                        <div className='row m-4'>
                            <div className='col-md-12'>
                                <div className='d-flex flex-column flex-md-row align-items-center'>
                                    <div className='icon d-flex align-items-center justify-content-center'>
                                        <span className='fab fa-instagram' style={{ fontWeight: '900', fontSize: '2.4em' }}></span>
                                    </div>
                                    <div className='d-flex flex-column flex-md-row align-items-center'>
                                        <span className='p-2 p-md-4 h1'>Instagram: </span>
                                        <a href='https://www.instagram.com/whiztechlessons/?hl=en' style={phoneStyle} className='p-2 p-md-4 h5'>whiztechlessons</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactInfoSection;
