import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PopularCourses = () => {
  const url = 'https://localhost:7089/api/courses/';
  const [courses, setCourses] = useState([]);

  // Fetch courses from the API using Axios
  const fetchCoursesFromAPI = async () => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint to fetch courses
      const response = await axios.get(url);
      console.log(response.data);
      const data = response.data;
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    fetchCoursesFromAPI();
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
          <h1 className="mb-5">Newest Courses</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {courses.map((course) => (
            <div key={course.Id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src="img/course-1.jpg" alt="" />
                  <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                    <Link to={`/course/${course.id}`} className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>
                      Read More
                    </Link>
                    <Link to={`/contact`} className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>
                      Join Now
                    </Link>
                  </div>
                </div>
                <div className="text-center p-4 pb-0">
                  <h3 className="mb-0">${course.Price}</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    {/* WHAT IS THIS!!!!! */}
                    <small>({course.studentsCount})</small>
                  </div>
                  <h5 className="mb-4">{course.title}</h5>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-user-tie text-primary me-2"></i> {/*{course.Teacher.Id}*/}
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-clock text-primary me-2"></i>{course.totalCourseTime} Hrs
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user text-primary me-2"></i>{course.studentsCount} Students
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
