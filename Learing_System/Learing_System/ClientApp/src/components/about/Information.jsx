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
                                <li><strong>Recipe for Fun:</strong> Our secret ingredient? Fun! We've cooked up a curriculum that's tastier than your favorite snack. No dull lectures here—just interactive lessons that'll have you itching to write code even in your sleep (we don't recommend that, though).</li>
                                <li><strong>Your Learning, Your Way:</strong> Whether you're a coding sprinter or a leisurely learner, we've got a pace that suits you. Think of us as your GPS through the coding labyrinth, helping you find the best path to success.</li>
                                <li><strong>Success Stories, Not Tall Tales:</strong> We're not here to tell you wild tales of code conquests; we're here to show you real success stories. From newbie coders to full-fledged developers, our students have journeyed from "Hello World" to "Hello Job Offers!"</li>
                                <li><strong>Geek Meets Chic:</strong> We're not just about algorithms and syntax; we're about bringing a touch of geeky coolness to your coding journey. Learning with us is like joining a secret club where coding is the password.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Information;
