import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReadingJourney = () => {
    const navigate = useNavigate()

    return (
        <section
            id="journey"
            className="relative flex items-center justify-center"
            style={{ background: '#f0870b', minHeight: '320px' }}
        >
            <div className="content flex" style={{ flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                <h1 className='font38-bold text-center mb-3'>Start Your Childs Reading Journey Today!</h1>
                <p className='font20-light text-center'>Help your child unlock their full potential with ReadON. Experience how our innovative cognitive therapy can transform their reading skills and confidence.</p>
                <button
                    className="bg-[#FFFFFF] hover:bg-[#ffe1cff7] font24-light text-white font-bold text-md py-2 px-6 rounded-md transition duration-300 ease-in-out shadow-md btn btn-xs mt-8"
                    onClick={() => navigate('/form')}
                    style={{ color: '#F58220' }}
                >
                    Start an Assessment
                </button>
            </div>
        </section>
    );
};

export default ReadingJourney;
