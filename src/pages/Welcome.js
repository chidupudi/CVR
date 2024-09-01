import React from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="welcome-container">
            <header className="welcome-header">
                <img src="your-logo-url" alt="Logo" className="logo" />
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/solutions">Solutions</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

            </header>
            <main className="welcome-main">
                <div className="welcome-text">
                    <h1>Innovative Services for Your Business</h1>
                    <p>CVR Tech Solutions offers a wide range of services to help your business thrive in the digital age. From IT consulting to digital transformation, we have the expertise to drive your success.</p>
                    <div className="welcome-buttons">
                        
                        <button className="learn-more">Learn More</button>
                        <button className="contact-us">Contact Us</button>
                    </div>
                </div>
                <div className="services-grid">
                    <div className="service-box">
                        <i className="icon-consulting"></i>
                        <h3>IT Consulting</h3>
                        <p>Leverage our expertise to transform your IT infrastructure.</p>
                    </div>
                    <div className="service-box">
                        <i className="icon-transformation"></i>
                        <h3>Digital Transformation</h3>
                        <p>Accelerate your digital journey with our innovative solutions.</p>
                    </div>
                    <div className="service-box">
                        <i className="icon-development"></i>
                        <h3>Application Development</h3>
                        <p>Build custom applications to meet your unique business needs.</p>
                    </div>
                    <div className="service-box">
                        <i className="icon-analytics"></i>
                        <h3>Data & Analytics</h3>
                        <p>Unlock the power of your data to drive informed decisions.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Welcome;
