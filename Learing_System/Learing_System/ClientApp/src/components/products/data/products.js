// data.js
import bookCover from '../../../styles/photos/bookCover.png'
import courseCover from '../../../styles/photos/course-banner.png'

const products = [
    {
        id: 1,
        title: "Effective JavaScript Techniques",
        description: "Explore advanced JavaScript techniques and best practices to enhance your coding skills and improve your web development projects.",
        price: 15.99,
        skills: [
            "Asynchronous Programming",
            "Error Handling",
            "Functional Programming"
        ],
        categories: [
            "Programming",
            "Web Development",
            "Educational"
        ],
        bookCover: bookCover,

    },
    {
        id: 2,
        bookCover: courseCover,
        title: 'Fancy Product 2',
        priceRange: '$50.00 - $90.00'
    },
    {
        id: 3,
        bookCover: 'cover3.jpg',
        title: 'Fancy Product 3',
        priceRange: '$60.00 - $100.00'
    }
];

export default products;
