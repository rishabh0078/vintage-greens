import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                {/* Background image will be set via CSS */}
                <div className="overlay"></div>
            </div>

            <div className="hero-content">
                <div className="container">
                    {/* Minimal top branding */}
                    <div className="hero-brand fade-in-up">
                        <span className="brand-name">Vintage Greens</span>
                    </div>

                    {/* Main content at bottom */}
                    <div className="hero-bottom">
                        <div className="hero-text">
                            <h1 className="hero-title fade-in-up">
                                Haldwani, Uttarakhand
                            </h1>
                            <p className="hero-subtitle fade-in-up">
                                Where Moments Become Timeless Memories
                            </p>
                        </div>

                        <div className="hero-cta fade-in-up">
                            <a href="#contact" className="btn btn-primary btn-large">
                                Book a Visit
                            </a>
                            <a href="tel:+919876543210" className="btn btn-secondary btn-large">
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
};

export default HeroSection;
