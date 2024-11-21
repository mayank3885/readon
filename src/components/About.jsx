import React from 'react';
import bottomFullImage from "../assets/2nd-Section.png";
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
// import wave3 from "../assets/wave5.png";

const About = () => {
  const navigate = useNavigate()
  return (
    <section id="about" className="text-black md:pt-16 pt-8 pb-12 md:pb-0" style={{
      background: '#f58220',
      position: 'relative',
      zIndex: '15',
    }}>
      {/* Text Content Container */}
      <div
        className="container mx-auto pb-6 text-center width-1800 equal-width"
      >
        <Fade direction="up" cascade damping={0.2} triggerOnce={true}>
          {/* Title */}
          < h2
            className="font-bold font38-bold mb-8 leading-tight max-w-5xl mx-auto"
            style={{ color: 'white' }}
          >
            You care about your child’s development. We do, too!
          </h2 >

          {/* Body text */}
          < p className=" mx-auto font24-light leading-relaxed" style={{ color: 'white' }}>
            We understand the challenges children face in developing strong reading skills. Whether it’s difficulty focusing, struggling with reading comprehension, or low confidence, these hurdles can affect their learning journey.
          </p >

          < p className=" mx-auto mt-2 font24-light leading-relaxed" style={{ color: 'white' }}>
            ReadON is an advanced digital cognitive therapy that begins with a comprehensive assessment to identify your child’s unique cognitive reading challenges and strengths. This tailored approach ensures that your child receives the targeted neuroplasticity-based support they need to enhance their reading fluency, comprehension, and focus, helping them thrive academically.
          </p >

          <button
            className="bg-[#FFFFFF] hover:bg-[#ffe1cff7] font24-light text-white font-bold text-md py-2 px-6 rounded-md transition duration-300 ease-in-out shadow-md btn btn-xs mt-8"
            onClick={() => navigate('/form')}
            style={{ color: '#F58220' }}
          >
            Start your child’s assessment now!
          </button>
        </Fade>
      </div >

      {/* Image Container */}
      < div className="h-auto w-full mb-4 -mt-12 width-1800" style={{ margin: 'auto' }}>
        <img
          src={bottomFullImage}
          alt="Children with educational elements"
          className="w-full h-auto object-contain children-image"
          style={{ maxWidth: '85%', margin: '0 auto' }}
        />
      </div >
    </section >
  );
};

export default About;