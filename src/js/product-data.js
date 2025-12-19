```javascript
// ==========================================
// PRODUCT DATA - Archicad Windows
// ==========================================

const archicadProduct = {
    id: 'archicad-29-windows',
    name: 'GRAPHISOFT Archicad 29 Lifetime License - Windows',
    shortName: 'Archicad 29',
    fullName: 'GRAPHISOFT Archicad 29 for Windows',
    tagline: 'BIM Software for Architects',
    platform: 'Windows',
    version: '29',

    pricing: {
        current: 79,
        original: 1995, // Typical retail price
        currency: 'USD',
        discount: 96, // 96% off
        type: 'Lifetime License'
    },

    description: {
        short: 'Professional BIM software solution for architects and design professionals. Lifetime license for Windows.',
        long: 'Archicad is a complete BIM software solution for architects, offering a wide range of design and documentation tools. From initial concept to construction documentation, Archicad provides a comprehensive environment for architectural design.'
    },

    features: [
        {
            title: 'Complete BIM Solution',
            description: 'Integrated environment for architectural design and documentation',
            icon: 'cube'
        },
        {
            title: 'Intelligent Building Elements',
            description: 'Smart objects that understand building logic and relationships',
            icon: 'layers'
        },
        {
            title: 'Real-time Rendering',
            description: 'High-quality visualization integrated into your workflow',
            icon: 'image'
        },
        {
            title: 'Team Collaboration',
            description: 'Work together seamlessly on shared projects',
            icon: 'users'
        },
        {
            title: 'Documentation Tools',
            description: 'Automated documentation from your 3D model',
            icon: 'file-text'
        },
        {
            title: 'Open BIM',
            description: 'Industry-standard IFC support for seamless data exchange',
            icon: 'share-2'
        }
    ],

    systemRequirements: {
        windows: {
            os: 'Windows 10 or Windows 11 (64-bit)',
            processor: 'Intel or AMD multi-core processor (4 cores recommended)',
            ram: '16 GB RAM minimum (32 GB recommended)',
            graphics: 'GPU with 4 GB VRAM, DirectX 11 compatible',
            storage: '10 GB free disk space for installation',
            display: '1920 × 1080 resolution or higher',
            internet: 'Required for activation and updates'
        }
    },

    included: [
        'Lifetime License - One-time payment',
        'Windows 10/11 Compatible',
        'Instant Digital Delivery',
        'Official Activation Key',
        'Full Commercial Use Rights',
        'Lifetime Updates & Support',
        'Complete Documentation',
        'Installation Support'
    ],

    deliveryInfo: {
        method: 'Instant Digital Download',
        timeframe: 'Immediate after payment',
        contents: [
            'Official Download Link',
            'Genuine License Key',
            'Installation Guide',
            'Activation Instructions',
            'Support Documentation'
        ]
    },

    badges: [
        'Best Seller',
        'Lifetime License',
        '96% OFF',
        'Windows Only'
    ],

    faq: [
        {
            question: 'Is this a genuine Archicad license?',
            answer: 'Yes, you will receive a 100% genuine license key that activates official Archicad software directly from Graphisoft.'
        },
        {
            question: 'Is this a lifetime license?',
            answer: 'Absolutely! This is a lifetime license with no recurring fees. One-time payment of $79 gives you permanent access to Archicad.'
        },
        {
            question: 'Which Windows versions are supported?',
            answer: 'Archicad is compatible with Windows 10 and Windows 11 (64-bit versions). Mac is not supported in this offer.'
        },
        {
            question: 'How quickly will I receive my license?',
            answer: 'Instantly! After completing your payment, you\'ll receive an email with your download link and license key within minutes.'
        },
        {
            question: 'Can I use this for commercial projects?',
            answer: 'Yes, this is a full commercial license. You can use it for any professional or commercial architectural projects.'
        },
        {
            question: 'Do I get updates?',
            answer: 'Yes, your lifetime license includes all future updates and improvements at no additional cost.'
        },
        {
            question: 'What if I need help with installation?',
            answer: 'We provide complete installation guides and email support to help you get started quickly.'
        },
        {
            question: 'Is there a refund policy?',
            answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with your purchase.'
        }
    ],

    testimonials: [
        {
            name: 'Michael Rodriguez',
            role: 'Principal Architect',
            company: 'Rodriguez Design Studio',
            rating: 5,
            text: 'Incredible value for a lifetime license! Archicad has transformed our workflow and the price is unbeatable.',
            avatar: 'avatar-1.jpg'
        },
        {
            name: 'Jennifer Wu',
            role: 'BIM Coordinator',
            company: 'Urban Architecture Group',
            rating: 5,
            text: 'Fast delivery, genuine license, and excellent support. Exactly as advertised. Highly recommend!',
            avatar: 'avatar-2.jpg'
        },
        {
            name: 'David Thompson',
            role: 'Architectural Designer',
            company: 'Thompson & Associates',
            rating: 5,
            text: 'Best investment for my practice. The software is professional-grade and the lifetime license saves thousands.',
            avatar: 'avatar-3.jpg'
        }
    ],

    metadata: {
        category: 'BIM Software',
        vendor: 'Graphisoft',
        version: 'Latest Version',
        releaseDate: '2025',
        languages: ['English', 'Multiple languages supported'],
        fileSize: '~4 GB',
        productType: 'Digital Software License'
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PRODUCT_DATA;
}
