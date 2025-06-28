import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import EmployeeVerification from './components/EmployeeVerification';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/employee-verification" element={<EmployeeVerification />} />
      </Routes>
    </Router>
  );
};

export default App;