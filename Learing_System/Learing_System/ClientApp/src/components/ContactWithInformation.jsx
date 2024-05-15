import React, { useEffect } from 'react'
import SmallContact from './SmallContact'
import ContactInfoSection from './contact/ContactInfoSection'
import fadeInAnimation from '../animation/fadeInAnimation';
export default function ContactWithInformation() {
    useEffect(() => {
        // Define the elements you want to animate
        const elementsToAnimate = document.querySelectorAll('.hidden');

        // Call the fadeInAnimation function with the elements
        fadeInAnimation(elementsToAnimate);
    }, []);


    return (
        <div className='row m-3 wave-background'>
            <SmallContact />

        </div>
    )
}
