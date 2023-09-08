import React from "react";
import '../../styles/css/blog.css';
import { animateScroll as scroll } from "react-scroll";


export default function Pages({ currentPage, totalPages, onPageChange }) {
    return (
        <div className="row mt-6 wow fadeInUp">
            <div className="col-12">
                <div className="pagination text-small text-uppercase text-extra-dark-gray">
                    <ul>
                        {currentPage > 1 && (
                            <li>
                                <a
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent the default anchor link behavior
                                        onPageChange(currentPage - 1);
                                        scroll.scrollToTop({ duration: 200 })
                                    }}                                >
                                    <i className="fas fa-long-arrow-alt-left me-1 d-none d-sm-inline-block"></i>{" "}
                                    Предишна
                                </a>
                            </li>
                        )}
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li
                                key={index}
                                className={currentPage === index + 1 ? "active" : ""}
                            >
                                <a href="#!" onClick={(e) => {
                                    e.preventDefault(); // Prevent the default anchor link behavior
                                    onPageChange(index + 1);
                                    scroll.scrollToTop({ duration: 200 })
                                }}>
                                    {index + 1}
                                </a>
                            </li>
                        ))}
                        {currentPage < totalPages && (
                            <li>
                                <a
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent the default anchor link behavior
                                        onPageChange(currentPage + 1);
                                        scroll.scrollToTop({ duration: 200 })
                                    }}
                                >
                                    Следваща{" "}
                                    <i className="fas fa-long-arrow-alt-right ms-1 d-none d-sm-inline-block"></i>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
