import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Buttons from './components/Buttons'
import './App.css';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import AdminPage from './Pages/AdminPage';
import UserPage from './Pages/UserPage';


function App() {
  return (
    <Router >
      <div className="body">
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={() => <div>404</div>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;