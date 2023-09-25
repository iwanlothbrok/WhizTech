import React, { useEffect, useState } from "react";

import blogData from "./blogDb/blogData";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function SelectedBlog() {
  const history = useNavigate();

  const [blog, setBlog] = useState({});
  const { blogId } = useParams();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const selected = blogData.find((b) => b.id === parseInt(blogId, 10));
    console.log(selected);

    if (selected === undefined) {
      console.log('inside');
      history('/error'); // Redirect to the /blog route
    }
    if (selected) {
      setBlog(selected);
    }
  }, [blogId])


  useEffect(() => {
    function handleWindowSizeChange() {
      const isMobile = window.innerWidth <= 768; // Adjust the threshold as needed
      setIsMobile(isMobile);
    }

    // Add an event listener to check if the screen size changes
    window.addEventListener('resize', handleWindowSizeChange);

    // Check the initial screen size
    handleWindowSizeChange();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);


  const questionStyle = {
    color: '#71F483'
  }
  const answerStyle = {
    fontSize: isMobile ? '16px' : '20px'
  }


  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <Link to="/blog" className="btn btn-primary mb-4">
            <i className="fa fa-arrow-left" aria-hidden="true"></i> Назад
          </Link>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="blog-grid-img position-relative img-cover-container">
              <img alt="img" src={blog.imageSrc} className="img-fluid img-cover" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="selected-blog text-white">
              <h1 className="display-4" style={questionStyle}>{blog.title}</h1>
              <p style={answerStyle}>{blog.content}</p>


              <div className="blog-question">
                <h2 style={questionStyle} >{blog.firstQuestion}</h2>
                <p style={answerStyle}>{blog.firstParagraph}</p>
              </div>

              <div className="blog-question">
                <h2 style={questionStyle} >{blog.secondQuestion}</h2>

                <p style={answerStyle}>{blog.secondParagraph}</p>
              </div>

              <div className="blog-question">
                <h2 style={questionStyle} >{blog.thirdQuestion}</h2>

                <p style={answerStyle}>{blog.thirdParagraph}</p>
              </div>
              <div className="blog-question">
                <h2 style={questionStyle} >{blog.conclusionTitle}</h2>

                <p style={answerStyle}>{blog.conclusionParagraph}</p>
              </div>


            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
