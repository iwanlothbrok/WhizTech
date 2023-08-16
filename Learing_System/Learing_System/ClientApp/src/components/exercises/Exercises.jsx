import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import backgroundImage from '../../styles/c#.jpg.avif'; // Adjust the path based on your file structure
import backgroundImage from '../../styles/background2.jpg.avif';
import SingleExercise from './SingleExercise';
const Exercise = () => {

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

    // const formStyle = {
    //     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity and color as needed
    //     padding: '20px', // Add padding to the form to separate it from the background
    //     borderRadius: '10px', // Add rounded corners for a better look
    // };

    const { language } = useParams();
    console.log(language);
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
            <h1 className="text-center mb-4" style={h1Style}>C# Exercises</h1>
            <SingleExercise title={language} exercises={exercise} />
        </div>
    );
};

export default Exercise;