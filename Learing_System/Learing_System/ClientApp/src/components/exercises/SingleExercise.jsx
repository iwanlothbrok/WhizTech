import React from 'react';

const SingleExercise = ({ exercises }) => {
    return (
        <div className="exercise-list">
            {exercises.map((exercise, index) => (
                <div key={exercise.id} className="mb-3">
                    <h5 className="exercise-title text-white">Exercise {exercise.id}</h5>
                    <p className="exercise-question text-white">{exercise.question}</p>
                    <ul className="list-group">
                        {exercise.answers.map((answer, answerIndex) => (
                            <li
                                key={answerIndex}
                                className="list-group-item"
                            >
                                {answer}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default SingleExercise;
