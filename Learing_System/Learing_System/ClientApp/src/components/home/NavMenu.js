import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";

function NavMenu() {
  const [isContentVisible, setIsContentVisible] = useState(true);


  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  const handleNavClick = (targetId) => {
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }
  };



  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-0 sticky-top" style={{ top: 0 }}>
      <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <h2 className="m-0 text-primary">
          <i className="fa fa-book me-3"></i>eLEARNING
        </h2>
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        onClick={toggleContent}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse content ${isContentVisible ? 'show' : ''}`} >
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="/" className="nav-item nav-link active" onClick={() => scroll.scrollToTop({ duration: 200 })}>
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link" onClick={() => scroll.scrollToTop({ duration: 200 })}>
            About
          </Link>
          <Link to="/courses" className="nav-item nav-link">
            Courses
          </Link>
          <div className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              Exercises
            </Link>
            <div className="dropdown-menu fade-down m-0">
              <Link to="/exer/CSharp" onClick={() => scroll.scrollToTop({ duration: 200 })} language={'C#'} className="dropdown-item">
                C#
              </Link>
              <Link to="/exer/CSharp" onClick={() => scroll.scrollToTop({ duration: 200 })} language={'C++'} className="dropdown-item">
                C++
              </Link>
              <Link to="/exer/JavaScript" onClick={() => scroll.scrollToTop({ duration: 200 })} smooth={true} language={'JavaScript'} className="dropdown-item">
                JavaScript
              </Link>
              <Link to="/exer/SQL" onClick={() => scroll.scrollToTop({ duration: 200 })} smooth={true} language={'SQL'} className="dropdown-item">
                SQL
              </Link>
            </div>
          </div>
          <Link to="/contact" onClick={() => scroll.scrollToTop({ duration: 200 })} className="nav-item nav-link">
            Contact
          </Link>
          <Link
            to="/contact"
            className="btn btn-primary py-4 px-lg-5 d-none d-lg-block m-0"
            style={{
              justifyContent: "center",
            }}
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
