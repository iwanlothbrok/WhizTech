import React from 'react'
import CourseHeader from './CourseHeader'
import Categories from '../home/Categories'
import PopularCourses from './PopularCourses'

const Courses = () => {
    return (
        <div>
            <CourseHeader />
            <Categories />
            <PopularCourses />
        </div>
    )
}

export default Courses
