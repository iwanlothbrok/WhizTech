import React from 'react';

const ContactInfoSection = () => {
    return (
        <div class="col-6" style={{ backgroundColor: '#71F483' }}>
            <div className="col-md-5 d-flex align-items-stretch">
                <div className="info-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb-4 mt-md-4 display-4">Контакти</h3> {/* Use Bootstrap display-4 class for bigger text */}

                    {/* phone */}
                    <div class="row">
                        <div class="col-md-12">
                            <div class="d-flex flex-column flex-md-row align-items-center">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="fa fa-phone fa-2x"></span> {/* Use fa-2x class for bigger icon */}
                                </div>
                                <div class="d-flex flex-column flex-md-row align-items-center">
                                    <span className='p-2 p-md-4 h4'>Телефон: </span> {/* Use h4 class for bigger text */}
                                    <a href="tel:+08891013123" class="p-2 p-md-4 h4" style={{ fontSize: '1.5rem' }}>0889044614</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* email */}
                    <div class="row">
                        <div class="col-md-12">
                            <div class="d-flex flex-column flex-md-row align-items-center">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="fa fa-paper-plane fa-2x"></span> {/* Use fa-2x class for bigger icon */}
                                </div>
                                <div class="d-flex flex-column flex-md-row align-items-center">
                                    <span className='p-2 p-md-4 h4'>Email: </span> {/* Use h4 class for bigger text */}
                                    <a href="mailto:info@yoursite.com" class="p-2 p-md-4 h5">whiztech@gmail.com</a> {/* Use h4 class for bigger text */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* site */}
                    <div class="row">
                        <div class="col-md-12">
                            <div class="d-flex flex-column flex-md-row align-items-center">
                                <div class="icon d-flex align-items-center justify-content-center">
                                    <span class="fa fa-globe fa-2x"></span> {/* Use fa-2x class for bigger icon */}
                                </div>
                                <div class="d-flex flex-column flex-md-row align-items-center">
                                    <span className='p-2 p-md-4 h4'>Website: </span> {/* Use h4 class for bigger text */}
                                    <a href="#" class="p-2 p-md-4 h4">WhizTech.bg</a> {/* Use h4 class for bigger text */}
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
