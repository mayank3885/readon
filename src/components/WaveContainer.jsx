import React from "react";
import wave from '../assets/Hero-wave.png'
import { Fade } from "react-awesome-reveal";

const WaveComponent = () => {
    return (
        <div className="wave-container">
            <Fade direction='up' damping={0.4} triggerOnce={true}>
                <img src={wave} alt="wave" className="w-full relative" style={{ marginBottom: '-2px', zIndex: '-5' }} />
            </Fade>
        </div>
    );
};

export default WaveComponent;
