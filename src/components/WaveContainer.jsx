import React from "react";
import wave from "../assets/Hero-wave.png";
import bigWave from "../assets/Hero-wave-big.png";
import smallWave from "../assets/hero-small.png";
import { Fade } from "react-awesome-reveal";

const WaveComponent = () => {
    return (
        <div className="wave-container">
            <Fade direction="up" damping={0.1} triggerOnce={true}>
                <picture>
                    {/* Image for bigger screens */}
                    <source media="(min-width: 1600px)" srcSet={bigWave} />

                    {/* Image for laptop screens */}
                    <source media="(min-width: 1024px)" srcSet={wave} />

                    {/* Image for tablet screens */}
                    <source media="(min-width: 768px)" srcSet={smallWave} />

                    {/* Fallback image for mobile */}
                    <img
                        src={wave}
                        alt="wave"
                        className="wave-image"
                    />
                </picture>
            </Fade>
        </div>
    );
};

export default WaveComponent;
