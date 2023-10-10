import React, { useEffect } from 'react';
import fadeInAnimation from '../../animation/fadeInAnimation';
const QAComponent = ({ question }) => {

    useEffect(() => {
        // Define the elements you want to animate
        const elementsToAnimate = document.querySelectorAll('.hidden');

        // Call the fadeInAnimation function with the elements
        fadeInAnimation(elementsToAnimate);
    }, []);

    return (
        <div className="container mt-5 text-white">
            <div className="row icon hidden">
                <div className="col-md-6">
                    <div className="question" style={{ marginRight: '25px' }}>
                        <h2 style={{ marginRight: '25px', color: '#71F483' }}>{question.question}</h2>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="answer">
                        <h5>{question.answer}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default QAComponent;
