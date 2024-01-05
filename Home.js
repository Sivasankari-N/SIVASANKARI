import React from 'react';
import '../styles/Home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Button from '@mui/material/Button';


const Home = () => {
  return (
    <div className='Home'>
      <div className='home'>
        <div className='home-content'>
          <div className='homecon'>
            <Navbar className="nav-homeside" />

          <Footer />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
