import React from 'react'
import LanguageInformation from './LanguageInformation'
import Exercise from '../exercises/Exercises'
import FunFacts from './FunFacts'
import QAList from './QAList'
import ContactWithInformation from '../ContactWithInformation'
export default function ({ lang }) {
    return (
        <div>
            <div style={{ backgroundColor: '#71F483' }}>
                <LanguageInformation lang={lang} />
            </div>
            {/* <FunFacts /> */}
            <QAList />
            <Exercise />
            <div><p></p></div>
            <ContactWithInformation />
        </div>
    )
}
