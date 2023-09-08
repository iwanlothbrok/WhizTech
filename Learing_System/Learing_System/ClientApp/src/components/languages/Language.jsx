import React from 'react'
import LanguageInformation from './LanguageInformation'
import Exercise from '../exercises/Exercises'
import FunFacts from './FunFacts'

export default function ({ lang }) {
    return (
        <div>
            <div style={{ backgroundColor: '#71F483' }}>
                <LanguageInformation lang={lang} />
            </div>
            <FunFacts/>
            <Exercise />
        </div>
    )
}
