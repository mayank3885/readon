import React from 'react';
import laptopImage from '../assets/website.png';
import tabletImage from '../assets/tablet.png';
import mobileImage from '../assets/mobile.png';
import { Fade } from 'react-awesome-reveal';

const Character = () => {
    return (
        // <section className="bg-white flex justify-center items-center">
        <div className="w-full mx-auto mt-20">
            <Fade direction="up" cascade damping={0.2} triggerOnce={true}>
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
            </Fade>
        </div>
        // </section>
    );
};

export default Character;
