import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Masthead from './components/Masthead';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectA from './pages/Projects/ProjectA';
import ProjectB from './pages/Projects/ProjectB';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Store from './pages/Store';
import FAQ from './pages/FAQ';

function App() {
    return (
        <div id="root">
            <Router>
                <Masthead />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/project-a" element={<ProjectA />} />
                        <Route path="/project-b" element={<ProjectB />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/store" element={<Store />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="*" element={<h1>404: Page Not Found</h1>} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
