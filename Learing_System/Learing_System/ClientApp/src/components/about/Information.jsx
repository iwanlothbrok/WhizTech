import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router for navigation
import InformationCard from './InformationCard';

const Information = () => {

    const questions = [
        {
            id: 1,
            title: 'What is our mission?',
            description: 'Hey there, fellow future code maestro! At WhizTech, our mission is to make coding feel like unlocking a'
        }, {
            id: 2,
            title: 'Who are we?',
            description: ' Meet the WhizTech crew—your friendly neighborhood code mentors! Were thes'
        }, {
            id: 3,
            title: 'hy can we teach you or your kids?',
            description: 'Hey  At WhizTech, our mission is to make coding feel like unlocking a'
        }]

    return (
        <div className="container mt-5 text-white">
            <div className="row">
                {questions.map((quest) => <InformationCard key={quest.id} quest={quest} />)}
            </div>
        </div>
    );

}


export default Information;
