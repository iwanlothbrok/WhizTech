import React from 'react';

const ContactInfoSection = () => {
    return (
        <div className='col-lg-6 col-md-12 text-black' style={{ marginLeft: '40px' }}>
            <div className='row'>
                <div className='col-md-5 d-flex align-items-center justify-content-center'>
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
                                        <a href='tel:+359889044614' className='p-2 p-md-4 h3' style={{ fontSize: '2rem', whiteSpace: 'nowrap' }}>+359 88 904 4614</a>
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
                                        <a href='mailto:whiztech.team@gmail.com' className='p-2 p-md-4 h5' style={{ fontSize: '1.7rem', marginRight: '26px' }}>whiztech.team@gmail.com</a>
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
                                        <a href='#' className='p-2 p-md-4 h2'>whiztechlessons.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfoSection;
