import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
    const images = [
        '/images/photo1.jpg',
        '/images/photo2.jpg',
        '/images/photo3.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically change the image every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto my-8 px-4">
            {/* Image carousel container */}
            <div className="overflow-hidden rounded-lg shadow-lg">
                {/* The image itself */}
                <img
                    src={images[currentIndex]}
                    alt="Temple"
                    className="w-full h-96 object-contain"  // Make the image fit within the container
                />
            </div>

            {/* Previous button */}
            <button
                onClick={prevImage}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 focus:outline-none"
            >
                &#8592;
            </button>

            {/* Next button */}
            <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 focus:outline-none"
            >
                &#8594;
            </button>
        </div>
    );
};

export default ImageCarousel;
