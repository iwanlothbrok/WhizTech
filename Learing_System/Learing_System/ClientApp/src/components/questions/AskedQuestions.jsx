import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faList, faCoins, faRocket, faBookOpen, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function AskedQuestions() {
    const questionStyle = {
        color: '#71F483',
        fontSize: '28px', // Increased font size for better readability
    };

    const answerStyle = {
        color: 'white',
        fontSize: '20px',
    };

    return (
        <section className="m-5">
            <div className="text-center wow animate__fadeInUp" data-wow-delay="0.1s">
                <h2 className="mb-5 text-white">ЧЕСТО ЗАДАВАНИ ВЪПРОСИ</h2>
            </div>

            <div className="row mt-2">
                <div className="col-md-6 col-lg-4 mb-5 question photo hidden wow animate__fadeInLeft" data-wow-delay="0.1s">
                    <h4 className="mb-3" style={questionStyle}>
                        <FontAwesomeIcon icon={faBookOpen} className="pe-2" />
                        Как се провеждат уроците?
                    </h4>
                    <p style={answerStyle}>
                        Уроците се провеждат изцяло онлайн чрез виртуална платформа. Лекторът може да сподели екран и да вземе дистанционен достъп до компютъра на ученика.
                    </p>
                </div>
                <div className="col-md-6 col-lg-4 mb-5 question hidden wow animate__fadeInRight" data-wow-delay="0.2s">
                    <h4 className="mb-3" style={questionStyle}>
                        <FontAwesomeIcon icon={faClock} className="pe-2" />
                        Колко време е един урок?
                    </h4>
                    <p style={answerStyle}>
                        Един урок продължава 60 минути – оптималното време за ефективно представяне на материала.
                    </p>
                </div>
                <div className="col-md-6 col-lg-4 mb-5 question hidden wow animate__fadeInLeft" data-wow-delay="0.3s">
                    <h4 className="mb-3" style={questionStyle}>
                        <FontAwesomeIcon icon={faRocket} className="pe-2" />
                        Какви технологии преподавате?
                    </h4>
                    <p style={answerStyle}>
                        Нашите ментори за специализирани в C#, Java и JavaScript.
                    </p>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 question hidden wow animate__fadeInRight" data-wow-delay="0.4s">
                    <h4 className="mb-3" style={questionStyle}>
                        <FontAwesomeIcon icon={faPaperPlane} className="pe-2" />
                        Как да се свържем с вас?
                    </h4>
                    <p style={answerStyle}>
                        Можете да ни изпратите имейл или да ни се обадите на +359 88 904 4614. Запазете час за урок <Link to="/calendar" className="link" style={{ color: '#71F483' }}>ТУК</Link>.
                    </p>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 question hidden wow animate__fadeInLeft" data-wow-delay="0.5s">
                    <h4 className="mb-3" style={questionStyle}>
                        <FontAwesomeIcon icon={faList} className="pe-2" />
                        Какви са изискванията за участие в уроците?
                    </h4>
                    <p style={answerStyle}>
                        Нужен ви е компютър или лаптоп с интернет връзка. Някои уроци може да изискват специфичен софтуер.
                    </p>
                </div>
                <div className="col-md-6 col-lg-4 mb-4 question hidden wow animate__fadeInRight" data-wow-delay="0.6s">
                    <h4 className="mb-3" style={questionStyle}>
                        <FontAwesomeIcon icon={faCoins} className="pe-2" />
                        Какви са начините на плащане?
                    </h4>
                    <p style={answerStyle}>
                        Приемаме плащания чрез PayPal, EasyPay, ePay и банков превод.
                    </p>
                </div>
            </div>
        </section>
    );
}
