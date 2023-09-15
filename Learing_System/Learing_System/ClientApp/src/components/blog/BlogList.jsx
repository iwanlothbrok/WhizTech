import React, { useEffect, useState } from "react";
import '../../styles/css/blog.css'
import Pages from "./Pages";
import BlogPost from "./BlogPost";
import blogData from "./blogDb/blogData";
export default function BlogList() {

    const itemsPerPage = 6; // Number of blog posts per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Filter the blog data for the current page
    const currentBlogData = blogData.slice(startIndex, endIndex);

    // Function to handle page navigation
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {currentBlogData.map((blog, index) => (
                    <div key={index} className="col-10 col-md-6 mt-5">
                        <BlogPost blog={blog} />
                    </div>
                ))}
            </div>
            <Pages
                currentPage={currentPage}
                totalPages={Math.ceil(blogData.length / itemsPerPage)}
                onPageChange={handlePageChange}
            />
        </div>


    );
}
