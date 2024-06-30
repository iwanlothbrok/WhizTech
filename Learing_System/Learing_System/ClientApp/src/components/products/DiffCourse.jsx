import React, { useState, useEffect } from 'react';

import '../../styles/css/productsDescriptionFunnel.css';

export default function DiffCourse() {
    const calculateTimeLeft = () => {
        const endDate = new Date('2024-07-07T23:59:59'); // End date and time
        const now = new Date();
        const timeLeft = Math.max(Math.floor((endDate - now) / 1000), 0); // Time left in seconds, rounded down
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => Math.max(prevTime - 1, 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const days = Math.floor(seconds / (3600 * 24));
        const hrs = Math.floor((seconds % (3600 * 24)) / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${days}d ${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            <div className="funnel-section mt-2">
                <h3 className='header-secondary'>Защо да избереш нашия C# курс?</h3>
                <p className='body-text'>
                    Искаш да се потопиш в програмирането и да усвоиш основите на C# само за 3 седмици? Този курс е идеалният старт. С нашите интензивни сесии ще научиш как да създадеш своята първа разработка бързо и ефективно.
                </p>
                <p className='body-text'>
                    С три сесии на седмица, които ще бъдат на живо, ще усвоиш основите на C# – от създаването на среда за разработка до основни входно-изходни операции, поток на управление, цикли и методи.
                </p>
                <p className='body-text'>
                    Натрупай практически опит и изгради солидна основа за усъвършенстване на уменията си за програмиране. Този курс ще те подготви за реални проекти и ще ти помогне да започнеш своето пътуване в света на програмирането.
                </p>
            </div>

            <div className="funnel-section">
                <h3 className='header-secondary'>Какво ще научиш?</h3>
                <p className='body-text'>
                    В курса ще научиш как да:
                </p>
                <ul className='bonuses-list'>
                    <li>Пишеш код на C#</li>
                    <li>Създаваш собствени проекти от нулата</li>
                    <li>Използваш основни и напреднали функции на C#</li>
                    <li>Решаваш задачи и проекти самостоятелно</li>
                </ul>
                <p className='body-text'>
                    Практическият опит, който ще получиш, ще бъде основата за твоето усъвършенстване в програмирането.
                </p>
            </div>

            <div className="funnel-section">
                <h3 className='header-secondary'>Бонуси!</h3>
                <ul className='bonuses-list'>
                    <li>Безплатна електронна книга на стойност 25 лв.</li>
                    <li>Достъп до записани лекции.</li>
                    <li>Възможност за влизане в нашата менторска програма.</li>
                    <li>Присъединяване към нашата Discord общност за помощ и мрежа.</li>
                    <li>Резултат над 4,5 на финалния изпит - 15% отстъпка от следващия курс.</li>
                    <li>Отличен 6,00 - 30% отстъпка за следващия курс.</li>
                </ul>
            </div>
        </div>
    );
}
