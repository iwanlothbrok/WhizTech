
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPenAlt, faUser, faRocket, faHome, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane as farPaperPlane } from '@fortawesome/free-regular-svg-icons';


export default function AskedQuestions() {

    const questionStyle = {
        color: '#71F483'
    }

    const answerStyle = {
        color: 'white'
    }

    return (
        <section className='m-4'>
            <h3 className="text-center mb-4 pb-2 fw-bold" style={questionStyle}>FAQ</h3>
            <p className="text-center mb-5" style={questionStyle}>
                Find the answers for the most frequently asked questions below
            </p>

            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                    <h6 className="mb-3" style={questionStyle}><FontAwesomeIcon icon={farPaperPlane} style={questionStyle} className="pe-2" /> A simple question?</h6>
                    <p style={answerStyle}>
                        <strong><u>Absolutely!</u></strong> We work with top payment companies which guarantees your safety and security. All billing information is stored on our payment processing partner.
                    </p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                    <h6 className="mb-3" style={questionStyle}><FontAwesomeIcon icon={faPenAlt} className="pe-2" style={questionStyle} /> A question that is longer than the previous one?</h6>
                    <p style={answerStyle}>
                        <strong><u>Yes, it is possible!</u></strong> You can cancel your subscription anytime in your account. Once the subscription is cancelled, you will not be charged next month.
                    </p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                    <h6 className="mb-3" style={{ color: '#71F483' }}><FontAwesomeIcon style={{ color: '#71F483' }} icon={faUser} className="pe-2" /> A simple question?</h6>
                    <p style={answerStyle}>
                        Currently, we only offer monthly subscription. You can upgrade or cancel your monthly account at any time with no further obligation.
                    </p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                    <h6 className="mb-3" style={questionStyle}><FontAwesomeIcon icon={faRocket} style={questionStyle} className="pe-2" /> A simple question?</h6>
                    <p style={answerStyle}>
                        Yes. Go to the billing section of your dashboard and update your payment information.
                    </p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                    <h6 className="mb-3" style={questionStyle}><FontAwesomeIcon icon={faHome} style={questionStyle} className="pe-2" /> A simple question?</h6>
                    <p style={answerStyle}><strong><u>Unfortunately no</u>.</strong> We do not issue full or partial refunds for any reason.</p>
                </div>

                <div className="col-md-6 col-lg-4 mb-4">
                    <h6 className="mb-3" style={questionStyle}><FontAwesomeIcon icon={faBookOpen} style={questionStyle} className="pe-2" /> Another question that is longer than usual</h6>
                    <p style={answerStyle}>
                        Of course! We’re happy to offer a free plan to anyone who wants to try our service.
                    </p>
                </div>
            </div>
        </section>
    );
}