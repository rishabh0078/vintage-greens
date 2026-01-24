import React from 'react';
import './TestimonialSection.css';

const TestimonialSection = () => {
    return (
        <section className="luxury-testimonial-section">
            <div className="testimonial-container-luxury">
                <div className="testimonial-card-luxury">
                    <div className="testimonial-decorative-line"></div>

                    <div className="testimonial-quote-wrapper">
                        <span className="luxury-quote-mark">“</span>
                        <blockquote className="luxury-testimonial-text">
                            Our celebration at Vintage Greens was a masterpiece of elegance.
                            From the awe-inspiring architecture to the seamless coordination,
                            every moment felt like a dream realized in the most majestic setting.
                        </blockquote>
                        <span className="luxury-quote-mark bottom">”</span>
                    </div>

                    <div className="testimonial-author-luxury">
                        <div className="author-details">
                            <h4 className="author-name-luxury">The Malhotra Family</h4>
                            <p className="author-event-luxury">Grand Reception • Winter 2024</p>
                        </div>
                    </div>

                    <div className="testimonial-decorative-line"></div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
