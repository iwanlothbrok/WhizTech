import React, { useEffect } from 'react';
import fadeInAnimation from '../../animation/fadeInAnimation';

function InformationCard({ quest: question }) {
    useEffect(() => {
        const elementsToAnimate = document.querySelectorAll('.hidden');
        fadeInAnimation(elementsToAnimate);
    }, []);

    return (
        <div className="col-md-4 col-12">
            <div className="card-bg card mb-4 icon hidden" style={{ background: 'rgb(13, 173, 98) !important', borderRadius: '10px', transition: 'transform 0.3s ease-in-out' }} >
                <div className="card-body">
                    <h2 className="card-title text-dark">{question.title}</h2>
                    <p className="card-text text-dark">
                        {question.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default InformationCard;
