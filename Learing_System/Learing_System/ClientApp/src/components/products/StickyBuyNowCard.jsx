// src/components/StickyBuyNowCard.js
import React, { useState, useEffect } from 'react';
import productImage from '../../styles/photos/banner.png';
import '../.././styles/css/buyNowCard.css'
import '../../styles/css/productsDescriptionFunnel.css';

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
                <img src={productImage} alt="Course Thumbnail" />
            </div>
            <div className="course-info">
                <div className="price-section">
                    <div className="save justify-content-center align-items-center" style={{ background: '#ff5c5c', borderRadius: '5px', padding: '5px' }}>
                        <p className='text-white m-0' style={{ fontSize: '14px' }}>Спести 400лв</p>
                    </div>
                    <div><strong className='compare-price'> 597 лв.</strong> <strong className="current-price">197 лв.</strong></div>
                </div>

                <a href='https://buy.stripe.com/14kdTt4hm4Lacj67ss' className="btn main-btn fw-bold">ЗАПИШИ СЕ</a>
                <div className="last-update">Обновен на: <span>27 юни, 2024</span></div>
                <div className="includes">
                    <div className="label">Този курс включва:</div>
                    <ul>
                        <li><b>1</b> Модул</li>
                        <li><b>9</b> Онлайн Лекции</li>
                        <li><b>20+</b> Мини Проектa</li>
                        <li><b>50+</b> Задачи За Решаване</li>
                        <li><b>100+</b> Придобити Умения</li>
                    </ul>
                </div>
            </div>

            <div className="registration-timer">
                <h2>ЗАПИШИ СЕ СЕГА</h2>
                <div className="timer">
                    <div className="time-box">{timeParts.days[0]}</div>
                    <div className="time-box">{timeParts.days[1]}</div>
                    <div className="colon">:</div>
                    <div className="time-box">{timeParts.hrs[0]}</div>
                    <div className="time-box">{timeParts.hrs[1]}</div>
                    <div className="colon">:</div>
                    <div className="time-box">{timeParts.mins[0]}</div>
                    <div className="time-box">{timeParts.mins[1]}</div>
                    <div className="colon">:</div>
                    <div className="time-box">{timeParts.secs[0]}</div>
                    <div className="time-box">{timeParts.secs[1]}</div>
                </div>
                <p className='mb-0 mt-1'>ДНИ ДО КРАЯ НА ЗАПИСВАНИЯТА</p>
            </div>
        </div>
    );
}