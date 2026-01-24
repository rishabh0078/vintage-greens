// Image configuration for Vintage Greens
// Update these paths when you add your own images

export const images = {
    // Hero Section
    hero: {
        main: '/images/hero/hero-main.jpg',
        // Fallback to placeholder if image not found
        fallback: 'https://images.unsplash.com/photo-1519167758481-83f29da8c8d0?q=80&w=2000'
    },

    // Gallery Images
    gallery: {
        weddings: [
            {
                id: 1,
                url: '/images/gallery/wedding-1.jpg',
                fallback: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800',
                alt: 'Elegant wedding setup with floral decorations',
                category: 'wedding'
            },
            {
                id: 2,
                url: '/images/gallery/wedding-2.jpg',
                fallback: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=800',
                alt: 'Wedding stage decoration',
                category: 'wedding'
            }
        ],
        corporate: [
            {
                id: 3,
                url: '/images/gallery/corporate-1.jpg',
                fallback: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800',
                alt: 'Professional corporate event setup',
                category: 'corporate'
            },
            {
                id: 4,
                url: '/images/gallery/corporate-2.jpg',
                fallback: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800',
                alt: 'Corporate conference setup',
                category: 'corporate'
            }
        ],
        receptions: [
            {
                id: 5,
                url: '/images/gallery/reception-1.jpg',
                fallback: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800',
                alt: 'Grand reception hall with elegant lighting',
                category: 'reception'
            },
            {
                id: 6,
                url: '/images/gallery/reception-2.jpg',
                fallback: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800',
                alt: 'Reception dining area',
                category: 'reception'
            }
        ]
    }
};

// Helper function to get image with fallback
export const getImage = (path, fallback) => {
    // In production, you might want to check if image exists
    // For now, return the path and let browser handle 404
    return path || fallback;
};

// Get all gallery images as a flat array
export const getAllGalleryImages = () => {
    return [
        ...images.gallery.weddings,
        ...images.gallery.corporate,
        ...images.gallery.receptions
    ];
};

// Instructions for adding your own images:
// 1. Place your images in: public/images/hero/ and public/images/gallery/
// 2. Update the 'url' paths above to match your image filenames
// 3. Keep the fallback URLs until you have your own images
// 4. The website will automatically use your images once they're in place!
