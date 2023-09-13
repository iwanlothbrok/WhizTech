import React, { useState, useEffect } from 'react'
import QAComponent from './QAComponent'
import cppQuestions from './questionsDb/cplus'
import sqlQuestions from './questionsDb/sql'
import csharp from './questionsDb/csharp'
import javaQuestions from './questionsDb/java'
import jsQuestions from './questionsDb/javascript'

export default function ({ lang }) {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        if (lang === 'csharp') {
            setQuestions(csharp);
        } else if (lang === 'sql') {
            setQuestions(sqlQuestions);
        } else if (lang === 'javascript') {
            setQuestions(jsQuestions);
        } else if (lang === 'java') {
            setQuestions(javaQuestions);
        } else if (lang === 'cplus') {
            setQuestions(cppQuestions);
        }
    }, [lang]);

    return (
        <div>
            {questions.map((question, index) => <QAComponent question={question} />)}
        </div>
    )
}
