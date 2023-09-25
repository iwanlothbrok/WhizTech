import React from "react";
import { Link } from "react-router-dom";

export default function BlogPost({ blog }) {
    return (
        <div className="blog-grid text-white">
            <div className="blog-grid-img position-relative">
                <img alt="img" src={blog.imageSrc} className="img-fluid" />
            </div>
            <div className="blog-grid-text p-4">
                <h3 className="h2 mb-3" >
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                </h3>
                <p style={{ fontSize: '20px' }}>{blog.content}</p>
                <div className="meta meta-style2 d-flex flex-column justify-content-end">
                    <ul>
                        <li style={{ fontSize: '15px' }}>
                            <i className="fas fa-calendar-alt"></i> {blog.date}
                        </li>
                        <li style={{ fontSize: '15px' }}>
                            <i className="fas fa-user"></i> {blog.author}
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
