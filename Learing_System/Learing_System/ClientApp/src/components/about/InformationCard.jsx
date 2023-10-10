import React, { useEffect } from 'react';
import fadeInAnimation from '../../animation/fadeInAnimation';
function InformationCard({ quest: quesiton }) {
    useEffect(() => {
        // Define the elements you want to animate
        const elementsToAnimate = document.querySelectorAll('.hidden');

        // Call the fadeInAnimation function with the elements
        fadeInAnimation(elementsToAnimate);
    }, []);

    return (
        <div className="col-md-4">
            <div className="card mb-4 icon hidden" style={{ backgroundColor: '#71F483' }}   >
                <div className="card-body">
                    <h2 className="card-title">{quesiton.title}</h2>
                    <p className="card-text">
                        {quesiton.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default InformationCard;