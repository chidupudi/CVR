import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/services" element={<div>Services Page</div>} />
                <Route path="/solutions" element={<div>Solutions Page</div>} />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/careers" element={<div>Careers Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
            </Routes>
        </Router>
    );
}



export default App;
