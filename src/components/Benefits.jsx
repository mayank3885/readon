import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import '../../src/Benefits.css';
import specialshapde from "../assets/special-shape.png";
import { useNavigate } from 'react-router-dom';

const Benefits = () => {
  const navigate = useNavigate();

  return (
    <section
      className='px-4'
      id="benefits"
      style={{ background: '#F8F5F4', paddingTop: '70px', paddingBottom: '75px' }}
    >
      <div className="relative flex items-center justify-center" style={{ maxWidth: '1600px', margin: 'auto' }}>
        {/* Special Shape Image */}
        <div
          className="relative  top-0 w-[40rem] h-[45rem] mt-3 opacity-100 lg:w-[600px] lg:h-[500px] lg:left-[4%] lg:-top-2 special-shape-img"
          style={{
            backgroundImage: `url(${specialshapde})`,
            backgroundSize: '150%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minWidth: '500px'
          }}
        ></div>

        {/* Content Container */}
        <div className="benefits-content mx-auto mr-0  px-0 md:px-6 text-center lg:text-left lg:max-w-3xl relative z-10 lg:ml-auto lg:mr-20 lg:-top-2">
          <h2 style={{ color: 'hsl(240deg 2.76% 22.88%)' }} className="mb-10 text-left font38-bold">
            Who Benefits from <span className="text-[#FB8500]">ReadON?</span>
          </h2>

          {/* Benefits List */}
          <ul className="space-y-6 text-left text-gray-700">
            {/* Benefit Item 1 */}
            <li className="flex items-start space-x-4">
              <FaCheckCircle style={{ color: 'hsl(240deg 2.76% 22.88%)' }} className="text-3xl mt-1" /> {/* Set icon size to 3xl */}
              <div>
                <p className="font-semibold text-lg font20-light text-[#FB8500]" style={{ textAlign: 'left' }}>Children facing reading difficulties:
                  <span className='text-black font-normal'> Unlock reading fluency and focus with targeted interventions.</span></p>
              </div>
            </li>

            {/* Benefit Item 2 */}
            <li className="flex items-start space-x-4">
              <FaCheckCircle style={{ color: 'hsl(240deg 2.76% 22.88%)' }} className="text-5xl mt-1" /> {/* Set icon size to 3xl */}
              <div>
                <p className="font-semibold text-lg font20-light text-[#FB8500]" style={{ textAlign: 'left' }}>Learners with ADHD, dyslexia, or other cognitive challenges:
                  <span className='text-black font-normal'> We provide specialized strategies that cater to diverse learning needs, helping children succeed.</span></p>
              </div>
            </li>

            {/* Benefit Item 3 */}
            <li className="flex items-start space-x-4">
              <FaCheckCircle style={{ color: 'hsl(240deg 2.76% 22.88%)' }} className="text-4xl mt-1" /> {/* Set icon size to 3xl */}
              <div>
                <p className="font-semibold text-lg font20-light text-[#FB8500]" style={{ textAlign: 'left' }}>Adults looking to improve literacy skills:
                  <span className='text-black font-normal'> Achieve personal or professional goals through better reading and comprehension.</span></p>
              </div>
            </li>
          </ul>

          {/* Call-to-Action Button */}
          <div className="flex items-center justify-start xs:justify-center" style={{ paddingTop: '40px' }}>
            <button
              className="bg-[#F58220] font20-light hover:bg-[#E07B00] text-[#0B254C] font-bold text-md py-2 px-6 rounded-md transition duration-300 ease-in-out shadow-md btn btn-xs btn-shadow btn-orange"
              onClick={() => navigate('/form')}
            >
              Start an Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
