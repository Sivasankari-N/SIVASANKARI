import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Account from './components/Account';
import About from './components/About';
import Connect from './components/Connect';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleSignup = (newUser) => {
    setUser(newUser);
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/connect' element={<Connect />} />
        <Route path='/account' element={<Account user={user} onUpdateUser={updateUser} />} />
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
        <Route path='/signup' element={<Signup onSignup={handleSignup} />} />
      </Routes>
    </Router>
  );
}

export default App;
