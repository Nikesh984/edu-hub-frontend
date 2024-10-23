import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional, if you want to add custom styles

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to EduHub</h1>
        <p>Your go-to platform for course management and material sharing!</p>
      </header>
      
      <section className="home-content">
        <div className="cta-buttons">
          <Link to="/login" className="btn btn-primary">Login</Link>
          <Link to="/register" className="btn btn-secondary">Register</Link>
        </div>
      </section>

      <footer className="home-footer">
        <p>Empowering students and professors to collaborate easily.</p>
        <p>&copy; 2024 EduHub, All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
