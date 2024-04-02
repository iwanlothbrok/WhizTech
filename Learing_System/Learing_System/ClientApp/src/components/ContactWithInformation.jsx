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
            <div className="col-md-6 hidden">
                <h2 className='mb-5 mt-4 md-4 display-4 text-center text-white' >Контакти</h2>
                <SmallContact />
            </div>
            <div className="col-md-6  hidden">
                <h2 className='mb-4 mt-4 md-4 display-4 text-center text-white'>Информарция</h2>
                <ContactInfoSection className='text-black' />
            </div>
        </div>
    )
}
