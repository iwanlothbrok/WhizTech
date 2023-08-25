import React from 'react';

const TeamComponent = () => {
    return (
        <div className="container-xxl py-5 ">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h3 className="mb-5 text-white">Expert Instructors</h3>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item bg-light">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="/img/team-1.jpg" alt="" />
                            </div>
                            <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                    <a className="btn btn-sm-square bg-black text-white mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-sm-square bg-black text-white mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-sm-square bg-black text-white mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <h5 className="mb-0">Instructor Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    {/* Add similar code blocks for other team members */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        {/* Team member 2 content */}
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        {/* Team member 3 content */}
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        {/* Team member 4 content */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamComponent;
