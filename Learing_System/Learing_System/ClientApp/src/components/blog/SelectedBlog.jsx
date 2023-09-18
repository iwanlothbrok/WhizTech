import React, { useEffect, useState } from "react";

import blogData from "./blogDb/blogData";
import { Link, useParams } from "react-router-dom";
export default function SelectedBlog() {

  const [blog, setBlog] = useState({});
  const { blogId } = useParams();

  // you should get all blogs from our fake db and should select the needed one with filter or other function 
  useEffect(() => {

    const selected = blogData.find((b) => b.id === parseInt(blogId, 10));

    if (selected) {
      setBlog(selected);
    } else {
      // Handle the case where no blog post with the specified id was found
      // You can redirect to an error page or display a message here
    }

  },
    [blogId]);
  //const blog = blogs.find((blog) => blog.id === blogId);
  console.log(blogId);
  console.log(blog);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <Link to="/blog" className="btn btn-primary mb-4">
            <i className="fa fa-arrow-left" aria-hidden="true"></i> Назад
          </Link>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-6">
          <div className="blog-grid-img position-relative">
            <img alt="img" src={blog.imageSrc} className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="selected-blog text-white">
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>

            {/* <h2>{blog.totalInformation.firstTitle}</h2>
            <h4>{blog.totalInformation.firstParagraph}</h4> */}
          </div>
        </div>
      </div>
    </div>
  );
}
