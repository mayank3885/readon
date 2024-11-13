import React from "react";

const WaveComponent = () => {
    return (
        <div className="wave-container">
            <svg
                id="wave"
                style={{ transform: "rotate(0deg)", transition: "0.3s" }}
                viewBox="0 0 1440 220"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                        <stop stopColor="rgba(245, 130, 32, 1)" offset="0%" />
                        <stop stopColor="rgba(245, 130, 32, 1)" offset="100%" />
                    </linearGradient>
                </defs>
                <path
                    style={{ transform: "translate(0, 0px)", opacity: 1 }}
                    fill="url(#sw-gradient-0)"
                    d="M0,154L60,146.7C120,139,240,125,360,124.7C480,125,600,139,720,124.7C840,110,960,66,1080,47.7C1200,29,1320,37,1440,36.7C1560,37,1680,29,1800,29.3C1920,29,2040,37,2160,40.3C2280,44,2400,44,2520,66C2640,88,2760,132,2880,146.7C3000,161,3120,147,3240,150.3C3360,154,3480,176,3600,172.3C3720,169,3840,139,3960,132C4080,125,4200,139,4320,150.3C4440,161,4560,169,4680,146.7C4800,125,4920,73,5040,47.7C5160,22,5280,22,5400,51.3C5520,81,5640,139,5760,146.7C5880,154,6000,110,6120,95.3C6240,81,6360,95,6480,99C6600,103,6720,95,6840,91.7C6960,88,7080,88,7200,80.7C7320,73,7440,59,7560,44C7680,29,7800,15,7920,25.7C8040,37,8160,73,8280,84.3C8400,95,8520,81,8580,73.3L8640,66L8640,220L8580,220C8520,220,8400,220,8280,220C8160,220,8040,220,7920,220C7800,220,7680,220,7560,220C7440,220,7320,220,7200,220C7080,220,6960,220,6840,220C6720,220,6600,220,6480,220C6360,220,6240,220,6120,220C6000,220,5880,220,5760,220C5640,220,5520,220,5400,220C5280,220,5160,220,5040,220C4920,220,4800,220,4680,220C4560,220,4440,220,4320,220C4200,220,4080,220,3960,220C3840,220,3720,220,3600,220C3480,220,3360,220,3240,220C3120,220,3000,220,2880,220C2760,220,2640,220,2520,220C2400,220,2280,220,2160,220C2040,220,1920,220,1800,220C1680,220,1560,220,1440,220C1320,220,1200,220,1080,220C960,220,840,220,720,220C600,220,480,220,360,220C240,220,120,220,60,220L0,220Z"
                ></path>
            </svg>
        </div>
    );
};

export default WaveComponent;
