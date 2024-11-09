import React from 'react';
import wave3 from "../assets/wave4.png";
import hero from "../assets/hero.png";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full"
      style={{
        height: '1000px',
        paddingTop: '80px',
        overflow: 'hidden',
      }}
    >
      {/* Left Column: Text Content */}
      <div className="flex flex-col md:flex-row items-center justify-center z-10 relative">
        <div className="text-center md:text-left w-full md:w-1/2 max-w-2xl px-4 md:px-0 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-[3.5rem] font-extrabold text-[#023047] mb-4 leading-tight">
            <span className="flip-text block md:inline-block">
              <span>Read Better</span>
              <span>Learn Faster</span>
              <span>Achieve More</span>
            </span> with
            <span className="text-[#FB8500] pl-3">ReadON</span>
          </h1>
          <p className="text-lg md:text-xl text-[#555555] mb-4 md:mb-8 w-full md:w-3/4 mx-auto md:mx-0">
            Transform Your Child's Reading Journey with ReadON Digital Cognitive Assessment & Therapies
          </p>
          <button
            className="bg-[#F58220] hover:bg-[#E07B00] text-white font-bold text-md py-2 px-6 rounded-md transition duration-300 ease-in-out shadow-md btn btn-xs btn-shadow btn-orange"
            onClick={() => alert("Assessment Started")}
          >
            Start an Assessment
          </button>
        </div>

        {/* Right Column: Hero Image */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 px-4 md:px-0 flex justify-center md:justify-end">
          <img
            src={hero}
            alt="hero"
            className="relative"
          />
        </div>
      </div>

      {/* Wave Background Image */}
      <div
        className="relative w-screen h-80 md:h-[42rem] bg-cover bg-center z-20"
        style={{
          backgroundImage: `url(${wave3})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
          marginTop: '-300px',
        }}
      ></div>
    </section>
  );
};

export default Home;
