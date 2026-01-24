import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <img
                    src="/images/hero/hero-main.jpg?v=2"
                    alt="Vintage Greens Banquet Hall"
                    className="hero-bg-image"
                />
                <div className="overlay-cinematic"></div>
            </div>

            <div className="hero-content">
                <div className="container hero-layout-flex">
                    {/* SKY ZONE: Utilizes the empty sky above the building */}
                    <div className="hero-sky-zone reveal-item">
                        <span className="brand-name">VINTAGE GREENS</span>
                        <h1 className="hero-main-title">
                            Where Moments Become <br />
                            <span className="gold-text">Timeless Memories</span>
                        </h1>
                    </div>

                    {/* LAWN ZONE: Utilizes the empty green field below the building */}
                    <div className="hero-lawn-zone reveal-item">
                        <div className="hero-actions-container">
                            <div className="hero-actions">
                                <a href="#contact" className="btn btn-gold">
                                    Request Availability
                                </a>
                                <a href="tel:+91XXXXXXXXXX" className="btn btn-outline">
                                    Contact Us
                                </a>
                            </div>
                            <p className="hero-location-text">
                                Rampur Road • Haldwani
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
