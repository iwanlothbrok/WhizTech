import React, { useEffect } from 'react';
import fadeInAnimation from '../../animation/fadeInAnimation';

const SingleExercise = ({ exercises }) => {
    useEffect(() => {
        // Define the elements you want to animate
        const elementsToAnimate = document.querySelectorAll('.hidden');

        // Call the fadeInAnimation function with the elements
        fadeInAnimation(elementsToAnimate);
    }, []);

    return (
        <div className="exercise-list">
            {exercises.map((exercise, index) => (
                <div key={exercise.id} className="mb-3 icon hidden">
                    <h4 className="exercise-title" style={{ color: 'white' }}>Задача {exercise.id}</h4>
                    <p style={{ fontSize: '20px', color: '#71F483' }} className="exercise-question" >{exercise.question}</p>
                    <p style={{ fontSize: '15px' }} className="exercise-question text-white">Вход: <br /><strong>{exercise.firstInput}<br />{exercise.secondInput}</strong></p>


                    <ul className="list-group">
                        <p style={{ fontSize: '15px' }} className="exercise-question text-white">Изход:</p>

                        {exercise.answers.map((answer, answerIndex) => (
                            <li
                                key={answerIndex}
                                className="list-group-item"
                            >
                                0{answerIndex + 1}. {answer}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default SingleExercise;
