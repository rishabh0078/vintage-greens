
import React, { useState } from 'react';
import './GallerySection.css';

const GallerySection = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [visibleCount, setVisibleCount] = useState(2); // Show 2 images initially

    const categories = [
        { id: 'all', label: 'All Events' },
        { id: 'wedding', label: 'Weddings' },
        { id: 'corporate', label: 'Corporate' },
        { id: 'reception', label: 'Receptions' }
    ];

    // Gallery images - easily add your own!
    // TO ADD YOUR IMAGES:
    // 1. Place photos in: public/images/gallery/
    // 2. Update the 'url' below to match your filename
    // 3. Keep 'fallback' until you have your own images

    const galleryImages = [
        {
            id: 1,
            category: 'wedding',
            url: '/images/gallery/wedding-1.jpg',
            fallback: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800',
            alt: 'Elegant wedding setup with floral decorations'
        },
        {
            id: 2,
            category: 'corporate',
            url: '/images/gallery/corporate-1.jpg',
            fallback: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800',
            alt: 'Professional corporate event setup'
        },
        {
            id: 3,
            category: 'reception',
            url: '/images/gallery/reception-1.jpg',
            fallback: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800',
            alt: 'Grand reception hall with elegant lighting'
        },
        {
            id: 4,
            category: 'wedding',
            url: '/images/gallery/wedding-2.jpg',
            fallback: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=800',
            alt: 'Wedding stage decoration'
        },
        {
            id: 5,
            category: 'corporate',
            url: '/images/gallery/corporate-2.jpg',
            fallback: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800',
            alt: 'Corporate conference setup'
        },
        {
            id: 6,
            category: 'reception',
            url: '/images/gallery/reception-2.jpg',
            fallback: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800',
            alt: 'Reception party atmosphere'
        }
    ];

    // Filter images by category
    const filteredImages = activeCategory === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    // Get visible images based on count
    const visibleImages = filteredImages.slice(0, visibleCount);
    const hasMore = visibleCount < filteredImages.length;

    // Load more images
    const loadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    // Reset visible count when category changes
    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
        setVisibleCount(2); // Reset to show 2 images
    };

    return (
        <section className="luxury-gallery-section" id="gallery">
            <div className="gallery-container">
                <div className="gallery-header-luxury">
                    <span className="gallery-pretitle">PORTFOLIO</span>
                    <h2 className="gallery-main-title">Moments defined by Elegance</h2>
                    <div className="gallery-divider"></div>
                    <p className="gallery-description">
                        A visual journey through the most exquisite celebrations held at Vintage Greens. Each image tells a story of love, joy, and architectural splendor.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="gallery-filter-luxury">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`filter-link-luxury ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => handleCategoryChange(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="gallery-grid-luxury">
                    {visibleImages.map(image => (
                        <div key={image.id} className="gallery-item-luxury">
                            <div className="image-wrapper-luxury">
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    loading="lazy"
                                    className="gallery-image-luxury"
                                    onError={(e) => {
                                        if (e.target.src !== image.fallback) {
                                            e.target.src = image.fallback;
                                        }
                                    }}
                                />
                                <div className="gallery-hover-luxury">
                                    <span className="hover-category">{image.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                    <div className="gallery-footer-luxury">
                        <button onClick={loadMore} className="btn-luxury-outline">
                            Discover More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GallerySection;
