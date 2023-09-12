import React from 'react';
import { Card } from 'react-bootstrap';

function InformationCard({ quest: quesiton }) {
    return (
        <div className="col-md-4">
            <div className="card mb-4" style={{ backgroundColor: '#5bc96a' }}   >
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