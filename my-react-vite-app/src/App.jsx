import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<h1>About Me</h1>} />
                <Route path="/portfolio" element={<h1>Portfolio</h1>} />
                <Route path="/contact" element={<h1>Contact</h1>} />
                <Route path="/resume" element={<h1>Resume</h1>} />
            </Routes>
            <Footer/>
        </div>
    );
}
export default App;