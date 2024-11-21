import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';

const ReadingJourney = () => {
    const navigate = useNavigate()

    return (
        <section
            id="journey"
            className="pt-10"
            style={{ background: '#f0870b', minHeight: '250px' }}
        >
            <Fade direction="up" cascade damping={0.2} triggerOnce={true}>
                <div className="content flex width-1800 equal-width" style={{ flexDirection: 'column', alignItems: 'center', color: 'white', margin: 'auto' }}>
                    <h1 className='font38-bold text-center mb-3'>Your child’s success is our priority. Let’s make it happen together</h1>
                    <button
                        className="bg-[#FFFFFF] hover:bg-[#ffe1cff7] font24-light text-white font-bold text-md py-2 px-6 rounded-md transition duration-300 ease-in-out shadow-md btn btn-xs mt-8"
                        onClick={() => navigate('/form')}
                        style={{ color: '#F58220' }}
                    >
                        Start an Assessment
                    </button>
                </div>
            </Fade>
        </section>
    );
};

export default ReadingJourney;
