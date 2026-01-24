import React from 'react';
import './TestimonialSection.css';

const TestimonialSection = () => {
    return (
        <section className="testimonial-section section">
            <div className="container">
                <div className="testimonial-content">
                    <div className="quote-icon">"</div>

                    <blockquote className="testimonial-quote">
                        Our wedding at Vintage Greens was everything we dreamed of and more.
                        The elegant ambiance, impeccable service, and attention to every detail
                        made our special day absolutely perfect. Our guests are still raving
                        about the experience.
                    </blockquote>

                    <div className="testimonial-author">
                        <div className="author-info">
                            <span className="author-name">Priya & Rahul Sharma</span>
                            <span className="author-event">Wedding, December 2024</span>
                        </div>

                        <div className="testimonial-rating">
                            <div className="stars">★★★★★</div>
                            <span className="rating-text">5.0 on Google</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
