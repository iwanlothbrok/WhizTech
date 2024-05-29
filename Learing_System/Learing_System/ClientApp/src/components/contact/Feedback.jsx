import React, { useState, useEffect } from 'react';
import '../../styles/css/feedback.css';
import { feedbackSubmitHandle } from '../../firebaseConfig'
export default function Feedback() {
    const [formData, setFormData] = useState({
        fullName: '',
        newThings: '',
        mentorFeedback: '',
        feedbackLevel: '',
    });

    const [successMessageVisible, setSuccessMessageVisible] = useState(false);
    const [error, setError] = useState('');
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

    useEffect(() => {
        if (successMessageVisible) {
            setTimeout(() => {
                setSuccessMessageVisible(false);
            }, 5000);
        }
    }, [successMessageVisible]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitButtonClicked(true);

        if (formData.fullName && formData.newThings && formData.feedbackLevel) {

            const result = await feedbackSubmitHandle(formData);

            if (result.success) {
                setFormData({
                    fullName: '',
                    newThings: '',
                    mentorFeedback: '',
                    feedbackLevel: ''
                });

                setSuccessMessageVisible(true);
                setError('');
                setSubmitButtonClicked(false);

            } else {
                setError('Моля, попълнете всички полета!');
            }
        }
    };

    const handleFeedbackLevelChange = (level) => {
        setFormData({
            ...formData,
            feedbackLevel: level
        });
    };

    return (
        <>
            <form className="containerFeed mb-5" onSubmit={handleSubmit}>
                {successMessageVisible && error === '' && (
                    <div className="alert alert-success mb-0" role="alert">
                        Успешно изпратена обратна връзка!
                    </div>
                )}
                {error && submitButtonClicked && (
                    <div className="alert alert-danger mb-0" role="alert">
                        {error}
                    </div>
                )}
                <h1 className="heading fw-bold text-danger" style={{ fontSize: '24px' }}>Обратна връзка</h1>


                <label className='labelCourse mb-0' htmlFor="name"><strong>Две имена</strong></label>
                <input
                    id="name"
                    className='inputCourse'
                    placeholder="Иван Иванов"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                />

                <label className='labelCourse mb-0' htmlFor="newThings"><strong>Какво научи?</strong></label>
                <textarea
                    id="newThings"
                    className='inputCourse h-100'
                    placeholder="Днес преминахме през променливи..."
                    value={formData.newThings}
                    onChange={(e) => setFormData({ ...formData, newThings: e.target.value })}
                    required
                    rows="1"
                />


                <label className='labelCourse mb-0' htmlFor="mentorFeedback"><strong>Как се справи твоят ментор?</strong></label>
                <textarea
                    id="mentorFeedback"
                    className='inputCourse h-100'
                    placeholder="Менторът ми..."
                    value={formData.mentorFeedback}
                    onChange={(e) => setFormData({ ...formData, mentorFeedback: e.target.value })}
                    required
                    rows="1"
                />


                <label className='labelCourse mb-0'><strong>Каква е твоята оценка на урока?</strong></label>
                <div className="feedback-level mt-0">
                    <div
                        className={`level ${formData.feedbackLevel === 'sad' ? 'selected' : ''}`}
                        onClick={() => handleFeedbackLevelChange('sad')}
                    >
                        <i className="lar la-sad-tear"></i>
                    </div>
                    <div
                        className={`level ${formData.feedbackLevel === 'frown' ? 'selected' : ''}`}
                        onClick={() => handleFeedbackLevelChange('frown')}
                    >
                        <i className="las la-frown"></i>
                    </div>
                    <div
                        className={`level ${formData.feedbackLevel === 'meh' ? 'selected' : ''}`}
                        onClick={() => handleFeedbackLevelChange('meh')}
                    >
                        <i className="lar la-meh"></i>
                    </div>
                    <div
                        className={`level ${formData.feedbackLevel === 'smile' ? 'selected' : ''}`}
                        onClick={() => handleFeedbackLevelChange('smile')}
                    >
                        <i className="lar la-smile"></i>
                    </div>
                    <div
                        className={`level ${formData.feedbackLevel === 'grin' ? 'selected' : ''}`}
                        onClick={() => handleFeedbackLevelChange('grin')}
                    >
                        <i className="lar la-grin"></i>
                    </div>
                </div>

                <button className="btn btn-danger" type="submit">Изпрати</button>
            </form>
        </>
    );
}
