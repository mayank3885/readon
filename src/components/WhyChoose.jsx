import React, { useState } from 'react';
import { FaPuzzlePiece, FaUsers, FaChartLine } from 'react-icons/fa'; // Import icons
import whychoose1 from "../assets/why-choose-ReadON-1.png";
import whychoose2 from "../assets/why-choose-ReadON-2.png";
import whychoose3 from "../assets/why-choose-ReadON-3.gif";

const WhyChoose = () => {
  const [selected, setSelected] = useState('ReadON understands the needs');
  const [showVideo, setShowVideo] = useState(false);

  // Content for each option in "Why Choose ReadON?" section
  const content = {
    'ReadON understands the needs': {
      text: 'The standardized neurocognitive assessment in a convenient game-based format can be completed in 35-40 minutes on a computer or mobile device, eliminating the need for traditional pen-and-paper methods. The assessment explains why someone is good in mathematics or literacy.',
      image: whychoose1
    },
    'Personalized Intervention': {
      text: "The platform uses advanced technologies to tailor game-based therapy sessions to fit the learner's unique needs, providing targeted interventions that lead to improvement.",
      image: whychoose3
    },
    'Proven Results': {
      text: 'Experience noticeable improvements in just 3-4 months, with measurable progress in reading skills that you can track at home.',
      image: whychoose2
    },
    'Proven Results 2': {
      text: 'Experience noticeable improvements in just 3-4 months, with measurable progress in reading skills that you can track at home.',
      image: whychoose3
    }
  };

  // Icon mapping for each content option
  const icons = {
    'ReadON understands the needs': <FaPuzzlePiece className="text-3xl mr-2" />,
    'Personalized Intervention': <FaUsers className="text-3xl mr-2" />,
    'Proven Results': <FaChartLine className="text-3xl mr-2" />,
    'Proven Results 2': <FaChartLine className="text-3xl mr-2" />
  };

  return (
    <section id='whychooseus' className='bg-orange-500'>

      {/* Why Choose ReadON Section */}
      <div className="text-white py-16 px-8 relative w-full left-0">
        <div className="max-w-6xl mx-auto text-center" style={{ marginTop: '-10px' }}>
          <h2 className="font38-bold text-4xl font-semibold mb-8">Why Choose ReadON?</h2>

          {/* Tab Buttons in Horizontal Layout */}
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-8 button-container">
            {Object.keys(content).map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(item)}
                className={`filter-buttons rounded-2xl font20-bold font-bold border-2 ${selected === item ? 'bg-white text-orange-500' : 'bg-orange-500 hover:bg-orange-400'
                  }`}
              >
                <div className="filter">
                  {icons[item]} {/* Render the appropriate icon */}
                  <div className="flex flex-col justify-center">
                    <span className='justify-self-center'>{item}</span> {/* First part of text */}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Content with Image */}
          <div className="flex flex-col md:flex-row items-center text-[#f4f3f1] p-6 pl-0 text-left relative rounded-md gap-8">
            {/* Background Image Container */}
            <div
              className="w-full md:w-1/2 flex-shrink-0 rounded-lg min-h-[350px] relative flex items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${content[selected].image})`,
                backgroundSize: "150%"
              }}
            ></div>

            {/* Text Content */}
            <div className="flex-grow">
              <h3 className="font-semibold mb-4 font38-light">{selected}</h3>
              <p className="font18-light">{content[selected].text}</p>
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
              className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-600 focus:outline-none rounded-full p-1 text-sm z-10"
            >
              ✖️
            </button>

            {/* Video Embed */}
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/9qDRtQxd1uw?si=dCXFYLa2j4H-55TF"
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

export default WhyChoose;
