import React, { useEffect } from 'react';
import img from '../../styles/photos/imgProfile.jpg'
import fadeInAnimation from '../../animation/fadeInAnimation';
const TeamComponent = () => {
    useEffect(() => {
        // Define the elements you want to animate
        const elementsToAnimate = document.querySelectorAll('.hidden');

        // Call the fadeInAnimation function with the elements
        fadeInAnimation(elementsToAnimate);
    }, []);

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-4">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h2 className="mb-5 text-white">Лектори</h2>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item bg-light icon hidden">
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
                                <small>Fullstack Developer</small>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TeamComponent;
