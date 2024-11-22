import React from 'react';
import report from '../assets/Reports.png'
import scienceBacked from '../assets/science-backed.png'

// animation
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
    const navigate = useNavigate()

    return (
        <Fade direction='up' damping={0.4} triggerOnce={true}>
            <div id="reports" className="boxImg py-10 mt-10" style={{ background: '#fff6f4' }}>
                {/* row section */}
                <div class="report-container width-1800 flex flex-row md:flex-col equal-width my-20" style={{ margin: 'auto' }}>
                    <div class="left py-10 font38-bold"><p className='mb-4'>Noticeable Improvements in Just 3-4 Months!</p>
                        <p className='font24-light mb-3'>With ReadON, results aren’t just promised — they’re delivered. Most children show significant improvements in reading fluency, comprehension, and focus within 3-4 months. We provide regular progress reports, so you can see and measure how your child is thriving.</p>

                        <div className='flex items-start my-2'>
                            <img src={scienceBacked} alt="100% Satisfaction Guaranteed" className='w-100' style={{ height: '70px', objectFit: 'contain' }} />
                        </div>
                        <button
                            className="bg-[#F58220] hover:bg-[#E07B00] font24-light text-[#0B254C] font-bold text-md py-2 px-6 rounded-md transition duration-300 ease-in-out shadow-md btn btn-xs btn-shadow btn-orange"
                            onClick={() => navigate('/form')}
                        >
                            Start now
                        </button>
                    </div>
                    <div class="right">
                        <div className='img-container relative md:absolute' style={{ bottom: 0, right: 0, width: '60%' }}>
                            <img src={report} alt="reports" />
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default Reports;
