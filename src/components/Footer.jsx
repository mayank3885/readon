import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CaretRightFill, EnvelopeFill, TelephoneForwardFill } from 'react-bootstrap-icons';
import { Fade } from 'react-awesome-reveal';
import { Link, NavLink } from 'react-router-dom';
import Facebook from '../assets/facebook.png';
import insta from '../assets/insta.png';
import linkdin from '../assets/linkdin.png';
import footer_logo from '../assets/logo32.png';

const Footer = () => {
  const handleClickTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div id="footer">
        {/* know section */}
        <div className="wrapper mt-10" style={{ background: '#fff6f4' }}>
          <Row className="flex justify-content-center width-1800 equal-width" style={{ paddingTop: '40px', borderRadius: '20px', margin: 'auto' }}>
            <Col md={12} lg={4} style={{ width: '43%' }}>
              <Fade direction="up" cascade damping={0.3} triggerOnce={true}>
                <div className="footer_logo mb-4">
                  <Link to="/">
                    <img src={footer_logo} alt="footer_logo" style={{ width: '70%' }} />
                  </Link>
                </div>
                <p className="font18-light address md:pr-24" style={{ lineHeight: '30px' }}>
                  ReadON Arabia is the regional office of ReadON.ai and is owned by Orange Neurosciences Canada. Orange Neurosciences is a next gen ML/AI Technology Company working on the Future of (Spec) EdTech & Medicine.
                </p>
              </Fade>
            </Col>

            <Col md={12} lg={4} style={{ width: '35%' }}>
              <div className="footer-info">
                <Fade direction="up" cascade damping={0.3} triggerOnce={true}>
                  <h6 className="font24-bold mt-8 md:mt-0">Our Offices</h6>

                  <h6 className="mt-5 font18-bold">Bahrain</h6>
                  <NavLink to="/readonathome" onClick={handleClickTop}>
                    <p className="mt-2 text-black flex font18-light">PO. Box 13707, Near Asgher Ali Perfumes</p>
                    <p className="font18-light">Muharraq, Bahrain</p>
                  </NavLink>
                  <ul className="mt-5 address-list">
                    <li className="mb-3">
                      <Row className="address-item">
                        <Col lg={1} md={1} xs={1}>
                          <EnvelopeFill className="address-icon" border="gray" size={17} />
                        </Col>
                        <Col lg={11} md={11} xs={11}>
                          <p className="font18-light text-primary-color">
                            <b>Email:</b>{' '}
                            <a href="mailto:info@readon-arabia.com" className="text-black">
                              info@readon-arabia.com
                            </a>
                          </p>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row className="address-item">
                        <Col lg={1} md={1} xs={1}>
                          <TelephoneForwardFill className="address-icon" size={17} />
                        </Col>
                        <Col lg={11} md={11} xs={11}>
                          <p className="font18-light text-primary-color">
                            <b>Phone:</b>{' '}
                            <a href="tel:+91-78386 68993" className="text-black">
                              +91-78386 68993
                            </a>
                          </p>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Fade>
              </div>
            </Col>

            <Col md={12} lg={4} style={{ width: '25%' }} className="align-content-center">
              <div className="footer-info">
                <Fade direction="up" cascade damping={0.3} triggerOnce={true}>
                  <h6 className="font24-bold mt-8 md:mt-0">Quick Links</h6>
                  <NavLink to="/privacy-policy">
                    <p className="mt-3 font18-light text-black flex">
                      <CaretRightFill color="black" size={18} className="mt-1" /> Privacy Policy
                    </p>
                  </NavLink>
                  <NavLink to="/refund-policy">
                    <p className="mt-3 font18-light text-black flex">
                      <CaretRightFill color="black" size={18} className="mt-1" /> Refund Policy
                    </p>
                  </NavLink>
                  <NavLink to="/terms-of-use">
                    <p className="mt-3 font18-light text-black flex">
                      <CaretRightFill color="black" size={18} className="mt-1" /> Terms Of Use
                    </p>
                  </NavLink>

                  <div className="social_icon mt-5">
                    <ul>
                      <li>
                        <Link to="https://www.facebook.com/ReadON.Arabia/?ref=page_internal" target="_blank">
                          <img src={Facebook} alt="Facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.instagram.com/readon.arabia/" target="_blank">
                          <img src={insta} alt="insta" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.linkedin.com/company/readon-arabia/" target="_blank">
                          <img src={linkdin} alt="linkdin" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Fade>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="wrapper" style={{ background: '#fff6f4' }}>
        <Row>
          <Col className="py-8">
            <p className="text-center font15" style={{ letterSpacing: '1.5px', color: 'rgb(57, 57, 60)' }}><i>Copyright © {new Date().getFullYear()} Orange Neurosciences Corporation</i></p>
          </Col>
        </Row>
      </div>

      <style jsx>{`
        @media (max-width: 1000px) {
          #footer .flex {
            display: flex;
            flex-wrap: wrap;
          }
          #footer .flex > div {
            flex: 1 100%; /* First and second columns take 50% width */
          }
          #footer .align-content-center {
            flex: 1 100%; /* Third column takes 100% width below the first two */
          }
        }
        .address-item {
          display: flex;
          align-items: center;
        }
        .address-icon {
          margin-right: 10px; /* Space between icon and text */
        }
        .address-item p {
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Footer;
