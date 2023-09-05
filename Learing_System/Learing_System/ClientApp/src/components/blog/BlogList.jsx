import React from "react";
import '../../styles/css/blog.css'
import Pages from "./Pages";
export default function BlogList() {
    return (
        <div className="container m-5">
            <div className="row mt-n5">
                <div
                    className="col-md-6 col-lg-4 mt-5 wow fadeInUp"
                    data-wow-delay=".2s"
                    style={{
                        visibility: "visible",
                        animationDelay: "0.2s",
                        animationName: "fadeInUp",
                    }}
                >
                    <div className="blog-grid">
                        <div className="blog-grid-img position-relative">
                            <img
                                alt="img"
                                src="https://www.bootdey.com/image/480x480/00FFFF/000000"
                            />
                        </div>
                        <div className="blog-grid-text p-4">
                            <h3 className="h5 mb-3">
                                <a href="#!">Business tool for your customer</a>
                            </h3>
                            <p className="display-30">
                                Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                            </p>
                            <div className="meta meta-style2">
                                <ul>
                                    <li>
                                        <a href="#!">
                                            <i className="fas fa-calendar-alt"></i> 10 Jul, {new Date().getFullYear()}2022
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i className="fas fa-user"></i> User
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!">
                                            <i className="fas fa-comments"></i> 38
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Pages />   
        </div>

    );
}
