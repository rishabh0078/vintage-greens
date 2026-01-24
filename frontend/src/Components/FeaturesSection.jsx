import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
    const features = [
        {
            number: '01',
            title: 'Majestic Grandeur',
            description: 'A grand hall featuring 25-foot ceilings, crystal chandeliers, and artisanal marble flooring designed for celebrations of distinction.'
        },
        {
            number: '02',
            title: 'Culinary Artistry',
            description: 'Exquisite multi-cuisine menus curated by master chefs, offering a sophisticated gastronomic journey for your esteemed guests.'
        },
        {
            number: '03',
            title: 'Unrivaled Service',
            description: 'Discrete yet attentive hospitality where every detail is meticulously managed by our professional event concierges.'
        },
        {
            number: '04',
            title: 'The Royal Suite',
            description: 'Luxuriously appointed bridal and guest suites providing a sanctuary of comfort and elegance amidst the festivities.'
        },
        {
            number: '05',
            title: 'Lush Surroundings',
            description: 'Manicured lawns and architectural fountained courtyards that provide a breathtaking backdrop for timeless photography.'
        },
        {
            number: '06',
            title: 'Perfect Logistics',
            description: 'Seamless arrival experience with expansive private parking and professional valet services for your convenience.'
        }
    ];

    return (
        <section className="features-section">
            <div className="features-container">
                <div className="features-header">
                    <span className="features-pretitle">THE EXPERIENCE</span>
                    <h2 className="features-main-title">Crafting Grandeur</h2>
                    <div className="features-divider"></div>
                    <p className="features-description">
                        Where architectural majesty meets impeccable hospitality. We invite you to explore the elements that make Vintage Greens the region's most distinguished venue.
                    </p>
                </div>

                <div className="features-grid-luxury">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-item-luxury">
                            <div className="feature-number">{feature.number}</div>
                            <h3 className="feature-title-luxury">{feature.title}</h3>
                            <p className="feature-text-luxury">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
