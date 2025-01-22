//In this file, everything is imported so that the PortfolioContainer component can render what the user selects.
//Different Route paths will navigate to the different sections based on what the user selects.
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


function PortfolioContainer() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default PortfolioContainer;