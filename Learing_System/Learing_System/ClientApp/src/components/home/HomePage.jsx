import React from 'react';
import img from '../../styles/bkg01.avif'; // Adjust the path based on your file structure

export default function HomePage() {

    const sectionStyle = {
        backgroundImage: `url(${img})`, // Use the imported background image
        backgroundSize: 'cover', // Adjust this according to your preference
        backgroundPosition: 'center', // Adjust this according to your preference
        width: '100%',  // Make the section cover the full viewport width
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    };

    return (
        <section className="h-100 vh-100 mb-0 gradient-custom-2" style={sectionStyle}>


            <div className="photo-container d-flex flex-column justify-content-center align-items-center">
                <div className="centered-text text-center p-4 bg-black bg-opacity-75" style={{ borderRadius: '30px' }}>
                    <h2 className="display-2 mb-0 font-family-roboto text-white" ><strong>Индивидуални уроци по програмиране</strong></h2>
                    <h4 className="mb-0 font-family-roboto" style={{ color: '#71F483' }}>Първи безплатен урок, бъди смел, направи първата крачка, ние ще те подкрепим.</h4>
                    <h4 className="mb-0 font-family-roboto" style={{ color: '#71F483' }}> Запишете още сега урок на телефон 0889044614.</h4>

                </div>

                <div className="button-container m-5 text-center p-2">
                    <button className="btn btn-outline-secondary m-2 p-5 btn-lg flex-fill text-white" style={{ borderRadius: '30px' }} >Услуги</button>
                    <button className="btn btn-outline-secondary p-5 btn-lg flex-fill" style={{ color: 'black', borderRadius: '30px' }} >Контакти</button>
                </div>
            </div>
        </section>
    );
}
