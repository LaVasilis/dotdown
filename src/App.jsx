import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles.css';      
import NavBar from './navBar.jsx';
import Footer from './Footer.jsx';
import Home from './home.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add these later when you actually create components */}
            {/* <Route path="/artists" element={<Artists />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;