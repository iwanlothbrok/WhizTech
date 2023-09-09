import React from 'react'
import QAComponent from './QAComponent'

export default function () {
    const question = [
        {
            question: 'What is your name?',
            answer: `asdaksfkrgkergdkrvsrkvdmrkndrgmdldrgn`
        }
    ]
    return (
        <div>
            <QAComponent question={question} />
        </div>
    )
}
