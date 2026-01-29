import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="luxury-footer">
            <div className="footer-container">
                <div className="footer-main-grid">
                    {/* Brand Section */}
                    <div className="footer-brand-section">
                        <h2 className="footer-roman-title">VINTAGE GREENS</h2>
                        <p className="footer-elegance-text">
                            A prominent venue specializing in banqueting excellence. Spanning 7 acres with Greek-inspired architecture, 10,000 sq ft air-conditioned banquet hall, and manicured lawns.
                        </p>
                        <div className="footer-social-luxury">
                            <a href="#" className="social-link-luxury">Instagram</a>
                            <span className="social-divider">•</span>
                            <a href="#" className="social-link-luxury">Facebook</a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="footer-nav-section">
                        <h4 className="footer-small-title">Explore</h4>
                        <ul className="footer-nav-list">
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#location">Location</a></li>
                            <li><a href="#contact">Book Venue</a></li>
                        </ul>
                    </div>

                    {/* Offerings */}
                    <div className="footer-nav-section">
                        <h4 className="footer-small-title">Events</h4>
                        <ul className="footer-nav-list">
                            <li>Wedding Ceremonies</li>
                            <li>Wedding Receptions</li>
                            <li>Birthday Parties</li>
                            <li>Corporate Events</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-nav-section">
                        <h4 className="footer-small-title">Contact</h4>
                        <ul className="footer-nav-list">
                            <li>+91 9917000999</li>
                            <li>+91 9012121246</li>
                            <li>info@vintagegreens.com</li>
                            <li>Rampur Road, Near Maruti Nexa</li>
                            <li>Haldwani, Uttarakhand 263139</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom-luxury">
                    <p className="copyright-text">© {currentYear} Vintage Greens • Handcrafted Excellence</p>
                    <div className="footer-legal">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
