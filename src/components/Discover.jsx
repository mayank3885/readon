import React, { useState } from 'react';
import youtubethumbnail from "../assets/thumnl.png";
import { useNavigate } from 'react-router-dom';
// import provenResults from '../assets/provenResults.png'
import play from '../assets/play.png'

const Discover = () => {
    const [showVideo, setShowVideo] = useState(false);
    const navigate = useNavigate()

    return (
        <section id='discover' className='bg-white equal-width width-1800' style={{ margin: 'auto' }}>
            {/* Discover How ReadON Works Section */}
            <div className=" bg-white md:py-20 py-12">
                <div className="flex items-center justify-between discover-container">
                    <div className="text-left">
                        <h2 className="font-bold mb-4 text-center md:text-left font38-bold" style={{ color: 'hsl(240deg 2.76% 22.88%)' }}>
                            Discover How <span className="text-orange-500">ReadON</span> Works
                        </h2>

                        <ul className='ml-6'>
                            <li className='font24-light list-disc'>Identify cognitive strengths and challenges.</li>
                            <li className='font24-light list-disc'>Start therapy sessions based on unique needs.</li>
                            <li className='font24-light list-disc'>Monitor and celebrate progress together.</li>
                        </ul>

                        {/* The Start button is here in desktop */}
                        <div className="flex items-center pt-2 md:pt-0 mt-5">
                            <button
                                className="bg-[#F58220] hover:bg-[#E07B00] font24-light text-[#0B254C] font-bold text-md py-2 px-6 rounded-md transition duration-300 ease-in-out shadow-md btn btn-xs btn-shadow btn-orange"
                                onClick={() => navigate('/form')}
                            >
                                Start now
                            </button>
                        </div>
                    </div>

                    {/* Video Placeholder with Thumbnail Background and Play Button */}
                    <div className="relative  md:w-1/2 flex items-center justify-end">
                        <div
                            className="relative w-full h-64 md:h-96 flex items-center justify-center thumbnail"
                            style={{
                                backgroundImage: `url(${youtubethumbnail})`,
                                backgroundColor: '#f7b481',
                                borderRadius: '100px',
                                backgroundSize: 'contain', // Use "contain" to ensure the entire image is visible
                                backgroundRepeat: 'no-repeat', // Prevent the image from repeating
                                backgroundPosition: 'center', // Center the image in the div,
                                maxWidth: '600px',
                                minWidth: '300px'
                            }}
                        >
                            <button
                                onClick={() => setShowVideo(true)}
                                className="bg-white text-orange-500 rounded-full shadow-lg hover:bg-gray-200 transition"
                            >
                                <img src={play} alt="" style={{ width: '50px' }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Popup */}
            {showVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl overflow-hidden">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute top-2 right-2 focus:outline-none rounded-full p-1 text-sm z-10"
                            style={{ background: 'white' }}
                        >
                            ✖️
                        </button>

                        {/* Video Embed */}
                        <div className="relative pb-[56.25%]">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/r7JngZSjCDc"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Discover;
