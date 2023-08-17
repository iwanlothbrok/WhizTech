import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import backgroundImage from '../../styles/background2.jpg.avif';
import SingleExercise from './SingleExercise';
const Exercise = () => {
    const { lang } = useParams();

    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`, // Use the imported background image
        backgroundSize: 'cover', // Adjust this according to your preference
        backgroundPosition: 'center', // Adjust this according to your preference
        width: '100vw',  // Make the section cover the full viewport width
        height: '100vh'
    };

    const h1Style = {
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add semi-transparent black background
        padding: '20px',
        borderRadius: '10px',
    };

    const exercise = [{
        id: '5',
        title: 'Zadacha 1.',
        description: 'imame 5 qbylki i izqjdame 3, kolko imame',
        answers: ['2', '4', '1', '3']
    },
    {
        id: '7',
        title: 'Zadacha 1.',
        description: 'imame 5 qbylki i izqjdame 3, kolko imame',
        answers: ['2', '4', '1', '3']
    },
    {
        id: '6',
        title: 'Zadacha 1.',
        description: 'imame 5 qbylki i izqjdame 3, kolko imame',
        answers: ['2', '4', '1', '3']
    }]



    console.log(exercise);
    return (
        <div className="container mt-5" style={sectionStyle}>
            <h1 className="text-center mb-4" style={h1Style}>{lang}</h1>
            <SingleExercise exercises={exercise} />
        </div>
    );
};

export default Exercise;