// src/components/StickyBuyNowCard.js
import React, { useState, useEffect } from 'react';
// import productImage from '../../styles/photos/banner.png';
import productImage from '../../styles/photos/mentorshipBanner.png';

import '../.././styles/css/buyNowCard.css'
import '../../styles/css/productsDescriptionFunnel.css';
import Countdown from './Countdown';

const calculateTimeLeft = () => {
    const endDate = new Date('2024-07-07T23:59:59');
    const now = new Date();
    const timeLeft = Math.max(endDate - now, 0);
    return timeLeft;
};

const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hrs = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return {
        days: days.toString().padStart(2, '0'),
        hrs: hrs.toString().padStart(2, '0'),
        mins: mins.toString().padStart(2, '0'),
        secs: secs.toString().padStart(2, '0'),
    };
};

export default function StickyBuyNowCard() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeParts = formatTime(timeLeft);

    return (
        <div className="funnel-description sticky-course text-white">
            <div className="course-thumb">
                <img className="productImage" src={productImage} alt="Course Thumbnail" />
            </div>
            <div className="course-info">
                <div className="price-section">
                    <div className="save justify-content-center align-items-center" style={{ background: '#ff5c5c', borderRadius: '5px', padding: '5px' }}>
                        <p className='text-white m-0' style={{ fontSize: '14px' }}>Спести 270лв.</p>
                    </div>
                    <div><strong className='compare-price'>397 лв.</strong> <strong className="current-price">27 лв.</strong></div>
                </div>

                <a href='https://buy.stripe.com/3cs6r14hm7XmdnaeUX' className="btn main-btn fw-bold">ЗАПИШИ СЕ</a>
                <div className="last-update">Обновен на: <span>27 юли, 2024</span></div>
                <div className="includes">
                    {/* <div className="label">Този курс включва:</div> */}
                    <ul>
                        <ul>
                            <li><b>Индивидуални сесии:</b> Персонализирани уроци с експерти</li>
                            <li><b>20+ Практически проекта:</b> Реални задачи за обучение</li>
                            <li><b>Персонализирана програма:</b> Съобразена с твоите цели</li>
                            <li><b>Кариерни насоки:</b> Подготовка за интервюта и портфолио</li>
                            <li><b>Ексклузивни ресурси:</b> Материали, записи и общност</li>
                        </ul>

                    </ul>
                </div>
            </div>

        </div>
    );
}