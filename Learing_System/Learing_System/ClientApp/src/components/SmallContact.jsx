import React from 'react'

export default function SmallContact() {
    return (
        <>
            <h1>Elegant Contact Form</h1>
            <form className="cf">
                <div className="half left cf">
                    <input type="text" id="input-name" placeholder="Name" />
                    <input type="email" id="input-email" placeholder="Email address" />
                    <input type="text" id="input-subject" placeholder="Subject" />
                </div>
                <div className="half right cf">
                    <textarea name="message" id="input-message" placeholder="Message"></textarea>
                </div>
                <input type="submit" value="Submit" id="input-submit" />
            </form>
        </>
    )
}
