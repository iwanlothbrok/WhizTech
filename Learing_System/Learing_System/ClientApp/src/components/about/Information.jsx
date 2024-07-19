import React, { useState, useEffect } from 'react';
import InformationCard from './InformationCard';
import questionsDb from './questionsDb/questionsDb';

const Information = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => { setQuestions(questionsDb); }, []);

    return (
        <div className="container mt-5 justify-content-center align-items-center text-white">
            <div className="row">
                {questions.map((quest) => <InformationCard key={quest.id} quest={quest} />)}
            </div>
        </div>
    );
}

export default Information;
