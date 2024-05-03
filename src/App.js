import React from 'react';
import Navbar from './components/Navbar';
import ApodPage from './pages/ApodPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EarthPage from './pages/EarthPage';
import MarsPage from './pages/MarsPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apod" element={<ApodPage />} />
        <Route path="/mars" element={<MarsPage />} />
        <Route path="/earth" element={<EarthPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
