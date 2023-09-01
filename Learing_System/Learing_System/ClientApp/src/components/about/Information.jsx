import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router for navigation

const Information = () => {
    return (
        <div className="container mt-5 text-white">
            <div className="row">
                {/* Column 1 */}
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2 className="card-title">What is our mission?</h2>
                            <p className="card-text">
                                Hey there, fellow future code maestro! At WhizTech, our mission is to make coding feel like unlocking a treasure chest of digital wonders. We're on a quest to turn "What's a variable?" into "Check out my awesome app!" With languages like C#, JavaScript, C++, SQL, and more in our teaching toolkit, we're here to guide you through the coding jungle and help you emerge victorious.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2 className="card-title">Who are we?</h2>
                            <p className="card-text">
                                Meet the WhizTech crew—your friendly neighborhood code mentors! We're the kind of folks who'd have a coding contest over a pizza party. But don't worry, we won't challenge you to a debugging duel (unless you're up for it!). We're a bunch of programming pros and enthusiasts, ready to share our love for code and help you reach those "Aha!" moments.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h2 className="card-title">Why can we teach you or your kids?</h2>
                            <p className="card-text">
                                Get ready for the lowdown on why you've got the best coding buddies in town:</p>
                            <ul className="card-text">
                                <li><strong>Code Whisperers:</strong> We don't just speak code; we whisper it. Our team has tamed the wildest bugs and crafted elegant solutions. If coding were a game, we'd be the seasoned players, here to guide you to the high-score zone.</li>
                                <li><strong>Recipe for Fun:</strong> Our secret ingredient?  recommend that, though).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Information;
