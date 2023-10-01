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


    const pathExercises = `/exer/${lang}`;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12" style={{ backgroundColor: '#71F483' }}>
                        <LanguageInformation lang={languageParams} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-3 mb-2">
                        <QAList lang={lang} />
                    </div>
                    <div className="col-lg-12 mt-5">
                        <h1 className='text-center m-4' style={{ color: '#71F483' }}>Примерни задачи</h1>
                        <Exercise />
                        <h1 className="text-center mb-4 text-white">
                            Можете да намерите още задачи {' '}
                            <Link to={pathExercises} onClick={onClickHandle} className="link" style={{ color: '#71F483' }}>ТУК</Link>
                        </h1>
                    </div>
                </div>
            </div>
            <ContactWithInformation />
        </>
    );
}
