import React from 'react'
import '../../styles/css/feedback.css'

export default function Feedback() {
    return (
        <>

            <form className="containerFeed ">
                <h1 className="heading">Обратна връзка</h1>

                <div className="feedback-msg">
                    <p className="para">
                        What are the main reasons for your rating?
                    </p>
                    <textarea></textarea>
                </div>
                <label className='labelCourse' htmlFor="phone"><strong>ТЕЛ. НОМЕР:</strong></label>
                <input
                    id="phone"
                    className={`inputCourse`}
                    placeholder="+359 88 888 8888"
                    required

                />
                <p className="para">What do you think of the issue search experience within the project?</p>

                <div className="feedback-level">
                    <div className="level">
                        <i className="lar la-sad-tear"></i>
                    </div>
                    <div className="level">
                        <i className="las la-frown"></i>
                    </div>
                    <div className="level">
                        <i className="lar la-meh"></i>
                    </div>
                    <div className="level">
                        <i className="lar la-smile"></i>
                    </div>
                    <div className="level">
                        <i className="lar la-grin"></i>
                    </div>
                </div>



                <div className="btn btn-warning ">
                    <a href="javascript:void(0)" onClick={() => alert('Thanks for submitting your feedback')}>Submit</a>
                </div>
            </form>
        </>
    )
}
