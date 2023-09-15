import React, { useState } from "react";
import SelectedBlog from "./SelectedBlog";
import { Link } from "react-router-dom";

export default function BlogPost({ blog }) {


    return (
        <div className="blog-grid text-white">
            <div className="blog-grid-img position-relative">
                <img alt="img" src={blog.imageSrc} className="img-fluid" />
            </div>
            <div className="blog-grid-text p-4">
                <h3 className="h3 mb-3">
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
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
        </div>
    );
}
