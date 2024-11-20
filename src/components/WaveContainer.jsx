import React from "react";
import wave from '../assets/Hero-wave.png'

const WaveComponent = () => {
    return (
        <div className="wave-container">
            <img src={wave} alt="wave" className="w-screen" />
        </div>
    );
};

export default WaveComponent;
