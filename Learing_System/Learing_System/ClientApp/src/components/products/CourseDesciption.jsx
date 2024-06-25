// src/components/CourseDescription.js
import React from 'react';

export default function CourseDescription() {
    return (
        <div className="bootcamp-description text-white">
            <h1 className='headersPrices'>Започнете със C# и създайте първия си проект с нашите насоки</h1>

            <div className="bootcamp-section">
                <h3 className='headersPrices'>Началото на вашето пътуване към програмирането</h3>
                <p className='textPrices'>
                    Присъединете се към нашия <strong className='strongTextPrices'>интензивен 3-седмичен курс по C#</strong> "Първи стъпки в кодирането", предназначен за начинаещи в програмирането.
                    С <strong className='strongTextPrices'>3 сесии на седмица</strong> бързо ще усвоите основните елементи на програмирането на C# - от създаването на среда за разработка до овладяването на потока на управление, циклите и методите.
                    Този курс е вашият вход към света на програмирането.
                </p>
            </div>

            <div className="bootcamp-section">
                <h3 className='headersPrices'>Практическо обучение и подкрепа</h3>
                <p className='textPrices'>
                    Нашият курс предлага <strong className='strongTextPrices'>практическо обучение</strong> с практически упражнения, сесии с въпроси и отговори и презентации на проекти на живо. Ще имате достъп до записани лекции,
                    нашия ексклузивен <strong className='strongTextPrices'>електронен наръчник</strong> и подкрепяща общност в Discord.
                    Възползвайте се от експертните насоки и съвместното обучение, за да повишите увереността си в кодирането.
                </p>
            </div>

            <div className="bootcamp-section">
                <h3 className='headersPrices'>Специални оферти и истории на успеха</h3>
                <p className='textPrices'>
                    Възползвайте се от нашите <strong className='strongTextPrices'>оферти с ограничено времетраене</strong>: за първите 24 часа се запишете на цена
                    <span className="original-price">597 USD</span> <span className="discounted-price">197 USD</span> (намалена от 597 USD),
                    а за следващите 36 часа - на цена 297 USD. Постигнете оценка 4,5 или по-висока на финалния изпит за отстъпка от цената на следващия курс.
                    Чуйте от нашите успешни възпитаници, като 10 ученици, които са усвоили методите само за 5 урока.
                    Започнете своето пътешествие в програмирането с нас и изградете практически умения още от първия ден!
                </p>
            </div>

            <button className="signup-button">Запиши се СЕГА</button>
        </div>
    );
}