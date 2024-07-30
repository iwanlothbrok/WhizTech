// src/components/MentorshipDescription.js
import React, { useState, useEffect } from 'react';
import '../../styles/css/productsDescriptionFunnel.css';
import Countdown from './Countdown';

export default function MentorshipDescription() {
    const calculateTimeLeft = () => {
        const endDate = new Date('2024-07-07T23:59:59'); // End date and time
        const now = new Date();
        const timeLeft = Math.max(Math.floor((endDate - now) / 1000), 0); // Time left in seconds, rounded down
        return timeLeft;
    };
    const targetDate = new Date(new Date().getFullYear(), 7, 15); // Month is 0-indexed

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
        <div >

            <div className="funnel-section mt-2">
                <h3 className='header-secondary'>Персонализирано обучение:</h3>
                <p className='body-text'>
                    Тази програма е първата по рода си в България и предлага несравнимо учебно преживяване за всеки в програмата.
                    С ексклузивен достъп до <span className="highlight">ТОП ментори</span> от индустрията, вие получавате персонализирани насоки, съобразени с вашите нужди.
                    Нашата учебна програма включва най-съвременни инструменти и <span className="highlight">реални проекти</span>, което гарантира, че сте оборудвани с търсените умения.
                    Насладете се на допълнителни предимства като <span className="highlight">персонализирано обучение</span>, <span className="highlight">цялостна кариерна подкрепа</span>, безплатна електронна книга и достъп до оживена общност.
                    Това менторство не е просто курс - то е <span className="highlight">вашият път към успешна кариера в областта на технологиите</span>.
                </p>
            </div>


            <div className="funnel-section">
                <h3 className='header-secondary'>Знаеш ли, че има нов начин, с който можеш да:</h3>
                <ul className='highlight-list'>
                    <li><strong>Прескочиш скучните, пренаселени курсове</strong> и да получиш индивидуално внимание.</li>
                    <li><strong>Избегнеш губенето на години в университет</strong>, учейки само как да стартираш лаптопа си, и вместо това да започнеш да създаваш истински проекти.</li>
                    <li><strong>Превърнеш страстта си в успешна кариера</strong>, с помощта на ментори, които тe обучават.</li>
                    <li><strong>Изградиш впечатляващо портфолио</strong>, което показва реални умения, а не само теории.</li>
                    <li><strong>Влезеш в IT индустрията с увереност и реален опит.</strong></li>
                </ul>
                <h3 className="header-secondary mt-4">И всичко това без да:</h3>
                <ul className="highlight-list negative">
                    <li><strong style={{ fontSize: '16px' }}>Се записваш в пренаселени и безлични курсове</strong>, където си просто още едно число.</li>
                    <li><strong style={{ fontSize: '16px' }}>Прекарваш години в университети</strong>, учейки маловажни неща.</li>
                    <li><strong style={{ fontSize: '16px' }}>Плащаш за скъпи, но неефективни програми.</strong></li>
                    <li><strong style={{ fontSize: '16px' }}>Разчиташ на скучни теоретични лекции.</strong></li>
                    <li><strong style={{ fontSize: '16px' }}>Губиш време в курсове, които не ти дават реални умения.</strong></li>
                </ul>
            </div>

            <div className="funnel-section">
                <h3 className='header-secondary'>Какво ще научиш по време на менторството:</h3>
                <ul className='highlight-list'>
                    <li><strong>Основи на програмирането:</strong> Започни с <span className="highlight">C#</span> или <span className="highlight">JavaScript</span> и научи основните концепции, синтаксис и структури в избрания език.</li>
                    <li><strong>Разработка на уеб приложения:</strong> Развий уменията си с технологии като <span className="highlight">ASP.NET</span>, <span className="highlight">SQL</span> и <span className="highlight">React</span>, в зависимост от избрания език. Изграждай динамични и интерактивни уеб приложения.</li>
                    <li><strong>Усъвършенствано програмиране:</strong> Премини към по-сложни теми и научи как да оптимизираш кода си и да използваш напреднали функции и техники.</li>
                    <li><strong>Реални проекти:</strong> Работи по реални проекти, които ще ти помогнат да приложиш наученото на практика и да се подготвиш за истински работни задачи.</li>
                    <li><strong>Кариера и портфолио:</strong> Създай впечатляващо портфолио и научи как да се представиш успешно пред работодатели, с подкрепата на нашите ментори.</li>
                </ul>
            </div>
            <div className="funnel-section">
                <h3 className='header-secondary'>Ето какво ще получиш:</h3>
                <ul className='highlight-list'>
                    <li><strong className='pointLi'>БОНУС #1: Персонализиранo 1-на-1 обучение</strong> Наслади се на ексклузивни индивидуални сесии с ментор, който ще те води през всяка стъпка от обучението.</li>
                    <li><strong className='pointLi'>БОНУС #2: Вечен достъп до всички записани лекции</strong> Преглеждай уроците по всяко време и навсякъде, когато имаш нужда от повторение или задълбочаване.</li>
                    <li><strong className='pointLi'>БОНУС #3: Безплатна електронна книга "НАРЪЧНИК ЗА НАЧИНАЕЩИ"</strong> Получаваш е-книга, пълна с допълнителни ресурси, упражнения и съвети от експерти.</li>
                    <li><strong className='pointLi'>БОНУС #4: Достъп до ексклузивна Discord общност</strong> Присъедини се към нашата оживена общност за дискусии, въпроси и мрежа.</li>
                    <li><strong className='pointLi'>БОНУС #5: Сертификати за постижения</strong> Получаваш сертификат за всеки успешно завършен етап от програмата, като мотивираща награда и доказателство за напредъка ти.</li>
                </ul>
            </div>
            <Countdown targetDate={targetDate} headlineText="The event has started!" />
            <button className="signup-button">Регистрирай се сега</button>
        </div>
    );
}
