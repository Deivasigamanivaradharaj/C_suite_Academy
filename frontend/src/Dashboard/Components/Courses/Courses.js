// src/components/Courses.js
import React from 'react';
import './Courses.css';

import pm from '../../Assets/pm.jpg'
import bm from '../../Assets/bm.jpg'
import agile from '../../Assets/agile.jpg'
import ml from '../../Assets/ml.jpg'
import ai from '../../Assets/ai.jpg'
import java from '../../Assets/java.jpg'
import js from '../../Assets/js.png'
import python from '../../Assets/python.png'

const courses = [
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
  {
    id: 5,
    title: 'Artificial Intelligence',
    description: 'This is a brief description of Course 5.',
    image: ai,
  },
  {
    id: 6,
    title: 'Java',
    description: 'This is a brief description of Course 6.',
    image: java,
  },
  {
    id: 7,
    title: 'JavaScript',
    description: 'This is a brief description of Course 7.',
    image: js,
  },
  {
    id: 8,
    title: 'Python',
    description: 'This is a brief description of Course 8.',
    image: python,
  },
];

const Courses = () => {
  return (
    <>
      <div className="main-content">
        <h2 style={{color:"#8949FF"}}>Courses</h2>
        <div className="courses-container">
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-details">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button className="course-button">View Course</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
