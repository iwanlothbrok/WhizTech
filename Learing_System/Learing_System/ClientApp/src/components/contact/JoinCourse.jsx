import React from 'react'
import '../../styles/css/joinCourse.css'
export default function JoinCourse() {
    // const formCss = {
    //     width: '340px',
    //     height: '440px',
    //     background: '#e6e6e6',
    //     borderRadius: '8px',
    //     boxShadow: '0 0 40px - 10px #000',
    //     margin: 'calc(50vh - 220px) auto',
    //     padding: '20px 30px',
    //     maxWidth: 'calc(100vw - 40px)',
    //     boxSizing: 'border - box',
    //     position: 'relative'
    // }
    return (
        <div>
            <form className='formCourse'>

                <h2 className='joinOurCourse'>CONTACT US</h2>
                <label className='labelCourse' type="Name:"><input className='inputCourse' placeholder="Write your name here.."></input></label>
                <label className='labelCourse' type="Email:"><input className='inputCourse' placeholder="Let us know how to contact you back.."></input></label>
                <label className='labelCourse' type="Message:"><input className='inputCourse' placeholder="What would you like to tell us.."></input></label>
                <button className='joinBtn m-5'>Send Message</button>
                <div className='iconsDiv'>
                    <span class="fa fa-phone icon"></span>001 1023 567
                    <span class="fa fa-envelope-o icon"></span> contact@company.com
                </div>
            </form>
        </div>
    )
}
