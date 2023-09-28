import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SingleExercise from './SingleExercise';
import Pages from '../blog/Pages'


import csharpExercises from './exerDb/csharpExercises'
import jsExercises from './exerDb/jsExercises'
import sqlExercises from './exerDb/sqlExercises';

const Exercise = () => {
    const { lang } = useParams();
    const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
    const [exercise, setExercises] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const [isStudyPage, setStudyPage] = useState(false)
    const [exercisesCounter, setExercisesCounter] = useState(0);
    const history = useNavigate();

    const exercisesPerPage = 6; // Number of exercises to show per page
    const startIndex = (currentPage - 1) * exercisesPerPage;
    const endIndex = startIndex + exercisesPerPage;

    useEffect(() => {
        setIsLoading(true);
        if (window.location.href.includes('/study/')) {
            setStudyPage(true);
        }

        if (isStudyPage) {
            checkLanguage(lang, setIsLoading, setExercises, setExercisesCounter, 0, 3, history);
        }
        else {
            if (window.location.href.includes('/study/')) {
                checkLanguage(lang, setIsLoading, setExercises, setExercisesCounter, 0, 3, history);
            } else {
                checkLanguage(lang, setIsLoading, setExercises, setExercisesCounter, startIndex, endIndex, history);
            }

        }
    }, [lang, currentPage]);


    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="container mt-5">
            {isLoading ? (
                <div className="text-center m-5 text-white" style={{ fontSize: '48px' }}>
                    Loading...
                </div>
            ) : exercise.length === 0 ? (
                <div className="text-center m-5 text-white" style={{ fontSize: '48px' }}>
                    There are no exercises for this language.
                </div>
            ) : (
                <div className='mb-5'>
                    <SingleExercise exercises={exercise} />
                    {isStudyPage ? (<div></div>)
                        : (
                            <Pages
                                currentPage={currentPage}
                                totalPages={Math.ceil(exercisesCounter / exercisesPerPage)}
                                onPageChange={handlePageChange}
                            />
                        )}
                </div>
            )}
        </div>
    );
};

export default Exercise;

function checkLanguage(lang, setIsLoading, setExercises, setExercisesCounter, startIndex, endIndex, history) {
    if (lang === 'csharp') {
        setTimeout(() => {
            setIsLoading(false);
            setExercisesCounter(csharpExercises.length);
            setExercises(csharpExercises.slice(startIndex, endIndex));
        }, 1000);
    }
    else if (lang === 'javascript') {
        setTimeout(() => {
            setIsLoading(false);
            setExercisesCounter(jsExercises.length);
            setExercises(jsExercises.slice(startIndex, endIndex));
        }, 1000);
    }
    else if (lang === 'cplus') {
        setTimeout(() => {
            setIsLoading(false);
            setExercisesCounter(csharpExercises.length);
            setExercises(csharpExercises.slice(startIndex, endIndex));
        }, 1000);
    }
    else if (lang === 'sql') {
        setTimeout(() => {
            setIsLoading(false);
            setExercisesCounter(sqlExercises.length);
            setExercises(sqlExercises.slice(startIndex, endIndex));
        }, 1000);
    }
    else if (lang === 'java') {
        setTimeout(() => {
            setIsLoading(false);
            setExercisesCounter(csharpExercises.length);
            setExercises(csharpExercises.slice(startIndex, endIndex));
        }, 1000);
    } else {
        console.log('inside');
        history('/error'); // Redirect to the /blog route
    }
}
