// pages/Dashboard.js
import React from 'react';
import CourseCard from '../components/CourseCard';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Your Courses</h1>
      <div className="courses-grid">
        <CourseCard title="Math 101" instructor="John Doe" />
        <CourseCard title="History 202" instructor="Jane Smith" />
        <CourseCard title="Physics 303" instructor="Albert Einstein" />
      </div>
    </div>
  );
}

export default Dashboard;
