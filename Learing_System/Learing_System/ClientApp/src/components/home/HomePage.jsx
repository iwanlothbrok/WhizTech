import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../styles/bkg01.avif'; // Adjust the path based on your file structure
import { animateScroll as scroll } from "react-scroll";

export default function HomePage() {

    const onClickHandle = () => scroll.scrollToTop({ duration: 200 })

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
    const btnStyle = {
        borderColor: 'black',
        borderRadius: '30px'
    }

    return (
        <section className="h-100 vh-100 mb-0 gradient-custom-2" style={sectionStyle}>
            <div className="photo-container d-flex flex-column justify-content-center align-items-center">
                <div className="centered-text text-center p-4 bg-black bg-opacity-75" style={{ borderRadius: '30px' }}>
                    <h2 className="display-2 mb-0 font-family-roboto text-white" ><strong>Индивидуални уроци по програмиране</strong></h2>
                    <h4 className="mb-0 font-family-roboto" style={{ color: '#71F483' }}>Първи безплатен урок, бъди смел, направи първата крачка, ние ще те подкрепим.</h4>
                </div>

                <div className="button-container m-5 text-center p-2">
                    <Link to='/contact' >
                        <button style={btnStyle} onClick={onClickHandle} className="btn btn-outline-secondary m-2 p-5 btn-lg flex-fill custom-button">Услуги</button>
                    </Link>
                    <Link to='/contact'>
                        <button style={btnStyle} onClick={onClickHandle} className="btn btn-outline-secondary p-5 btn-lg flex-fill custom-button">Контакти</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
