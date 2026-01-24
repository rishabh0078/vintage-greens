import React from 'react';
import './LocationSection.css';

const LocationSection = () => {
    return (
        <section className="location section section-light">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Visit Our Venue</h2>
                    <p className="section-subtitle">
                        Centrally located with easy access from all major areas
                    </p>
                </div>

                <div className="location-content">
                    {/* Map */}
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55360.15837814394!2d79.47584!3d29.21453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09addbd0c86c7%3A0xb9d5e53c0ee9087e!2sHaldwani%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Vintage Greens Location - Haldwani, Uttarakhand"
                        ></iframe>
                    </div>

                    {/* Location Details */}
                    <div className="location-details">
                        <div className="location-info-card">
                            <h3>Vintage Greens Banquet Hall</h3>
                            <p className="address">
                                <span className="icon">📍</span>
                                Haldwani, Uttarakhand 263139
                            </p>

                            <div className="landmarks">
                                <h4>Nearby Landmarks</h4>
                                <ul>
                                    <li>5 min from Haldwani Railway Station</li>
                                    <li>10 min from Kathgodam</li>
                                    <li>Easy access to Nainital Road</li>
                                </ul>
                            </div>

                            <div className="parking-info">
                                <span className="icon">🚗</span>
                                <div>
                                    <h4>Ample Parking</h4>
                                    <p>200+ vehicle capacity with valet service</p>
                                </div>
                            </div>

                            <div className="location-cta">
                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=Haldwani+Uttarakhand"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    Get Directions
                                </a>
                                <a href="#contact" className="btn btn-secondary">
                                    Schedule a Visit
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
