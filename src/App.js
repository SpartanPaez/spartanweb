import React from 'react';
import Dashboard from './Dashboard';
import './Dashboard.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';


function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
