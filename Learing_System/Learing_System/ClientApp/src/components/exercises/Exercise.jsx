import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundImage from '../styles/c#.jpg.avif'; // Adjust the path based on your file structure

const Exercise = () => {
    //   const [exercises, setExercises] = useState([]);

    //   useEffect(() => {
    //     // Fetch exercises from the API when the component mounts
    //     axios.get('YOUR_API_ENDPOINT')
    //       .then(response => {
    //         setExercises(response.data); // Assuming the API returns an array of exercises
    //       })
    //       .catch(error => {
    //         console.error('Error fetching exercises:', error);
    //       });
    //   }, []);
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`, // Use the imported background image
        backgroundSize: 'cover', // Adjust this according to your preference
        backgroundPosition: 'center', // Adjust this according to your preference
        width: '100vw',  // Make the section cover the full viewport width
        height: '100vh'
    };

    const exercise = {
        id: '5',
        title: 'Zadacha 1.',
        description: 'imame 5 qbylki',

    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">C# Exercises</h1>
            <div className="list-group">
                {/* {exercises.map(exercise => ( */}
                <div key={exercise.id} className="list-group-item mb-3">
                    <h2>{exercise.title}</h2>
                    <p>{exercise.description}</p>
                    <div >
                        <p>
                            01. Option 1
                        </p>
                    </div>
                    <div >
                        <p>
                            02. Option 2
                        </p>
                    </div>
                    <div >
                        <p>
                            03. Option 3
                        </p>
                    </div>
                    <div >
                        <p>
                            04. Option 4
                        </p>
                    </div>
                </div>
                {/* ))} */}
            </div>
        </div>
    );
};

export default Exercise;