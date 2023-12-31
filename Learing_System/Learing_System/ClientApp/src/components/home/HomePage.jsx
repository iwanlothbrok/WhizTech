import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img from '../../styles/bkg01.avif'; // Adjust the path based on your file structure
import { animateScroll as scroll } from "react-scroll";
import video from '../../styles/videos/video2.mp4'
export default function HomePage() {
    const [isMobile, setIsMobile] = useState(false);

    const onClickHandle = () => scroll.scrollToTop({ duration: 200 })
    useEffect(() => {
        function handleWindowSizeChange() {
            const isMobile = window.innerWidth <= 768;
            setIsMobile(isMobile);
        }

        handleWindowSizeChange();

    }, []);
    // const sectionStyle = {
    //     backgroundImage: `url(${video})  no-repeat center center fixed`, // Use the imported background image
    //     backgroundSize: 'cover', // Adjust this according to your preference
    //     backgroundPosition: 'center', // Adjust this according to your preference
    //     width: '100%',  // Make the section cover the full viewport width
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',

    // };
    const btnStyle = {
        borderColor: 'black',
        borderRadius: '30px',
        padding: isMobile ? '2.7rem' : '3rem'

    }

    return (
        <section className="h-100 vh-100 mb-0 gradient-custom-2 header-carousel">
            <div className='overlay'>
                <video className='video' src={video} autoPlay loop muted>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="photo-container d-flex flex-column justify-content-center align-items-center hidden">
                <div className="centered-text text-center p-4 bg-black bg-opacity-75" style={{ borderRadius: '30px', marginTop:'200px' }}>
                    <h2 className="display-2 mb-0 font-family-roboto text-white" ><strong>Индивидуални уроци по програмиране</strong></h2>
                    <h4 className="mb-0 font-family-roboto" style={{ color: '#71F483' }}>Бъди смел, постави началото! Ние ще те подкрепим с <strong>първи безплатен урок</strong>.</h4>
                </div>

                <div className="button-container m-5 text-center p-2">
                    <Link to='/about' >
                        <button style={btnStyle} onClick={onClickHandle} className="btn btn-outline-secondary m-2 btn-lg flex-fill custom-button">За Нас</button>
                    </Link>
                    <Link to='/contact'>
                        <button style={btnStyle} onClick={onClickHandle} className="btn btn-outline-secondary btn-lg flex-fill custom-button">Контакти</button>
                    </Link>
                </div>
            </div>

        </section>
    );
}
