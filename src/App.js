// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar';
import Resume from './Pages/Resume';
import CssBaseline from '@mui/material/CssBaseline';
import RLWheel from './Pages/Projects/RLWheel';
import ScrollToTop from './Components/ScrollToTop';
import Box from '@mui/material/Box';
import QuantumDevices from './Pages/Projects/QuantumDevices';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <CssBaseline />
      <Navbar />
      <Box
        sx={{
          backgroundColor: '#F7F7F7',
          padding: '1% 2%',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume.pdf" element={<Resume />} />
          <Route path="/rlwheel" element={<RLWheel />} />
          <Route path="/quantumdevices" element={<QuantumDevices />} />
          <Route path="/rlwheelreport.pdf" element={<Resume />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
