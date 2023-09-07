import React from 'react'
import SmallContact from './SmallContact'
import ContactInfoSection from './contact/ContactInfoSection'

export default function Check() {
    return (
        <div className='row m-3'>
            <div className="col-md-6">
                <h2 className='mb-5 mt-md-4 display-4 text-center' style={{ color: 'whitesmoke' }}>Kontakti</h2>

                <SmallContact />
            </div>
            <div className="col-md-6" style={{ backgroundColor: '#71F483' }}>
                <h2 className='mb-4 mt-md-4 display-4 text-center color-white'>info</h2>

                <ContactInfoSection />
            </div>
        </div>

    )
}
