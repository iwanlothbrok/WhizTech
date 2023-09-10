import React, { useState } from "react";
import '../../styles/css/blog.css'
import Pages from "./Pages";
import BlogPost from "./BlogPost";
export default function BlogList() {

    const blogData = [
        {
            title: "1",
            imageSrc: "https://www.bootdey.com/image/480x480/00FFFF/000000",
            content: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            date: `10 Jul, ${new Date().getFullYear()}`,
            author: "User",
        },
        {
            title: "2Business tool for your customer",
            imageSrc: "https://www.bootdey.com/image/480x480/00FFFF/000000",
            content: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            date: `10 Jul, ${new Date().getFullYear()}`,
            author: "User",
        },
        {
            title: "3Business tool for your customer",
            imageSrc: "https://www.bootdey.com/image/480x480/00FFFF/000000",
            content: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            date: `10 Jul, ${new Date().getFullYear()}`,
            author: "User",
        },
        {
            title: "4Business tool for your customer",
            imageSrc: "https://www.bootdey.com/image/480x480/00FFFF/000000",
            content: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            date: `10 Jul, ${new Date().getFullYear()}`,
            author: "User",
        },
        {
            title: "5Business tool for your customer",
            imageSrc: "https://www.bootdey.com/image/480x480/00FFFF/000000",
            content: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            date: `10 Jul, ${new Date().getFullYear()}`,
            author: "User",
        },
        {
            title: "6Business tool for your customer",
            imageSrc: "https://www.bootdey.com/image/480x480/00FFFF/000000",
            content: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            date: `10 Jul, ${new Date().getFullYear()}`,
            author: "User",
        },
        {
            title: "7Business tool for your customer",
            imageSrc: "https://www.bootdey.com/image/480x480/00FFFF/000000",
            content: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            date: `10 Jul, ${new Date().getFullYear()}`,
            author: "User",
        },
        {
            title: "8Business tool for your customer",
            imageSrc: "https://www.bootdey.com/image/480x480/00FFFF/000000",
            content: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
            date: `10 Jul, ${new Date().getFullYear()}`,
            author: "User",
        },
        // Add more blog data objects for other blog posts
    ];


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
