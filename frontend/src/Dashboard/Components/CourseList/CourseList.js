// src/components/Courses.js
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './CourseList.css';
import '../Courses/Courses.css'

import pm from '../../Assets/pm.jpg'
import bm from '../../Assets/bm.jpg'
import agile from '../../Assets/agile.jpg'
import ml from '../../Assets/ml.jpg'

const coursesList = [
  {
    id: 1,
    title: 'Project Management',
    description: 'This is a brief description of Course 1.',
    image: pm,
  },
  {
    id: 2,
    title: 'Business Management',
    description: 'This is a brief description of Course 2.',
    image: bm,
  },
  {
    id: 3,
    title: 'Agile',
    description: 'This is a brief description of Course 3.',
    image: agile,
  },
  {
    id: 4,
    title: 'Machine Learning',
    description: 'This is a brief description of Course 4.',
    image: ml,
  },
  
];

const CoursesList = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="course-list">
        <h2>Courses you are Taking!</h2>
        <div className="courses-container">
          {coursesList.map(course => (
            <div className="course-card" key={course.id}>
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-details">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button className="course-button">Continue..,</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
