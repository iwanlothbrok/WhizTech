import React from 'react'
import '../../styles/css/feedback.css'

export default function Feedback() {
    return (
        <>

            <form className="containerFeed mb-5">
                <h1 className="heading fw-bold">Обратна връзка</h1>

                <label className='labelCourse mb-0' htmlFor="name"><strong>Две имена</strong></label>
                <input
                    id="name"
                    className={`inputCourse`}
                    placeholder="Иван Иванов"
                    required

                />
                <label className='labelCourse mb-0' htmlFor="newThings"><strong>Какво научи?</strong></label>
                <input
                    id="newThings"
                    className={`inputCourse`}
                    placeholder="Днес преминахме през променливи..."
                    required

                />
                <label className='labelCourse mb-0' ><strong>Каква е твоята оценка на урока?</strong></label>

                <div className="feedback-level mt-0">
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
                    <a href="javascript:void(0)" onClick={() => alert('Thanks for submitting your feedback')}>Изпрати</a>
                </div>
            </form>
        </>
    )
}
