import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import logo from '../../styles/whiteLogo.png'
function NavMenu() {
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  const onClickHandle = () => scroll.scrollToTop({ duration: 200 })
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-0 sticky-top" style={{ top: 0 }}>
      <Link to="/" onClick={onClickHandle} className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <h2 className="m-0 text-alert">
          <img src={logo} alt="Logo" className="navbar-logo mb-3" />
          Whiz Tech
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
          <Link to="/contact" onClick={onClickHandle} className="nav-item nav-link">
            Контакти
          </Link>
          <Link
            to="/contact"
            className="btn bg-black text-white px-lg-5 d-none d-lg-block m-2"
            onClick={onClickHandle}
          >
            JOIN
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
