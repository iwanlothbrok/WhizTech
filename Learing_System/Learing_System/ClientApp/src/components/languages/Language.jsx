import React from 'react'
import LanguageInformation from './LanguageInformation'
import Exercise from '../exercises/Exercises'

export default function ({ lang }) {
    return (
        <div>
            <div style={{ backgroundColor: '#71F483' }}>
                <LanguageInformation lang={lang} />
            </div>
            <Exercise />
        </div>
    )
}
