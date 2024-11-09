import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// assets
import signinsetup from '../assets/sign-in-setup.png'
import cognitiveAssessment from '../assets/cognitive-assessment.png'
import freeCounseling from '../assets/free-counseling.png'
import cognitiveTherapy from '../assets/cognitive-therapy.png'

// animation
import { Fade } from 'react-awesome-reveal';

const ReadOnAtHome = () => {
    return (
        <div id="howdoes" className='boxImg'>
            {/* row section */}
            <div className="howdoes-info">
                <h2 className='text-2xl font-semibold text-[#003049] text-center' style={{ fontFamily: 'Helvetica, Arial', fontSize: '24pt' }}>How Does ReadON at Home Work?</h2>
                <Fade cascade damping={0.4} triggerOnce={true}>
                    <Row className="justify-content-center" style={{ padding: '40px', background: '#fff6f4', marginTop: '50px', borderRadius: '20px' }}>
                        <Col md={6} lg={3} className="mb-4" style={{ width: '25%' }}>
                            <div className="box-item">
                                <div className="box-img">
                                    <div className="arrow dotted" style={{ 'width': '130px' }}></div>
                                    <img src={signinsetup} alt="signinsetup" />
                                </div>
                                <div className="box-para">
                                    <p>1.</p>
                                    <h4>Sign-Up and Setup</h4>
                                    <p>
                                        Register online, purchase the
                                        assessment and set up your
                                        account easily from home. Access
                                        the cognitive assessment on your
                                        preferred device computer, tablet,
                                        or smartphone.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="mb-4" style={{ width: '25%' }}>
                            <div className="box-item">
                                <div className="box-img">
                                    <div className="arrow dotted" style={{ 'width': '130px' }}></div>
                                    <img src={cognitiveAssessment} alt="cognitiveAssessment" />
                                </div>
                                <div className="box-para">
                                    <p>2.</p>
                                    <h4>Cognitive Assessment
                                        & Detailed Report</h4>
                                    <p>
                                        Begin with a comprehensive
                                        cognitive assessment for your
                                        child. Get a detailed report
                                        highlighting their strengths, areas
                                        for improvement, and specific
                                        skills for development.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="mb-4" style={{ width: '25%' }}>
                            <div className="box-item">
                                <div className="box-img">
                                    <div className="arrow dotted" style={{ 'width': '130px' }}></div>
                                    <img src={freeCounseling} alt="freeCounseling" />
                                </div>
                                <div className="box-para">
                                    <p>3.</p>
                                    <h4>FREE Counseling Session</h4>
                                    <p>
                                        Get detailed feedback on your
                                        child's cognitive profile to
                                        understand their unique
                                        abilities and identify specific
                                        skills for development.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={3} className="mb-4" style={{ width: '25%' }}>
                            <div className="box-item">
                                <div className="box-img">
                                    <img src={cognitiveTherapy} alt="cognitiveTherapy" />
                                </div>
                                <div className="box-para">
                                    <p>4.</p>
                                    <h4>Digital Cognitive Therapy</h4>
                                    <p>
                                        Improve specific cognitive skills
                                        identified in the assessment through
                                        interactive sessions at home. Enhance
                                        reading and writing abilities with
                                        continuous progress monitoring and
                                        adjustments for optimal development.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Fade>
            </div>
        </div>
    );
}

export default ReadOnAtHome;
