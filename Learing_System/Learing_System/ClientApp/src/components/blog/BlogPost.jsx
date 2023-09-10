import React, { useState } from "react";
import SelectedBlog from "./SelectedBlog";
export default function BlogPost({ blog }) {
    const [selectedBlog, setSelectedBlog] = useState(null);

    const handleTitleClick = (e) => {
        e.preventDefault();
        setSelectedBlog(blog);
    };

    const handleClose = (e) => {
        e.preventDefault();
        setSelectedBlog(null);
    };
    return (
        <div className="blog-grid text-white">
            <div className="blog-grid-img position-relative">
                <img alt="img" src={blog.imageSrc} className="img-fluid" />
            </div>
            <div className="blog-grid-text p-4">
                <h3 className="h3 mb-3">
                    <a href="#!" onClick={handleTitleClick}>{blog.title}</a>
                </h3>
                <p className="display-30">{blog.content}</p>
                <div className="meta meta-style2">
                    <ul>
                        <li>
                            <i className="fas fa-calendar-alt"></i> {blog.date}
                        </li>
                        <li>
                            <i className="fas fa-user"></i> {blog.author}
                        </li>
                    </ul>
                </div>
            </div>
            <SelectedBlog selectedBlog={selectedBlog} onClose={handleClose} />

        </div>
    );
}
