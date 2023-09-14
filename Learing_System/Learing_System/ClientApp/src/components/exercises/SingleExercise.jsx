import React from 'react';

const SingleExercise = ({ exercises }) => {
    return (
        <div className="exercise-list">
            {exercises.map((exercise, index) => (
                <div key={exercise.id} className="mb-3">
                    <h4 className="exercise-title text-white">Задача {exercise.id}</h4>
                    <p style={{fontSize: '20px'}} className="exercise-question text-white">{exercise.question}</p>
                    <ul className="list-group">
                        {exercise.answers.map((answer, answerIndex) => (
                            <li
                                key={answerIndex}
                                className="list-group-item"
                            >
                                {answerIndex + 1}. {answer}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default SingleExercise;
