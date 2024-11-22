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
                <h2 className="font38-bold font-semibold text-[#000000] text-center">With ReadON, Success is as Easy as 1-2-3!</h2>
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
                                        <h4 className="font24-bold">ReadON Cognitive Assessment</h4>
                                        <p className="font18-light mt-3">
                                            This digital neuropsychological evaluation assesses cognitive abilities and overall wellness, measuring attention span, memory, reasoning, planning, and coordination while comparing results to peers of the same age and gender.
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
                                        <h4 className="font24-bold">ReadON Cognitive Therapy Sessions</h4>
                                        <p className="font18-light mt-3">
                                            Our sessions utilize interactive exercises designed to enhance attention, working memory, and executive functions that improve reading/writing fluency and comprehension, tailored to the learner's unique needs.
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
                                        <h4 className="font24-bold">Progress Monitoring and Guidance</h4>
                                        <p className="font18-light mt-3">
                                            Continuous tracking of progress ensures learners stay on course to meet their objectives, with regular feedback to adjust strategies as necessary.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <div className="flex items-center justify-center xs:justify-center" style={{ paddingBottom: '40px' }}>
                            <button
                                className="bg-[#F58220] font24-light hover:bg-[#E07B00] text-[#0B254C] font-bold text-md py-2 px-6 rounded-md transition duration-300 ease-in-out shadow-md btn btn-xs btn-shadow btn-orange"
                                onClick={() => navigate('/form')}
                            >
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
