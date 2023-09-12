import React from 'react';

import { FaCheck } from 'react-icons/fa'; // Import the FontAwesome checkmark icon

const LanguageInformation = ({lang}) => {
    console.log(lang);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={lang.image}
                        alt="Your Photo"
                        className="img-fluid m-4"
                        style={lang.photoStyle}
                    />
                </div>
                <div className="col-md-6 text-black mt-5 mr-5">
                    <h2>Частните уроци по {lang.langName} се провеждат според Вашите нужди и изисквания.</h2>
                    <ul className="list-unstyled">
                        {lang.information.map((info, index) => (
                            <li key={index} style={{ fontSize: '20px' }}> {/* Apply the custom class "larger-text" */}
                                <FaCheck className="text-alert mr-5" />
                                {info}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LanguageInformation;
