import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SingleExercise from './SingleExercise';
import csharpExercises from './exerDb/csharpExercises'
import Pages from '../blog/Pages'
const Exercise = () => {
    const { lang } = useParams();
    const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
    const [exercise, setExercises] = useState([csharpExercises]);
    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const [isStudyPage, setStudyPage] = useState(false)


    const exercisesPerPage = 6; // Number of exercises to show per page

    const startIndex = (currentPage - 1) * exercisesPerPage;
    const endIndex = startIndex + exercisesPerPage;


    useEffect(() => {
        setIsLoading(true);
        if (window.location.href.includes('/study')) {
            setStudyPage(true);
        }
        console.log(isStudyPage);
        if (isStudyPage) {
            if (lang === 'csharp') {
                setTimeout(() => {
                    setIsLoading(false);
                    setExercises(csharpExercises.slice(0, 3));
                }, 1000)
            }
            else if (lang === 'javascript') {
                setTimeout(() => {
                    setIsLoading(false);
                    // setExercises(csharpExercises.slice(0, 3));
                }, 1000)
            }
            else if (lang === 'cplus') {
                setTimeout(() => {
                    setIsLoading(false);
                    // setExercises(csharpExercises.slice(0, 3));
                }, 1000)
            }
            else if (lang === 'sql') {
                setTimeout(() => {
                    setIsLoading(false);
                    // setExercises(csharpExercises.slice(0, 3));
                }, 1000)
            }
            else if (lang === 'java') {
                setTimeout(() => {
                    setIsLoading(false);
                    // setExercises(csharpExercises.slice(0, 3));
                }, 1000)
            }
        }
        else {

            console.log(startIndex);
            console.log(endIndex);

            if (lang === 'csharp') {
                setTimeout(() => {
                    setIsLoading(false);
                    setExercises(csharpExercises.slice(startIndex, endIndex));
                }, 1000)
            }
            else if (lang === 'javascript') {
                setTimeout(() => {
                    setIsLoading(false);
                    // setExercises(csharpExercises);
                }, 1000)
            }
            else if (lang === 'cplus') {
                setTimeout(() => {
                    setIsLoading(false);
                    // setExercises(csharpExercises);
                }, 1000)
            }
            else if (lang === 'sql') {
                setTimeout(() => {
                    setIsLoading(false);
                    // setExercises(csharpExercises);
                }, 1000)
            }
            else if (lang === 'java') {
                setTimeout(() => {
                    setIsLoading(false);
                    // setExercises(csharpExercises);
                }, 1000)
            }
        }
    }, [lang, currentPage]);



    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

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
                <div>

                    <SingleExercise exercises={exercise} />
                    {isStudyPage ? (<div></div>)
                        : (
                            <Pages
                                currentPage={currentPage}
                                totalPages={Math.ceil(csharpExercises.length / exercisesPerPage)} // Calculate total pages based on the total exercises
                                onPageChange={handlePageChange}
                            />

                        )}
                </div>

            )}
        </div>
    );
};

export default Exercise;