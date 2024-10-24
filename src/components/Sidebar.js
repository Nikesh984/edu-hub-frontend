// components/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Courses</li>
        <li>Calendar</li>
        <li>Inbox</li>
      </ul>
    </div>
  );
}

export default Sidebar;
