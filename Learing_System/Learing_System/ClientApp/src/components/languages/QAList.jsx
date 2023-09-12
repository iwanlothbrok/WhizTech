import React, { useState, useEffect } from 'react'
import QAComponent from './QAComponent'

export default function ({ lang }) {

    const [questions, setQuestions] = useState([]);

    // useEffect(() => {
    //     // if (lang === 'csharp') {
    //     //     setQuestions(csharp);
    //     // } else if (lang === 'sql') {
    //     //     setQuestions(sql);
    //     // } else if (lang === 'javascript') {
    //     //     setQuestions(JavaScript);
    //     // } else if (lang === 'java') {
    //     //     setQuestions(java);
    //     // } else if (lang === 'cplus') {
    //     //     setQuestions(cplus);
    //     }
    // }, [lang]);

    const question = [
        {
            question: 'Какво представлява програмният език C#?',
            answer: `C# е програмен език, който е разработен в Microsoft от Андерс Хейлсберг през 2000 г. Характерно за него
            е, че е структурен, мулти-парадигмен, строго-типизиран, декларативен, императивен
            , функционален, обектно-ориентиран, компонентно-ориентиран програмен език с общо предназначение.`
        },]
    return (
        <div>
            {questions.map((question, index) => <QAComponent />)}
        </div>
    )
}
