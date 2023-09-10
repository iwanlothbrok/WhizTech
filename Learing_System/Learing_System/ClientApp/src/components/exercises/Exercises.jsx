import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SingleExercise from './SingleExercise';
import csharpExercises from './exerDb/csharpExercises'

const Exercise = () => {
    const { lang } = useParams();
    const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
    const [exercise, setExercises] = useState([]);

    // const fetchExercisesFromAPI = async () => {
    //     try {
    //         setIsLoading(true);

    //         const response = await axios.get('https://localhost:7089/api/exercise/', {
    //             headers: {
    //                 lang: lang
    //             }
    //         });

    //         setExercises(response.data);
    //     } catch (error) {
    //         console.error('Error fetching exercises:', error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };


    useEffect(() => {
        setIsLoading(true);

        // Simulate an API call if the language is not C#
        if (lang !== 'CSharp') {
            setTimeout(() => {
                // setExercises(jsExercises);
                setIsLoading(false);
            }, 1000); // Simulated loading delay
        } else {
            // Use C# exercises directly
            setExercises(csharpExercises);
            setIsLoading(false);
        }
    }, [lang]);


    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-white">
                Примерни задачи, можете да намерите още{' '}
                <Link to="/sample-tasks" className="link" style={{ color: '#71F483' }}>ТУК</Link>
            </h1>            {isLoading ? (
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
