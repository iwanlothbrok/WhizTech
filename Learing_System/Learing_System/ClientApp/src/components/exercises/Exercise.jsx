import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
                    <div className="form-check">
                        <input type="radio" className="form-check-input" name={`exercise_${exercise.id}`} id={`option1_${exercise.id}`} value="option1" />
                        <label className="form-check-label" htmlFor={`option1_${exercise.id}`}>
                            Option 1
                        </label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" name={`exercise_${exercise.id}`} id={`option2_${exercise.id}`} value="option2" />
                        <label className="form-check-label" htmlFor={`option2_${exercise.id}`}>
                            Option 2
                        </label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" name={`exercise_${exercise.id}`} id={`option3_${exercise.id}`} value="option3" />
                        <label className="form-check-label" htmlFor={`option3_${exercise.id}`}>
                            Option 3
                        </label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" name={`exercise_${exercise.id}`} id={`option4_${exercise.id}`} value="option4" />
                        <label className="form-check-label" htmlFor={`option4_${exercise.id}`}>
                            Option 4
                        </label>
                    </div>
                </div>
                {/* ))} */}
            </div>
        </div>
    );
};

export default Exercise;