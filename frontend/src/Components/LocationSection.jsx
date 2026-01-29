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
                            src="https://maps.google.com/maps?q=Vintage+Greens+Banquet+Hall+Rampur+Road+Haldwani&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Vintage Greens Location - Rampur Road, Haldwani"
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
                                href="https://www.google.com/maps/dir/?api=1&destination=29.21968,79.51246"
                                target="_blank"
                                rel="noopener noreferrer"
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
