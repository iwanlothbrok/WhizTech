import React from 'react';
import java from '../../styles/java-logo.webp';
import { FaCheck } from 'react-icons/fa'; // Import the FontAwesome checkmark icon

const LanguageInformation = ({ lang }) => {

    // add the if else for the lang 
    console.log(lang);

    const cSharpInfo = [
        "Learn the C# programming language.",
        "Develop back-end applications with C#.",
        "Create front-end applications with JavaScript and HTML5.",
        "Build web applications with ASP.NET MVC.",
        "Start your career as a C# programmer.",
        "Connect with peers in the C# course.",
        "Build a successful career with C# lessons.",
        "Access free C# tutorials and video lessons for C# and .NET.",
        "Begin with a free beginner's course in C# programming.",
    ];

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
                <div className="col-md-6 text-black mt-5 mr-5">
                    <h2>Частните уроци по C# се провеждат според Вашите нужди и изисквания.</h2>
                    <ul className="list-unstyled">
                        {cSharpInfo.map((info, index) => (
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
