import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                phone: '',
                eventType: '',
                eventDate: '',
                guestCount: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <section id="contact" className="luxury-contact-section">
            <div className="contact-container">
                <div className="contact-form-wrapper-centered">
                    {/* Inquiry Form */}
                    <div className="inquiry-form-card-luxury">
                        <div className="form-header-luxury">
                            <h3>Inquire for Availability</h3>
                            <p>All fields marked with an asterisk are required for a curated response.</p>
                        </div>

                        {submitted ? (
                            <div className="form-success-luxury">
                                <div className="success-icon-gold"></div>
                                <h4>Inquiry Received</h4>
                                <p>Our concierge will contact you within 24 hours to discuss your masterpiece event.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="luxury-form">
                                <div className="form-group-luxury">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name *"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group-luxury">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Contact Number *"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-row-luxury">
                                    <div className="form-group-luxury">
                                        <select
                                            name="eventType"
                                            value={formData.eventType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Event Type *</option>
                                            <option value="wedding">Grand Wedding</option>
                                            <option value="reception">Reception Gala</option>
                                            <option value="corporate">Executive Corporate</option>
                                            <option value="other">Bespoke Celebration</option>
                                        </select>
                                    </div>
                                    <div className="form-group-luxury">
                                        <input
                                            type="date"
                                            name="eventDate"
                                            value={formData.eventDate}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group-luxury">
                                    <textarea
                                        name="message"
                                        placeholder="Tell us about your celebration requirements..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="3"
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn-luxury-submit">
                                    Send Inquiry
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
