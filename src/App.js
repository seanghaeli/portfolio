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
import RLWheelReport from './Pages/Projects/RLWheelReport';
import QuickestAscent from './Pages/Projects/Papers/QuickestAscent'
import Papers from './Pages/Projects/Papers/Papers';
import IsingModel from './Pages/Projects/Papers/IsingModel';
import Videos from './Pages/Projects/Videos';
import RCL from './Pages/Projects/RCL'
import { HelmetProvider } from 'react-helmet-async';

function RainbowRedirect() {
  window.location.href = "https://www.youtube.com/watch?v=g7rV8b0Tb2k&list=PLjYAr6I4xGWyMt2disjClb3SARbW1Tb17&ab_channel=SeanGhaeli"
  return null;
}
function OssRedirect() {
  window.location.href = "https://seanghaeli.substack.com/p/faang-open-source"
  return null;
}

function AirflowRedirect() {
  window.location.href = "https://github.com/apache/airflow/pulls?q=is%3Apr+author%3Aseanghaeli"
  return null;
}

function App() {
  return (
    <HelmetProvider>
    <Router basename=''>
      <ScrollToTop />
      <CssBaseline />
      <Navbar />
      <Box
        sx={{
          backgroundColor: '#F7F7F7',
          padding: '2% 4%',
          minHeight: '100vh', // Update to '100vh
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume.pdf" element={<Resume />} />
          <Route path="/rcl" element={<RCL />} />
          <Route path="/rlwheel" element={<RLWheel />} />
          <Route path="/quantumdevices" element={<QuantumDevices />} />
          <Route path="/rlwheelreport.pdf" element={<RLWheelReport />} />
          <Route path="/papers" element={<Papers />} />
          <Route path="/lectures" element={<Videos />} />
          <Route path="/quickestascent.pdf" element={<QuickestAscent />} />
          <Route path="/isingmodel.pdf" element={<IsingModel />} />
          <Route path="/rainbow" element={<RainbowRedirect />} />
          <Route path="/oss" element={<OssRedirect />} />
          <Route path="/airflow" element={<AirflowRedirect />} />
        </Routes>
      </Box>
    </Router>
    </HelmetProvider>
  );
}

export default App;
