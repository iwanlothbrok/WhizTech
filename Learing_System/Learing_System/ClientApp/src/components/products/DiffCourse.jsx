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
                    Искате да се потопите в програмирането и да усвоите основите на C# само за три седмици? С нашия курс ще направиете първата и най-важна крачка в света на програмирането.
                    С нашите интензивни сесии ще научите как да създадете първия си проект бързо и ефективно.

                    <ul className='bonuses-list mt-2'>
                        <li><strong>Малка група, личен път:</strong> Получавате почти индивидуално внимание в нашите малки групи, което Ви гарантира, че ще получите напътствията, от които се нуждаете.</li>
                        <li><strong>Сесии на живо в Discord:</strong> Присъединете се към интерактивни сесии на живо чрез Discord за динамично и съвместно обучение.</li>
                        <li><strong>Инструктори експерти:</strong> Нашите инструктори са професионалисти с богат опит в C# разработката и са готови да споделят своите знания и умения с вас.</li>
                        <li><strong>Обратна връзка:</strong> Получавайте редовна и конструктивна обратна връзка за вашия код и проекти, за да се усъвършенствате постоянно.</li>
                    </ul>
                </p>
            </div>

            <div className="funnel-section">
                <h3 className='header-secondary'>Какво ще научиш?</h3>
                <p className='body-text'>
                    До края на курса ще имате уменията да се задълбочите в C# разработката:
                    <ul className='bonuses-list mt-2'>
                        <li><strong>Писане на код на C#:</strong> Усвоете синтаксиса и структурата на C#.</li>
                        <li><strong>Създаване на проекти от нулата:</strong> Изградете свои собствени приложения от самото начало.</li>
                        <li><strong> Използване на основни и напреднали функции:</strong> Прилагайте както основни, така и напреднали функции на C#.</li>
                        <li><strong>Самостоятелно решаване на проблеми:</strong> Развийте умения за решаване на задачи и предизвикателства в програмирането.</li>
                        <li><strong>   Задълбочаване в C#:</strong> Придобийте основата, необходима за изследване на по-сложни теми и проекти в C#.</li>
                    </ul>
                </p>
            </div>
            <div className="funnel-section">
                <h3 className='header-secondary'>Основни моменти от курса:</h3>
                <p className='body-text'>
                    <ul className='bonuses-list mt-2'>
                        <li><strong>Продължителност:</strong> Интензивна 3-седмична програма със структуриран график.</li>
                        <li><strong>Начална дата:</strong> Курсът започва на 8-ми юли.</li>
                        <li><strong> Интензивно обучение:</strong> Три сесии на живо седмично, плюс задания и проекти за затвърждаване на знанията.</li>
                        <li><strong>Експертни инструктори:</strong> Учете се от професионалисти с години опит в C# разработката.</li>
                        <li><strong>Практически проекти:</strong> Работете върху реални проекти, за да приложите наученото незабавно.</li>
                    </ul>
                </p>
            </div>
            <div className="funnel-section">
                <h3 className='header-secondary'>Бонуси!</h3>
                <ul className='bonuses-list'>
                    <li><strong>Безплатна електронна книга:</strong> Получете обширна електронна книга на стойност 25 лв., пълна с допълнителни ресурси и упражнения.</li>
                    <li><strong>Записани лекции:</strong> Достъп до всички записани сесии за преглед по всяко време.</li>
                    <li><strong>Ексклузивна менторска програма: </strong>  Спечелете възможност за работа един-на-един с ментор, получавайки персонализирани напътствия и подкрепа.</li>
                    <li><strong>Активна Discord общност:</strong> Присъединете се към нашата оживена общност за помощ и мрежа.</li>
                    <li><strong>Отстъпки за курсове:</strong> Оценка над 4.5 на финалния изпит Ви дава 15% отстъпка за следващия курс. Оценка 6.00 Ви дава 30% отстъпка.</li>
                </ul>
            </div>
        </div>
    );
}
