import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './LocationSection.css';

const LocationSection = () => {
    const [headerRef, headerVisible] = useScrollAnimation();
    const [contentRef, contentVisible] = useScrollAnimation();

    return (
        <section className="luxury-location-section" id="location">
            <div className="location-container">
                <div
                    ref={headerRef}
                    className={`location-header-luxury scroll-animate ${headerVisible ? 'is-visible' : ''}`}
                >
                    <span className="location-pretitle">OUR VINTAGE GREENS</span>
                    <h2 className="location-main-title">A Prime Destination</h2>
                    <div className="location-divider"></div>
                    <p className="location-description">
                        Nestled in the heart of Haldwani, Vintage Greens offers an oasis of tranquility and sophistication with unparalleled accessibility.
                    </p>
                </div>

                <div
                    ref={contentRef}
                    className={`location-content-luxury scroll-animate ${contentVisible ? 'is-visible' : ''}`}
                >
                    <div className="map-wrapper-luxury">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55360.15837814394!2d79.47584!3d29.21453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09addbd0c86c7%3A0xb9d5e53c0ee9087e!2sHaldwani%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Vintage Greens Location"
                        ></iframe>
                    </div>

                    <div className="location-info-luxury">
                        <div className="address-block-luxury">
                            <h3 className="estate-name">The Vintage Greens</h3>
                            <p className="estate-address">Rampur Road, Haldwani, Uttarakhand</p>
                        </div>

                        <div className="proximity-grid-luxury">
                            <div className="proximity-item">
                                <span className="prox-label">Railway Connectivity</span>
                                <span className="prox-value">5 Minutes from Railway Station</span>
                            </div>
                            <div className="proximity-item">
                                <span className="prox-label">Mountain Access</span>
                                <span className="prox-value">10 Minutes to Kathgodam Gateway</span>
                            </div>
                            <div className="proximity-item">
                                <span className="prox-label">Guest Logistics</span>
                                <span className="prox-value">Private Valet & Concierge Arrival</span>
                            </div>
                        </div>

                        <div className="location-actions-luxury">
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=Haldwani+Uttarakhand"
                                target="_blank"
                                className="btn-luxury-primary"
                            >
                                Navigate to Vintage Greens
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
