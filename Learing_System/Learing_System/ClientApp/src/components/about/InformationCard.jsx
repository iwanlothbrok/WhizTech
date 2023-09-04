import React from 'react';

function InformationCard({ quest}) {
    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title">{quest.title}</h2>
                    <p className="card-text">
                        {quest.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default InformationCard;