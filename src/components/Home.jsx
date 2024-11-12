import React from 'react';
import hero from "../assets/hero.png";
import { useNavigate } from 'react-router-dom';

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
      <div className="flex flex-col md:flex-row items-center md:justify-center z-10 relative content-container">
        <div className="text-center md:text-left w-full md:w-1/2 max-w-2xl px-4 md:px-0 mt-8 md:mt-0">
          <h1 className="font56-bold md:text-[3.5rem] font-extrabold mb-4 leading-tight" style={{ color: 'hsl(240deg 2.76% 22.88%)' }}>
            <span className="flip-text block md:inline-block">
              <span>Read Better</span>
              <span>Learn Faster</span>
              <span>Achieve More</span>
            </span> <span className='with-readon'>with</span>
            <span className="text-[#FB8500] pl-3 with-readon">ReadON</span>
          </h1>
          <p className="mb-4 md:mb-8 w-full md:w-3/4 mx-auto md:mx-0 font20-light">
            Transform Your Child's Reading Journey with ReadON Digital Cognitive Assessment & Therapies
          </p>
          <button
            className="bg-[#F58220] font24-light hover:bg-[#E07B00] text-white font-bold text-md py-2 px-6 rounded-md transition duration-300 ease-in-out shadow-md btn btn-xs btn-shadow btn-orange"
            onClick={() => navigate('/form')}
          >
            Start an Assessment
          </button>

        </div>

        {/* Right Column: Hero Image */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 px-4 md:px-0 flex justify-center md:justify-end">
          <img
            src={hero}
            alt="hero"
            className="relative z-0"
          />
        </div>
      </div>

    </section>
  );
};

export default Home;
