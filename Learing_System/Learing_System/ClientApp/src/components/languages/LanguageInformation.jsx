import React from 'react';
import java from '../../styles/java-logo.webp';

const LanguageInformation = ({ lang }) => {

    // add the if else for the lang 
    console.log(lang);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={java}
                        alt="Your Photo"
                        className="img-fluid m-4"
                        style={{ width: '250px', marginLeft: '25px' }}
                    />
                </div>
                <div className="col-md-6 text-black mt-5 mr-5 h2">
                    <p>
                        Some text with emojis:
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis eius velit voluptate sequi delectus voluptatum minus rerum. Corporis doloribus
                        officia totam ad ipsa optio laudantium autem molestias libero. Voluptatum?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LanguageInformation;
