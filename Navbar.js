// Navbar.js
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import '../styles/Navbar.css'
import Home from './Home';
import Account from './Account';
import About from './About';
import '../styles/Navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <div>
        <div className='Navbar'>
            <div className='nav-content'>
                <div className='nav-left'>
                    <ul>
                     <Link to="/home"> <li>Home</li></Link>
                      <Link to="/about"><li>About</li></Link>
                      <Link to="/connect"><li>Connect with us</li></Link>
                    </ul>   
                </div>
                <div className='nav-rigth'>
                  <div className='nav-icons'>
                    <Link to="/account"> <AccountCircleIcon /></Link>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
