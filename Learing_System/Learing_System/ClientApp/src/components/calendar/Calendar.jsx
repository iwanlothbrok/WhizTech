import React from 'react';
import { InlineWidget } from "react-calendly";


export default function Calendar() {
    const calendlyEmbed = {
        width: '100%',/* Set the desired width */
        height: '750px', /* Set the desired height */
        overflow: 'hidden' /* Hide the scrollbar */
    }
    return (
        <div>
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="mt-4" style={{ color: '#71F483', fontSize: '2.5rem', fontFamily: 'cursive' }}>
                    🚀 Запази Урок и Прелети През Знанието! 📚
                </h1>
            </div>
            <InlineWidget
                text="Click here to schedule!"
                textColor="#ffffff"
                color="#00a2ff"
                styles={calendlyEmbed}
                url="https://calendly.com/whiztech-team/meeting" />
        </div>
    );
}