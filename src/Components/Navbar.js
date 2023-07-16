import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

function Navbar() {
  const isPhoneScreen = useMediaQuery('(max-width:600px)');

  const navbarStyle = {
    position: 'fixed',
    top: '4%',
    left: '1%',
    width: isPhoneScreen ? '6vw' : '2vw',
    height: isPhoneScreen ? '6vw' : '2vw',
    zIndex: 9999
  };

  return (
    <Link to="/" style={navbarStyle}>
      <img src={process.env.PUBLIC_URL + '/home-icon.png'} alt="Home Icon" style={{ width: '100%', height: '100%' }} />
    </Link>
  );
}

export default Navbar;
