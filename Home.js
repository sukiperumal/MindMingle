// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className="home-page">

      {/* Hero Section */}  
      <section className="hero">
        <h1>Learn In-Demand Skills</h1>
        <p>
          Our courses equip you with job-ready skills for high-growth careers. Learn from industry experts at your own pace.
        </p>
        <Link to="/courses" className="btn">
          Browse Courses  
        </Link>
      </section>

      {/* Topics Section */}
      <section className="topics">
        <h2>Popular Topics</h2>

        <div className="topics-grid">
          
          <div className="topic">
            <img src="/images/web-dev.png" alt="Web Development" />
            <h3>Web Development</h3>
            <p>11 Courses</p> 
          </div>

          <div className="topic">
            <img src="/images/data-science.png" alt="Data Science" />
            <h3>Data Science</h3>
            <p>5 Courses</p>
          </div>

          {/* More topics */}

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Student Stories</h2>

        <div className="testimonials-grid">
        
          <div className="testimonial">
            <img src="/images/student-1.png" alt="Student 1" />
            <blockquote>"I got a developer job at a great startup after taking the web development courses. Thank you!"</blockquote>
            <p>- Jane D., San Francisco</p>
          </div>
        
          {/* More testimonials */}
        
        </div>
      </section>

      {/* Intro Section */}
      <section id="intro">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta.
          Curabitur aliquet quam id dui posuere blandit.
        </p>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Start Learning Today</h2>
        <Link to="/courses" className="btn">Get Started</Link>
      </section>

    </div>
  );

}

export default Home;