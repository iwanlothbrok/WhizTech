
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faList, faMoneyCheck, faCoins, faRocket, faHome, faBookOpen, faClock, faComputer } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function AskedQuestions() {

    const questionStyle = {
        color: '#71F483',
        fontSize: '25px',

    }

    const divStyle = {
        margin: '10px'
    }
    const answerStyle = {
        color: 'white',
        fontSize: '20px'
    }

    return (
        <section className='m-5'>
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h2 className="mb-5 text-white">Често задавани въпроси</h2>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-5 question photo hidden">
                    <h6 className="mb-3" style={questionStyle}><FontAwesomeIcon icon={faBookOpen} style={questionStyle} className="pe-2" />Как се провеждат уроците?</h6>
                    <p style={answerStyle}>
                        Уроците се провеждат изцяло онлайн. Лекторът и ученикът се свързват чрез интернет, обикновено чрез виртуална
                        платформа за срещи. Лекторът може да сподели своя екран и дори да вземе дистанционен достъп до компютъра на
                        ученика, което позволява на тях да работят заедно по учебния материал. Този подход прави учебния процес
                        достъпен и удобен.
                    </p>
                </div>
                <div className="col-md-6 col-lg-4 mb-5 question hidden">
                    <h6 className="mb-3" style={questionStyle}><FontAwesomeIcon icon={faClock} className="pe-2" style={questionStyle} /> Колко време е един урок?</h6>
                    <p style={answerStyle}>
                        Един урок продължава 60 минути, което е оптималното време, което сме установили
                        чрез нашия опит с ученици и студенти.
                        Този период от време ни позволява да представим материала ефективно и да поддържаме вниманието на обучаемия.
                    </p>
                </div>
                <div className="col-md-6 col-lg-4 mb-5 question hidden">
                    <h6 className="mb-3" style={questionStyle} ><FontAwesomeIcon style={questionStyle} icon={faRocket} className="pe-2" />Kакви технологии преподавате?</h6>
                    <p style={answerStyle}>
                        Преподаваме разнообразни технологии в две основни области: front-end и back-end. <br />

                        Front-End технологии: <br />

                        React,
                        HTML (HyperText Markup Language),
                        CSS (Cascading Style Sheets),
                        JavaScript,
                        Bootstrap<br />

                        Back-end технологии: <br />
                        C#,
                        Java,
                        C++,
                        C,
                        SQL,
                        Node.js
                    </p>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 question hidden">
                    <h6 className="mb-3" style={questionStyle}><FontAwesomeIcon icon={faPaperPlane} style={questionStyle} className="pe-2" /> Как да се свържем с Вас?</h6>
                    <p style={answerStyle}>
                        Можете да се свържете с нас чрез изпращане на имейл в секция "Контакти" в сайта, да ни се обадите на <strong>+359 88 904 4614</strong>. <br />Или запазете час за урок на момента {' '}
                        <Link to="/calendar" className="link" style={{ color: '#71F483' }}>ТУК</Link>.
                    </p>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 question hidden">
                    <h6 className="mb-3" style={questionStyle}><FontAwesomeIcon icon={faList} style={questionStyle} className="pe-2" /> Какви са изискванията за участие в уроците?</h6>
                    <p style={answerStyle}>
                        За участие в уроците ви е необходим компютър или лаптоп с интернет връзка. Определени уроци може да изискват инсталиране на специфичен софтуер, който ще бъде предоставен предварително.                    </p>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 question hidden">
                    <h6 className="mb-3" style={questionStyle}><FontAwesomeIcon icon={faCoins} style={questionStyle} className="pe-2" /> Какви са начините на плащане?</h6>
                    <p style={answerStyle}>
                        Приемаме плащания чрез PayPal, EasyPay, ePay и Банков превод.

                    </p>
                </div>
            </div>
        </section >
    );
}