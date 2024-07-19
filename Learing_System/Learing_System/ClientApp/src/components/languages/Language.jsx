import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";

import LanguageInformation from './LanguageInformation';
import Exercise from '../exercises/Exercises';
import QAList from './QAList';
import ContactWithInformation from '../ContactWithInformation';
import cplus from './langDb/cplus'
import sql from './langDb/sql'
import csharp from './langDb/csharp'
import java from './langDb/java'
import JavaScript from './langDb/javascript'
import BasicContact from '../contact/BasicContact'
import fadeInAnimation from '../../animation/fadeInAnimation';
export default function Language() {

    const onClickHandle = () => scroll.scrollToTop({ duration: 200 })

    let test = {
        image: 'SAD',
        langName: 'Java Script',
        information: [
            'ADadA'
        ],
        photoStyle: {
            width: '400px', /* Set the desired width */
            height: '400px'/* Set the desired height */
        }
    };

    const { lang } = useParams();
    const [languageParams, setLanguageParams] = useState(test);

    useEffect(() => {
        if (lang === 'csharp') {
            setLanguageParams(csharp);
        } else if (lang === 'sql') {
            setLanguageParams(sql);
        } else if (lang === 'javascript') {
            setLanguageParams(JavaScript);
        } else if (lang === 'java') {
            setLanguageParams(java);
        } else if (lang === 'cplus') {
            setLanguageParams(cplus);
        }
    }, [lang]);

    useEffect(() => {
        // Define the elements you want to animate
        const elementsToAnimate = document.querySelectorAll('.hidden');

        // Call the fadeInAnimation function with the elements
        fadeInAnimation(elementsToAnimate);
    }, []);

    const pathExercises = `/exer/${lang}`;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 hidden" style={{ background: 'rgb(13, 173, 98)' }}>
                        <LanguageInformation lang={languageParams} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-3 mb-2">
                        <QAList lang={lang} />
                    </div>
                </div>
            </div>
            <BasicContact />
        </>
    );
}
