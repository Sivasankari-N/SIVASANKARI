import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/About.css'; // Create a new CSS file for the About page styles

const About = () => {
  return (
    <div className='About'>
      <Navbar />
      <div className='about'>
        <div className='About-heading'>
          <h1>About Eventa</h1>
          <p>
            Eventa is your premier event management company, dedicated to creating unforgettable experiences.
          </p>
        </div>

        <div className='About-content'>
          <div className='transparent-box'>
            {/* Transparent text box content goes here */}
            <h2>Our Mission</h2>
            <p>
              At Eventa, our mission is to bring your events to life. We specialize in planning and executing events that leave a lasting impression. 
              Whether it's a corporate gathering, a wedding, or a community event, we ensure every detail is perfect.
            </p>

            <h2>Why Choose Eventa?</h2>
            <p>
              With years of experience and a passion for excellence, Eventa stands out as a trusted partner for all your event needs. 
              Our team of dedicated professionals works tirelessly to turn your vision into reality.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
