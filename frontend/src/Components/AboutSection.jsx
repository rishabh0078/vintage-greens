import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './AboutSection.css';

const AboutSection = () => {
    const [contentRef, contentVisible] = useScrollAnimation();
    const [imageRef, imageVisible] = useScrollAnimation();

    return (
        <section className="luxury-about-section" id="about">
            <div className="about-container">
                <div className="about-content-wrapper">
                    {/* Left: Image */}
                    <div
                        ref={imageRef}
                        className={`about-image-block scroll-animate ${imageVisible ? 'is-visible' : ''}`}
                    >
                        <div className="about-image-wrapper">
                            <img
                                src="/images/gallery/about section.avif"
                                alt="Vintage Greens Greek-inspired architecture"
                                className="about-main-image"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1519167758481-83f29da8ae8d?q=80&w=1200';
                                }}
                            />
                            <div className="about-image-overlay"></div>
                        </div>

                        {/* Stats Overlay */}
                        <div className="about-stats-overlay">
                            <div className="stat-item">
                                <span className="stat-number">7</span>
                                <span className="stat-label">Acres</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">10,000</span>
                                <span className="stat-label">Sq Ft Hall</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div
                        ref={contentRef}
                        className={`about-text-block scroll-animate ${contentVisible ? 'is-visible' : ''}`}
                    >
                        <span className="about-pretitle">DISCOVER</span>
                        <h2 className="about-main-title">A Legacy of Elegance</h2>
                        <div className="about-divider"></div>

                        <div className="about-description">
                            <p className="about-intro">
                                <strong>Vintage Greens:</strong> A prominent venue that caters to an array of event management services, with its unique specialisation in banqueting.
                            </p>

                            <p>
                                Conveniently located on the main State highway Rampur road , it is strategically placed about 4 kms from Haldwani, 15 kms from Udham Singh Nagar and 40 kms from Nainital.
                            </p>

                            <p>
                                Make a grand statement by hosting your prestigious events in the landscape of your dreams spread over <strong>7 acres</strong>. Be awed by the huge colossal facade of our stately mansion-like banquet hall inspired by <strong>Greek architectural details</strong>.
                            </p>

                            <p>
                                The <strong>10,000 sq ft centrally air-conditioned</strong> luxurious banquet hall opens to a beautifully landscaped patio, adorned with a statuesque fountain that dazzles when lit at night. The patio further leads to the abode beauty of impeccably manicured landscaped lawns surrounded by vistas of luscious evergreens.
                            </p>
                            <p>In addition , conveniently located on the property are 10 well furnished air conditioned rooms with private garden and as well as a <strong>25 bed</strong> dormitory .</p>
                        </div>

                        <div className="about-cta-wrapper">
                            <a href="#gallery" className="btn-luxury-primary">
                                Explore Our Venue
                            </a>
                            <a href="#contact" className="btn-luxury-outline">
                                Request a Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
