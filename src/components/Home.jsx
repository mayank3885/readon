import React from 'react';
import hero from "../assets/hero.png";
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const Home = () => {
  const navigate = useNavigate()

  return (
    <section
      id="home"
      className="relative w-full"
      style={{
        paddingTop: '80px',
        overflow: 'hidden',
      }}
    >
      {/* Left Column: Text Content */}
      <Fade direction="up" cascade damping={1} triggerOnce={true}>
        <div
          className="flex flex-col md:flex-row items-center relative md:min-h-[600px] width-1800"
          style={{ justifyContent: 'space-between', margin: 'auto' }}
        >
          <div className="text-center md:text-left w-full md:w-1/2 max-w-2xl px-4 md:px-0 mt-8 md:mt-0 flex" style={{ justifyContent: 'center' }}>
            <div className='content-container'>
              <h1 className="font56-bold md:text-[3.5rem] font-extrabold mb-4 leading-tight" style={{ color: 'hsl(240deg 2.76% 22.88%)' }}>
                <span className="flip-text block md:inline-block">
                  <span>Read Better</span>
                  <span>Learn Faster</span>
                  <span>Achieve More</span>
                </span> <span className='with-readon'>with</span>
                <span className="text-[#FB8500] pl-3 with-readon">ReadON</span>
              </h1>
              <p className="mb-4 md:mb-8 w-full md:w-3/4 mx-auto md:mx-0 font20-light">
                Digital Cognitive Assessment & Therapy Tailored for Your Child’s Success
              </p>
              <button
                className="bg-[#F58220] relative font24-light hover:bg-[#E07B00] text-white font-bold text-md py-2 px-6 rounded-md transition duration-300 ease-in-out shadow-md btn btn-xs btn-shadow btn-orange"
                onClick={() => navigate('/form')}
                style={{ zIndex: '23' }}
              >
                Learn More About ReadON
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Home;
