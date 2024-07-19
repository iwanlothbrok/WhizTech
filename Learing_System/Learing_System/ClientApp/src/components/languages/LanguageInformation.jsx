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
        window.addEventListener('resize', handleWindowSizeChange);
        return () => window.removeEventListener('resize', handleWindowSizeChange);
    }, []);

    const computerStyle = {
        marginTop: '20px',
        marginBottom: '20px'
    };
    const mobileStyle = {
        marginRight: '20px',
        marginTop: '20px'
    };

    return (
        <div className="container mt-2 mb-0">
            <div className="row mb-0">
                <div className="col-md-4 m-0 mb-0" style={isMobile ? mobileStyle : computerStyle}>
                    <img
                        src={lang.image}
                        alt={lang.langName}
                        className="img-fluid w-75"
                    />
                </div>
                <div className="col-md-7 text-black mt-5">
                    <h2>Частните уроци по {lang.langName} се провеждат според Вашите нужди и изисквания.</h2>
                    <ul className="list-unstyled">
                        {lang.information.map((info, index) => (
                            <li key={index} style={{ fontSize: '22px' }}>
                                <FaCheck className="text-alert mr-5" />
                                <span dangerouslySetInnerHTML={{ __html: info }}></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LanguageInformation;
