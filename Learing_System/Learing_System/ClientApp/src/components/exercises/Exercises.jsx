import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SingleExercise from './SingleExercise';
import csharpExercises from './exerDb/csharpExercises'

const Exercise = () => {
    const { lang } = useParams();
    const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
    const [exercise, setExercises] = useState([]);


    useEffect(() => {
        setIsLoading(true);

        if (lang !== 'csharp') {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000); // Simulated loading delay
        } else {
            setExercises(csharpExercises);
            setIsLoading(false);
        }
    }, [lang]);


    return (
        <div className="container mt-5">
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
