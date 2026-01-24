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
        // TODO: Connect to backend API
        console.log('Form submitted:', formData);
        setSubmitted(true);

        // Reset form after 3 seconds
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
        <section id="contact" className="contact section">
            <div className="container">
                <div className="contact-wrapper">
                    {/* Left Side - Contact Info */}
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p className="contact-description">
                            Ready to host your dream event? Contact us today to check availability and discuss your requirements.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">📞</div>
                                <div>
                                    <h4>Call Us</h4>
                                    <a href="" className="contact-link">+91 XXXXXXXXXX</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">💬</div>
                                <div>
                                    <h4>WhatsApp</h4>
                                    <a href="" className="contact-link" target="_blank" rel="noopener noreferrer">
                                        Chat with us
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:info@vintagegreens.com" className="contact-link">info@vintagegreens.com</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div>
                                    <h4>Location</h4>
                                    <p className="contact-text">Haldwani, Uttarakhand 263139</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-hours">
                            <h4>Visit Us</h4>
                            <p>Monday - Sunday: 10:00 AM - 5:00 PM</p>

                        </div>
                    </div>

                    {/* Right Side - Inquiry Form */}
                    <div className="contact-form-wrapper">
                        <h3>Book a Visit</h3>
                        <p className="form-subtitle">Fill in your details and we'll get back to you within 24 hours</p>

                        {submitted ? (
                            <div className="success-message">
                                <div className="success-icon">✓</div>
                                <h4>Thank You!</h4>
                                <p>We've received your inquiry and will contact you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name *"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number *"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-group">
                                    <select
                                        name="eventType"
                                        value={formData.eventType}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    >
                                        <option value="">Select Event Type *</option>
                                        <option value="wedding">Wedding</option>
                                        <option value="reception">Reception</option>
                                        <option value="corporate">Corporate Event</option>
                                        <option value="birthday">Birthday Party</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <input
                                            type="date"
                                            name="eventDate"
                                            value={formData.eventDate}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="number"
                                            name="guestCount"
                                            placeholder="Guest Count"
                                            value={formData.guestCount}
                                            onChange={handleChange}
                                            className="form-input"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        placeholder="Additional Requirements (Optional)"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="form-input"
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-large">
                                    Submit Inquiry
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
