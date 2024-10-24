// components/TopBar.js
import React from 'react';
import './TopBar.css';

function TopBar() {
  return (
    <div className="topbar">
      <input type="text" placeholder="Search..." className="search-bar" />
      <div className="profile">
        <img src="https://via.placeholder.com/30" alt="Profile" className="profile-avatar" />
      </div>
    </div>
  );
}

export default TopBar;
