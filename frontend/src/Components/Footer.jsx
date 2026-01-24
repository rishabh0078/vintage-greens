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
                            A heritage of elegance, crafting timeless celebrations in the heart of Uttarakhand.
                        </p>
                        <div className="footer-social-luxury">
                            <a href="#" className="social-link-luxury">Instagram</a>
                            <span className="social-divider">•</span>
                            <a href="#" className="social-link-luxury">Facebook</a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="footer-nav-section">
                        <h4 className="footer-small-title">Curation</h4>
                        <ul className="footer-nav-list">
                            <li><a href="#gallery">Portfolio</a></li>
                            <li><a href="#location">The Greens</a></li>
                            <li><a href="#contact">Reservations</a></li>
                        </ul>
                    </div>

                    {/* Offerings */}
                    <div className="footer-nav-section">
                        <h4 className="footer-small-title">Offerings</h4>
                        <ul className="footer-nav-list">
                            <li>Grand Weddings</li>
                            <li>Corporate Retails</li>
                            <li>Bespoke Galas</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-nav-section">
                        <h4 className="footer-small-title">Correspondence</h4>
                        <ul className="footer-nav-list">
                            <li>+91 99999 00000</li>
                            <li>concierge@vintagegreens.com</li>
                            <li>Rampur Road, Haldwani</li>
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
