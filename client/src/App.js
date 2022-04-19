import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;