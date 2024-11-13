import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import './app.css'



function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage  className='intro' />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </HashRouter>
  );
}
export default App;