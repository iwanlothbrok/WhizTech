import React from 'react';
import img from '../../styles/teacher01.png'
const TeamComponent = () => {
    return (
        <div className="container-xxl py-5 ">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item bg-light">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src={img} alt="" />
                            </div>
                            <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                    <a className="btn btn-sm-square bg-black text-white mx-1" href="https://github.com/iwanlothbrok"><i className="fab fa-github"></i></a>
                                    <a className="btn btn-sm-square bg-black text-white mx-1" href="https://www.linkedin.com/in/ivan-ivanov-b8b1b6260/"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <h5 className="mb-0">Иван Иванов</h5>
                                <small>Full-Stack Developer</small>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TeamComponent;
