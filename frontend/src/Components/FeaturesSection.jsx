import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
    const features = [
        {
            icon: '✨',
            title: 'Elegant Interiors',
            description: 'Sophisticated décor and premium ambiance that elevates every celebration'
        },
        {
            icon: '🍽️',
            title: 'Customizable Catering',
            description: 'Curated menus tailored to your preferences with expert culinary team'
        },
        {
            icon: '🎯',
            title: 'Professional Management',
            description: 'Dedicated event coordinators ensuring flawless execution from start to finish'
        },
        {
            icon: '🚗',
            title: 'Ample Parking',
            description: 'Spacious parking facility for 200+ vehicles with valet service available'
        },
        {
            icon: '📍',
            title: 'Prime Location',
            description: 'Centrally located with easy accessibility from all major areas'
        },
        {
            icon: '💡',
            title: 'Premium Lighting',
            description: 'State-of-the-art lighting systems creating the perfect ambiance'
        }
    ];

    return (
        <section className="features section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Why Choose Vintage Greens</h2>
                    <p className="section-subtitle">
                        Every detail designed to make your event unforgettable
                    </p>
                </div>

                <div className="features-grid grid grid-3">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card card">
                            <div className="card-icon">
                                <span>{feature.icon}</span>
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
