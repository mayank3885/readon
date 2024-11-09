import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import '../../src/Benefits.css';
import specialshapde from "../assets/special-shape.png";

const ReadingJourney = () => {
    return (
        <section
            id="benefits"
            className="relative flex items-center justify-center pt-24"
            style={{ background: 'rgba(245, 130, 32, 1)', marginTop: '130px' }}
        >
            <div className="content flex" style={{ flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                <h1 style={{ fontSize: '34px', fontWeight: '700' }}>Start Your Childs Reading Journey Today!</h1>
                <p>Help your child unlock their full potential with ReadON. Experience how our innovative cognitive therapy can transform their reading skills and confidence.</p>
                <button
                    className="bg-[#FFFFFF] hover:bg-[#ffe1cff7] text-white font-bold text-md py-2 px-6 rounded-md transition duration-300 ease-in-out shadow-md btn btn-xs btn-shadow-inverse mt-8"
                    onClick={() => alert("Assessment Started")}
                    style={{ color: '#F58220' }}
                >
                    Start an Assessment
                </button>
            </div>
        </section>
    );
};

export default ReadingJourney;
