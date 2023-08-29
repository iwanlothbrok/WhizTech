import React from 'react';

const ContactInfoSection = () => {
    return (
        <div className="col-md-5 d-flex align-items-stretch">
            <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                <h3 className="mb-4 mt-md-4">Contact us</h3>
                <div className="dbox w-100 d-flex align-items-start">
                    <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                    </div>
                    <div className="text pl-3">
                        <p>
                            <span>Address:</span> 198 West 21th Street, Suite 721 New York NY
                            10016
                        </p>

                    </div>
                    <span className="fa fa-map-marker"></span>
                </div>
                <div className="text pl-3">
                    <p>
                        <span>Address:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cum adipisci, tempore accusantium reiciendis dolorem culpa eaque laboriosam delectus corporis amet enim commodi, non, obcaecati optio illum laborum sint. Nesciunt, nemo.
                    </p>

                </div>

            </div>
        </div >
    );
};

export default ContactInfoSection;
