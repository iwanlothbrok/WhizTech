import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

export default function BlogPost({ blog }) {
    const onClickHandle = () => scroll.scrollToTop({ duration: 200 })

    return (
        <div className="blog-grid text-white">
            <div className="blog-grid-img position-relative">
                <Link onClick={onClickHandle} to={`/blog/${blog.id}`}>
                    <img alt="img" src={blog.imageSrc} className="img-fluid" />
                </Link>
            </div>
            <div className="blog-grid-text p-4">
                <h3 className="h2 mb-3" >
                    <Link onClick={onClickHandle} to={`/blog/${blog.id}`}>{blog.title}</Link>
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
