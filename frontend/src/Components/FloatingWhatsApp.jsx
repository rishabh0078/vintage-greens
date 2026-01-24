import React from 'react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
    const phoneNumber = '919876543210'; // Replace with actual number
    const message = 'Hi! I would like to inquire about booking Vintage Greens for an event.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            className="floating-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="whatsapp-icon"
            >
                <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.957 0-7.384 6.083-13.467 13.467-13.467s13.467 6.083 13.467 13.467c0 7.384-6.083 13.467-13.467 13.467zM21.713 18.068c-0.241-0.121-1.424-0.703-1.645-0.783s-0.381-0.121-0.542 0.121c-0.161 0.241-0.623 0.783-0.764 0.944s-0.281 0.181-0.522 0.060c-0.241-0.121-1.018-0.375-1.939-1.196-0.717-0.639-1.201-1.427-1.342-1.668s-0.015-0.372 0.106-0.492c0.109-0.108 0.241-0.281 0.362-0.422s0.161-0.241 0.241-0.402c0.080-0.161 0.040-0.302-0.020-0.422s-0.542-1.306-0.743-1.789c-0.196-0.470-0.394-0.406-0.542-0.413-0.14-0.007-0.301-0.008-0.462-0.008s-0.422 0.060-0.643 0.302c-0.221 0.241-0.844 0.824-0.844 2.010s0.864 2.331 0.984 2.492c0.121 0.161 1.695 2.656 4.139 3.673 2.444 1.017 2.444 0.678 2.886 0.635s1.424-0.582 1.625-1.145c0.201-0.562 0.201-1.044 0.141-1.145s-0.221-0.161-0.462-0.281z" fill="currentColor" />
            </svg>
            <span className="whatsapp-tooltip">Chat with us</span>
        </a>
    );
};

export default FloatingWhatsApp;
