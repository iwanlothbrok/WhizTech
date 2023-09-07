import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const SingleExercise = ({ exercises }) => {

    return (
        <div className="exercise-list">
            {exercises.map((exercise, index) => (
                <Card key={exercise.id} className="mb-3">
                    <Card.Body>
                        <Card.Title>Exercise {exercise.id}</Card.Title>
                        <Card.Text>{exercise.question}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {exercise.answers.map((answer, answerIndex) => (
                            <ListGroupItem
                                key={answerIndex}
                            >
                                {answer}
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Card>
            ))}
        </div>
    );
};

export default SingleExercise;
