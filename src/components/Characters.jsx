import React from 'react';
import laptopImage from '../assets/website.png';
import tabletImage from '../assets/tablet.png';
import mobileImage from '../assets/mobile.png';

const Character = () => {
    return (
        // <section className="bg-white flex justify-center items-center">
        <div className="w-full mx-auto">
            <picture>
                {/* Image for laptop screens */}
                <source media="(min-width: 1024px)" srcSet={laptopImage} />

                {/* Image for tablet screens */}
                <source media="(min-width: 768px)" srcSet={tabletImage} />

                {/* Image for mobile screens */}
                <img
                    src={mobileImage}
                    alt="Responsive content"
                    className="w-full h-auto"
                    style={{ marginBottom: '-2px' }}
                />
            </picture>
        </div>
        // </section>
    );
};

export default Character;
