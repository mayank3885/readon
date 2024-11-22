import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// assets
import cognitiveAssessment from '../assets/cognitive-assessment.png';
import freeCounseling from '../assets/free-counseling.png';
import cognitiveTherapy from '../assets/cognitive-therapy.png';

// animation
import { Fade } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';

const ReadOnAtHome = () => {
    const navigate = useNavigate()

    return (
        <div id="howdoes" className="boxImg pt-16">
            {/* row section */}
            <div className="howdoes-info width-1800 equal-width">
                <h2 className="font38-bold font-semibold text-[#000000] text-center">How Does ReadON at Home Work?
                </h2>
                <Fade direction='up' damping={0.4} triggerOnce={true}>
                    <Row>
                        <div className='row-content p-4'>
                            <Col xs={12} sm={6} md={6} lg={6} className="mb-4 custom-column">
                                <div className="box-item">
                                    <div className="box-img">
                                        <div className="arrow dotted" style={{ width: '130px' }}></div>
                                        <img src={cognitiveAssessment} alt="cognitiveAssessment" />
                                    </div>
                                    <div className="box-para">
                                        <p className="font24-light">1.</p>
                                        <h4 className="font24-bold">Sign-Up and Setup</h4>
                                        <p className="font18-light mt-3">
                                        Register online, purchase the assessment and set up your account easily from home. Access the cognitive assessment on your preferred device computer, tablet, or smartphone.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6} className="mb-4 custom-column">
                                <div className="box-item">
                                    <div className="box-img">
                                        <div className="arrow dotted" style={{ width: '130px' }}></div>
                                        <img src={freeCounseling} alt="freeCounseling" />
                                    </div>
                                    <div className="box-para">
                                        <p className="font24-light">2.</p>
                                        <h4 className="font24-bold">Cognitive Assessment & Detailed Report</h4>
                                        <p className="font18-light mt-3">
                                        Begin with a comprehensive cognitive assessment for your child. Get a detailed report highlighting their strengths, areas for improvement, and specific skills for development.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6} className="mb-4 custom-column">
                                <div className="box-item">
                                    <div className="box-img">
                                        <img src={cognitiveTherapy} alt="cognitiveTherapy" />
                                    </div>
                                    <div className="box-para">
                                        <p className="font24-light">3.</p>
                                        <h4 className="font24-bold">FREE Counseling Session</h4>
                                        <p className="font18-light mt-3">
                                        Get detailed feedback on your child's cognitive profile to understand their unique abilities and identify specific skills for development.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6} className="mb-4 custom-column">
                                <div className="box-item">
                                    <div className="box-img">
                                        <img src={cognitiveTherapy} alt="cognitiveTherapy" />
                                    </div>
                                    <div className="box-para">
                                        <p className="font24-light">4.</p>
                                        <h4 className="font24-bold">FREE Counseling Session</h4>
                                        <p className="font18-light mt-3">
                                        Improve specific cognitive skills identified in the assessment through interactive sessions at home. Enhance reading and writing abilities with continuous progress monitoring and adjustments for optimal development.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <div className="flex items-center justify-center xs:justify-center" style={{ paddingBottom: '40px' }}>
                            <button
                                className="bg-[#F58220] font24-light hover:bg-[#E07B00] text-[#0B254C] font-bold text-md py-2 px-6 rounded-md transition duration-300 ease-in-out shadow-md btn btn-xs btn-shadow btn-orange"
                                onClick={() => navigate('/form')}>
                                Start an Assessment
                            </button>
                        </div>
                    </Row>
                </Fade>
            </div>
        </div>
    );
}

export default ReadOnAtHome;
