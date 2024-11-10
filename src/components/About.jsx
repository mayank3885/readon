import React from 'react';
import bottomFullImage from "../assets/2nd-Section.png";
// import wave3 from "../assets/wave5.png";

const About = () => {
  return (
    <section id="about" className="text-black" style={{
      // marginTop: '-70px',
      background: '#f58220',
      paddingTop: '90px',
      zIndex: '12',
    }}>
      {/* <div class="wave-container"></div> */}

      {/* <div class="custom-shape-divider-top-1731248450">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div> */}
      {/* < div className="wave-container" style={{
        position: 'relative',
        marginTop: '-45%',
        width: '100vw',
        marginLeft: '-1%',
        zIndex: 16,
      }}>
        <img src={wave3} alt="wave" className='relative' />
      </div > */}
      {/* Text Content Container */}
      < div className="container mx-auto pt-8 pb-6 text-center" style={{ marginTop: '-50px' }}>
        {/* Title */}
        < h2
          className="font-bold font38-bold mb-8 leading-tight max-w-4xl mx-auto"
          style={{ color: 'white' }}
        >
          We understand the challenges children face in developing strong reading skills.
        </h2 >

        {/* Body text */}
        < p className=" mx-auto font24-light leading-relaxed" style={{ color: 'white' }}>
          ReadON is an advanced digital cognitive therapy that begins with a comprehensive assessment to identify your child's unique cognitive reading challenges and strengths. This tailored approach ensures that your child receives the targeted neuroplasticity-based support they need to enhance their reading fluency, comprehension, and focus, helping them thrive academically.
        </p >
      </div >

      {/* Image Container */}
      < div className="h-auto w-full mb-4 -mt-12" >
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