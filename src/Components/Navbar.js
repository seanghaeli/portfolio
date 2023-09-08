import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState("");

  useEffect(() => {
    if (previousLocation !== "/" && location.pathname === "/" && location.hash === "#projects") {
      const element = document.getElementById("projects");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }

    // Update the previous location state to the current location
    setPreviousLocation(location.pathname);
  }, [location, previousLocation]);

  const isHomePage = window.location.pathname === "/";
  const targetPath = isHomePage ? "/" : "/#projects";

  return (
    <Link to={targetPath} style={navbarStyle}>
      <img src={process.env.PUBLIC_URL + '/home-icon.png'} alt="Home Icon" style={{ width: '100%', height: '100%' }} />
    </Link>
  );
}

export default Navbar;
