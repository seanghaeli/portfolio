import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    position: 'fixed',
    top: '5%',
    left: '1%',
    transform: 'translateY(-50%)',
    width: '2vw',
    height: '2vw',
    zIndex: 9999,
  };

  return (
    <Link to="/" style={navbarStyle}>
      <img src={process.env.PUBLIC_URL + '/home-icon.png'} alt="Home Icon" style={{ width: '100%', height: '100%' }} />
    </Link>
  );
}

export default Navbar;
