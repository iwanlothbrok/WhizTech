import React from 'react';

const SingleExercise = ({ exercises }) => {

    return (

        <div className="accordion mt-3" id="accordionPanelsStayOpenExample">
            {exercises.map((exercise, index) => (
                <div className="accordion-item mt-2 mb-2" key={exercise.id}>
                    <h2 className="accordion-header" id={`heading-${exercise.id}`}>
                        <button
                            className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#exercise-collapse-${exercise.id}`}
                            aria-expanded={index === 0 ? 'true' : 'false'}
                            aria-controls={`exercise-collapse-${exercise.id}`}
                        >
                            {exercise.title}
                        </button>
                    </h2>
                    <div
                        id={`exercise-collapse-${exercise.id}`}
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                        aria-labelledby={`heading-${exercise.id}`}
                        data-bs-parent="#accordionPanelsStayOpenExample"
                    >
                        <div className="accordion-body">
                            <strong>{exercise.description}</strong>
                            {exercise.answers.map((answer, answerIndex) => (
                                <p key={answerIndex}>{answer}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SingleExercise;
