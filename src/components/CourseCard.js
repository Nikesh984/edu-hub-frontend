// components/CourseCard.js
import React from 'react';
import './CourseCard.css';

function CourseCard({ title, instructor }) {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>Instructor: {instructor}</p>
    </div>
  );
}

export default CourseCard;
