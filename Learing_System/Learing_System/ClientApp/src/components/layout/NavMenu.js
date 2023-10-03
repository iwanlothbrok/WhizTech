import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import logo from '../../styles/photos/favicon.jpg'
function NavMenu() {
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleWindowSizeChange() {
      const isMobile = window.innerWidth <= 768; // Adjust the threshold as needed
      setIsMobile(isMobile);
    }

    // Add an event listener to check if the screen size changes
    window.addEventListener('resize', handleWindowSizeChange);

    // Check the initial screen size
    handleWindowSizeChange();

    if (window.innerWidth <= 768) {
      setIsContentVisible(false);
      console.log('mob');
    }

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
    console.log('in');
  };
  const onClickHandle = () => scroll.scrollToTop({ duration: 200 })
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-0 sticky-top" style={{ top: 0 }}>
      <div className="container">
  <div className="row align-items-center">
    <div className="col-6 col-lg-3">
      <Link to="/" onClick={onClickHandle} className="navbar-brand d-flex align-items-center">
        <h2 className="m-0 text-alert">
          <img src={logo} alt="Logo" className="navbar-logo m-3" width="70" height="70" />
          Whiz Tech
        </h2>
      </Link>
    </div>
    <div className="col-6 d-lg-none d-flex justify-content-end">
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        onClick={toggleContent}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</div>

      <div className={`collapse content ${isContentVisible ? 'show' : ''}`} >
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="/" className="nav-item nav-link active" onClick={onClickHandle}>
            Начало
          </Link>
          <Link to="/about"
            className="nav-item nav-link"
            onClick={onClickHandle}
            style={{ whiteSpace: 'nowrap' }}>
            За Нас
          </Link>
          <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              onClick={toggleDropdown}
            >
              Уроци
            </Link>
            <div
              className={`dropdown-menu fade-down m-0 ${isOpen ? 'show' : ''}`}
              onClick={toggleDropdown} // Close the dropdown when an item is clicked
            >
              <Link to="/study/csharp" className="dropdown-item" onClick={onClickHandle}>
                C#
              </Link>
              <Link to="/study/cplus" className="dropdown-item" onClick={onClickHandle}>
                C++
              </Link>
              <Link to="/study/javascript" className="dropdown-item" onClick={onClickHandle}>
                JavaScript
              </Link>
              <Link to="/study/java" className="dropdown-item" onClick={onClickHandle}>
                Java
              </Link>
              <Link to="/study/sql" className="dropdown-item" onClick={onClickHandle}>
                SQL
              </Link>
            </div>
          </div>
          <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              onClick={toggleDropdown}
            >
              Задачи
            </Link>
            <div
              className={`dropdown-menu fade-down m-0 ${isOpen ? 'show' : ''}`}
              onClick={toggleDropdown} // Close the dropdown when an item is clicked
            >
              <Link to="/exer/csharp" className="dropdown-item" onClick={onClickHandle}>
                C#
              </Link>
              <Link to="/exer/cplus" className="dropdown-item" onClick={onClickHandle}>
                C++
              </Link>
              <Link to="/exer/javascript" className="dropdown-item" onClick={onClickHandle}>
                JavaScript
              </Link>
              <Link to="/exer/java" className="dropdown-item" onClick={onClickHandle}>
                Java
              </Link>
              <Link to="/exer/sql" className="dropdown-item" onClick={onClickHandle}>
                SQL
              </Link>
            </div>
          </div>
          <Link to="/blog" onClick={onClickHandle} className="nav-item nav-link">
            Блог
          </Link>
          {/* <Link to="/contact" onClick={onClickHandle} className="nav-item nav-link">
            Контакти
          </Link> */}
          {isMobile
            ? (<Link to="/contact" onClick={onClickHandle} className="nav-item nav-link">
              <strong>Контакти</strong>
            </Link>)
            : (<Link
              to="/contact"
              className="btn bg-black text-white px-lg-5 d-none d-lg-block text-center" // Add "text-center" class here
              onClick={onClickHandle}
            >
              <p className="mt-2" style={{ fontSize: '20px' }}>Контакти</p> {/* Add classes for centering and font size */}
            </Link>)}
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
