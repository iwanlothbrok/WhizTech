import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SingleExercise from './SingleExercise';
import csharpExercises from './exerDb/csharpExercises'

const Exercise = () => {
    const { lang } = useParams();
    const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
    const [exercise, setExercises] = useState([csharpExercises]);

    useEffect(() => {
        setIsLoading(true);
        if (lang === 'csharp') {
            setTimeout(() => {
                setIsLoading(false);
                setExercises(csharpExercises);
            }, 1000)
        }
        // else if (lang === 'sql') {
        //     setExercises(csharpExercises);
        // } else if (lang === 'javascript') {
        //     setExercises(csharpExercises);
        // } else if (lang === 'java') {
        //     setExercises(csharpExercises);
        // } else if (lang === 'cplus') {
        //     setExercises(csharpExercises);
        // }
    }, [lang]);

    console.log(lang);
    console.log(exercise)
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