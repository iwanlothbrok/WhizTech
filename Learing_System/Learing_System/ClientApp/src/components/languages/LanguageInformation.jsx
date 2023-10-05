import React, { useState, useEffect } from 'react';

import { FaCheck } from 'react-icons/fa'; // Import the FontAwesome checkmark icon

const LanguageInformation = ({ lang }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleWindowSizeChange() {
            const isMobile = window.innerWidth <= 768;
            setIsMobile(isMobile);
        }

        handleWindowSizeChange();
    }, []);
    const computerStyle = {
      marginTop:'20px',
      marginBottom: '20px'
    }
    const mobileStyle = {
        marginRight: '20px', marginTop: '20px'
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6" style={isMobile ? mobileStyle : computerStyle}>
                    <img
                        src={lang.image}
                        alt={lang.langName}
                        className="img-fluid"
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
