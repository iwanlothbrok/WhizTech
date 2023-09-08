import React from "react";

export default function BlogPost({ blog }) {
    return (
        <div className="col-md-6 col-lg-4 mt-5 wow fadeInUp">
            <div className="blog-grid">
                <div className="blog-grid-img position-relative">
                    <img alt="img" src={blog.imageSrc} />
                </div>
                <div className="blog-grid-text p-4">
                    <h3 className="h5 mb-3">
                        <a href="#!">{blog.title}</a>
                    </h3>
                    <p className="display-30">{blog.content}</p>
                    <div className="meta meta-style2">
                        <ul>
                            <li>
                                <a href="#!">
                                    <i className="fas fa-calendar-alt"></i> {blog.date}
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fas fa-user"></i> {blog.author}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
