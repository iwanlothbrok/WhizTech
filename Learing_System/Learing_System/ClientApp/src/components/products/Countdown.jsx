// Countdown.js
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/css/countdown.css';

const Countdown = ({ targetDate, headlineText }) => {
    const [timeLeft, setTimeLeft] = useState({});
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                return {
                    headline: headlineText,
                    countdown: null,
                };
            }

            return {
                days: Math.floor(distance / day),
                hours: Math.floor((distance % day) / hour),
                minutes: Math.floor((distance % hour) / minute),
                seconds: Math.floor((distance % minute) / second),
            };
        };

        setTimeLeft(calculateTimeLeft());

        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate, headlineText]);

    return (
        <div className="countdown__container" aria-live="polite">
            {timeLeft.countdown !== null ? (
                <ul className="countdown__list">
                    <li className="countdown__item">
                        <span>{timeLeft.days}</span> дни
                    </li>
                    <li className="countdown__item">
                        <span>{timeLeft.hours}</span> часа
                    </li>
                    <li className="countdown__item">
                        <span>{timeLeft.minutes}</span> минути
                    </li>
                    <li className="countdown__item">
                        <span>{timeLeft.seconds}</span> секунди
                    </li>
                    <h3>До края на записванията</h3>
                </ul>
            ) : (
                <h1 className="countdown__headline">{timeLeft.headline}</h1>
            )}
        </div>
    );
};

Countdown.propTypes = {
    targetDate: PropTypes.instanceOf(Date).isRequired,
    headlineText: PropTypes.string,
};

Countdown.defaultProps = {
    headlineText: "It's my birthday!",
};

export default Countdown;
