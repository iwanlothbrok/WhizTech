import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from '../../styles/background2.jpg.avif';
import SingleExercise from './SingleExercise';

const Exercise = () => {
    const { lang } = useParams();
    const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
    const [exercise, setExercises] = useState([]);

    const sectionStyle = {
        backgroundImage: exercise.length === 0 ? 'none' : `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: exercise.length === 0 ? 'auto' : 'cover', // Adjust the background size based on the condition
        width: '100vw',
        height: '100vh'
    };

    const h1Style = {
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '20px',
        borderRadius: '10px',
    };

    const fetchExercisesFromAPI = async () => {
        try {
            setIsLoading(true);

            const response = await axios.get('https://localhost:7089/api/exercise/', {
                headers: {
                    lang: lang
                }
            });

            setExercises(response.data);
        } catch (error) {
            console.error('Error fetching exercises:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchExercisesFromAPI();
    }, [lang]);

    return (
        <div className="container mt-5" style={sectionStyle}>
            <h1 className="text-center mb-4" style={h1Style}>{lang === 'CSharp' ? 'C# or C++' : lang}</h1>
            {isLoading ? (
                <div className="text-center mt-5 text-white" style={{ fontSize: '48px' }}>
                    Loading...
                </div>
            ) : exercise.length === 0 ? (
                <div className="text-center mt-5 text-white" style={{ fontSize: '48px' }}>
                    There are no exercises for this language.
                </div>
            ) : (
                <SingleExercise exercises={exercise} />
            )}
        </div>
    );
};

export default Exercise;
