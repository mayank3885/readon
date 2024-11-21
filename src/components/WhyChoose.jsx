import React, { useState } from 'react';
// import { FaPuzzlePiece, FaUsers, FaChartLine } from 'react-icons/fa'; // Import icons
import whychoose1 from "../assets/why-choose-ReadON-1.png";
import whychoose2 from "../assets/why-choose-ReadON-2.png";
import whychoose3 from "../assets/why-choose-ReadON-3.gif";
import whychoose4 from "../assets/why-choose-readON-4.png";
// import { FaHandHoldingDollar } from 'react-icons/fa6';
import { Fade } from 'react-awesome-reveal';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const WhyChoose = () => {
  // const [selected, setSelected] = useState('ReadON understands the needs');
  const [showVideo, setShowVideo] = useState(false);
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initial check for mobile

  const navigate = useNavigate()

  // Update `isMobile` on window resize
  // useEffect(() => {
  //   const handleResize = () => setIsMobile(window.innerWidth < 768);
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <section id='whychooseus' style={{ background: 'rgb(248, 245, 244)' }}>
      {/* Why Choose ReadON Section */}
      <div className="text-black py-8 md:py-24 md:mt-12 relative w-full left-0">
        <div className="equal-width width-1800 mx-auto text-center" style={{ marginTop: '-10px' }}>
          <Fade direction="up" cascade damping={0.4} triggerOnce={true}>
            <h2 className="font38-bold text-4xl font-semibold mb-10">Discover What Sets <span className="text-[#FB8500]">ReadON</span> Apart</h2>

            <div className="wrapper">
              <div className="readonkey-info">
                <Fade cascade damping={0.4} triggerOnce={true}>
                  <Row className="readonkey-box flex text-left md:flex-row flex-col justify-between items-center" style={{ gap: '15px' }}>
                    <Col md={12} lg={6} className="align-content-center">
                      <div className="hero-info">
                        <h3 className="font24-bold textHeading padding10 text-ternary-color">
                          1. Convenient, Game-Based Assessment:
                        </h3>
                        <p className="readonPara font24-light">
                          Complete in 35-40 minutes from home on any device. No more lengthy, traditional tests.
                        </p>
                      </div>
                    </Col>
                    <Col md={12} lg={6}>
                      <div className="shape">
                        <div className="readonkey-image ml-auto">
                          <img src={whychoose1} alt="gain" />
                        </div>
                      </div>
                    </Col>
                  </Row>


                  <Row className="flex-row-reverse padding20 readonkey-box md:flex-row-reverse flex-col flex text-left justify-between items-center" style={{ gap: '15px' }}>
                    <Col md={12} lg={6} className="align-content-center">
                      <div className="hero-info">
                        <h3 className="font24-bold textHeading text-ternary-color">
                          2. Personalized Intervention
                        </h3>
                        <p className='readonPara font24-light'>
                          The platform uses advanced technologies to tailor game-based therapy sessions to fit the learner's unique needs, providing targeted interventions that lead to improvement.
                        </p>
                      </div>
                    </Col>
                    <Col md={12} lg={6} >
                      <div className="shape action">
                        <div className="readonkey-image mr-auto">
                          <img src={whychoose2} alt="action" />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  {/* partnership section */}
                  <Row className="readonkey-box flex text-left md:flex-row flex-col justify-between items-center" style={{ gap: '15px' }}>
                    <Col md={12} lg={6} className="align-content-center">
                      <div className="hero-info">
                        <h3 className="font24-bold textHeading  text-ternary-color">
                          3. Proven Results
                        </h3>
                        <p className='readonPara font24-light'>
                          Experience noticeable improvements in just 3-4 months, with measurable progress in reading skills that you can track at home.
                        </p>
                      </div>
                    </Col>
                    <Col md={12} lg={6} >
                      <div className="shape action">
                        <div className="readonkey-image ml-auto">
                          <img src={whychoose3} alt="laptop" />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row className="flex-row-reverse padding20 md:flex-row-reverse flex-col readonkey-box flex text-left justify-between items-center" style={{ gap: '15px' }}>
                    <Col md={12} lg={6} className="align-content-center">
                      <div className="hero-info">
                        <h3 className="font24-bold textHeading text-ternary-color">
                          4.	Affordable Cognitive Support
                        </h3>
                        <p className='readonPara font24-light'>
                          ReadON provides affordable, high-quality cognitive therapy, making it accessible to more families, especially those with neurodiverse children. Its budget-friendly digital approach ensures effective support without financial strain, bridging the gap between need and access.
                        </p>
                      </div>
                    </Col>
                    <Col md={12} lg={6} >
                      <div className="shape action">
                        <div className="readonkey-image mr-auto">
                          <img src={whychoose4} alt="action" />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={12} lg={12} >
                      <button
                        className="bg-[#F58220] hover:bg-[#E07B00] font24-light text-[#0B254C] font-bold text-md py-2 px-6 rounded-md transition duration-300 ease-in-out shadow-md btn btn-xs btn-shadow btn-orange"
                        onClick={() => navigate('/form')}
                      >
                        Buy assessment now!
                      </button>
                    </Col>
                  </Row>
                </Fade>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      {/* Video Popup */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-600 focus:outline-none rounded-full p-1 text-sm z-10"
            >
              ✖️
            </button>

            {/* Video Embed */}
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/9qDRtQxd1uw?si=dCXFYLa2j4H-55TF"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyChoose;
