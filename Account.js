import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Account.css';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const Account = ({ user, onUpdateUser }) => {
  const handleLogout = () => {
    onUpdateUser(null);
  };

  return (
    <div className='Account'>
      <Navbar />
      <div className='account'>
        <div className='Account-heading'>
          {user ? (
            <div className='acc-head'>
              <h1>Welcome {user.username}</h1>
              <div className='security-info'>
                <h2>Security Information</h2>
                <p>
                  Ensuring the security of your account is our top priority. Here are some tips to help you maintain a secure account:
                </p>
                <ul>
                  <li>
                    <strong>Use a Strong Password:</strong> Choose a password that is unique, combining letters, numbers, and symbols.
                  </li>
                  <li>
                    <strong>Enable Two-Factor Authentication (2FA):</strong> Add an extra layer of protection to your account with 2FA.
                  </li>
                  <li>
                    <strong>Regularly Update Your Password:</strong> Change your password periodically to enhance security.
                  </li>
                </ul>
              </div>
             </div>
          ) : (
            <>
              <h1 className='welcome-text'>Welcome Guest</h1>
              <p id='query-text'>
                Would you like to&nbsp;
                <Link to='/signup'>signup</Link>&nbsp;
                or&nbsp;
                <Link to='/login'>login</Link>?
              </p>

            </>
          )}
        </div>

        {user && (
          <div className='Account-box'>
            <div className='center-box'>
              <ul>
                <li><PermIdentityIcon id='chnagelh'/></li>
                <li>Username: {user.username || 'N/A'}</li>
                <li>
                  <Button onClick={handleLogout} variant="outlined" id='chnage'>
                    Logout
                  </Button>
                </li>
              </ul>

             
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Account;
