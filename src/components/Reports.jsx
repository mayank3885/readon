import React from 'react';
import report from '../assets/Reports.png'

// animation
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
    const navigate = useNavigate()

    return (
        <Fade direction='up' damping={0.4} triggerOnce={true}>
            <div id="reports" className="boxImg my-20 md:pt-0 pt-10" style={{ background: '#fff6f4' }}>
                {/* row section */}
                <div class="report-container width-1800 equal-width my-20" style={{ margin: 'auto' }}>
                    <div class="left font38-bold"><p className='mb-4'>Full report of the results after performing an assessment</p>
                        <button
                            className="bg-[#F58220] hover:bg-[#E07B00] font24-light text-[#0B254C] font-bold text-md py-2 px-6 rounded-md transition duration-300 ease-in-out shadow-md btn btn-xs btn-shadow btn-orange"
                            onClick={() => navigate('/form')}
                        >
                            Start now
                        </button>
                    </div>
                    <div class="right">
                        <div loading="lazy" class="sres_ffDrawPDF">
                            <img src={report} alt="reports" />
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default Reports;
