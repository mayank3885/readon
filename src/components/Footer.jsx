import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// img
import Facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'
import linkdin from '../assets/linkdin.png'

import { Envelope, EnvelopeFill, TelephoneForwardFill, CaretRightFill } from 'react-bootstrap-icons';
import footer_logo from '../assets/logo3.png';
import { Fade } from 'react-awesome-reveal';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {

  const handleClickTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <>
      <div id="footer">
        {/* know section */}
        <div className="wrapper mt-10">
          <hr />
          <Row className="flex justify-content-center" style={{ padding: '40px', borderRadius: '20px' }}>
            <Col md={12} lg={4} style={{ width: '50%' }}>
              <Fade direction='up' cascade damping={0.3} triggerOnce={true} style={{ width: '80%' }}>
                <div className="footer_logo mb-4">
                  <Link to='/'> <img src={footer_logo} alt="footer_logo" style={{ width: '70%' }} /></Link>
                </div>
                <p className="font18-light address">A Section 8 company dedicated to
                  creating awareness and providing
                  services to people struggling to
                  read and learn.
                </p>
                <ul className='mt-5 address-list'>
                  <li className='mb-3 '>
                    <Row className='flex'>
                      <Col lg={1} md={1} xs={1}><EnvelopeFill className='address-icon' border="gray" size={17} /></Col>
                      <Col lg={11} md={11} xs={11}><p className='font18-light text-primary-color pl-4'> <b> Email:</b> <a href="mailto:info@readingmatters.in" className='text-black'>info@readingmatters.in</a></p></Col>
                    </Row>
                  </li>
                  <li >
                    <Row className='flex'>
                      <Col lg={1} md={1} xs={1}><TelephoneForwardFill className='address-icon' size={17} /></Col>
                      <Col lg={11} md={11} xs={11}><p className='font18-light text-primary-color pl-4'>  <b> Phone:</b ><a href="tel:+91-78386 68993" className='text-black'> +91-78386 68993 </a></p></Col>
                    </Row>
                  </li>

                </ul>
              </Fade>
            </Col>
            <Col md={12} lg={4} style={{ width: '35%' }}>
              <div className="footer-info">
                <Fade direction='up' cascade damping={0.3} triggerOnce={true}>
                  <h6 className='font24-bold'>
                    Our Offices
                  </h6>
                  <h6 className='font20-bold'>
                    India
                  </h6>
                  <NavLink to="/readonathome" onClick={handleClickTop}>
                    <p className='mt-2 text-black flex font18-light'>Kendriya Vihar, Sector 56, Gurugram,</p>
                    <p className='font18-light'>Haryana 122011</p>
                  </NavLink>
                  <NavLink to="/privacypolicy" target='_blank'>
                    <p className='mt-1 text-black flex font18-light'> +91-78386 68993</p>
                  </NavLink>

                  <h6 className='mt-5 font20-bold' >
                    Bahrain
                  </h6>
                  <NavLink to="/readonathome" onClick={handleClickTop}>
                    <p className='mt-2 text-black flex font18-light'>PO. Box 13707, Near Asgher Ali Perfumes</p>
                    <p className='font18-light'>Muharraq, Bahrain</p>
                  </NavLink>
                  <NavLink to="/privacypolicy" target='_blank'>
                    <p className='mt-1 text-black flex font18-light'> +973-17368568</p>
                  </NavLink>
                </Fade>
              </div>
            </Col>
            <Col md={12} lg={4} style={{ width: '35%' }} className="align-content-center ">
              <div className="footer-info">
                <Fade direction='up' cascade damping={0.3} triggerOnce={true}>
                  <h6 className='font24-bold'>
                    Quick Links
                  </h6>
                  <NavLink to="/readonathome" onClick={handleClickTop}>
                    <p className='mt-3 font18-light text-black flex'>
                      <CaretRightFill color="black" size={18} className='mt-1' /> ReadON At Home</p>
                  </NavLink>
                  <NavLink to="/privacypolicy" target='_blank'>
                    <p className='mt-3 font18-light text-black flex'>
                      <CaretRightFill color="black" size={18} className='mt-1' /> Privacy Policy</p>
                  </NavLink>
                  <NavLink to="/refundpolicy" target='_blank'>
                    <p className='mt-3 font18-light text-black flex'>
                      <CaretRightFill color="black" size={18} className='mt-1' /> Refund Policy</p>
                  </NavLink>
                  <NavLink to="/termsofuse" target='_blank'>
                    <p className='mt-3 font18-light text-black flex'>
                      <CaretRightFill color="black" size={18} className='mt-1' /> Terms Of Use</p>
                  </NavLink>

                  <div className='subscribe mt-5'>
                    <p className='weight800 font18-light ' style={{ fontSize: '20px', fontWeight: '900' }}>Get Monthly Update</p>
                    <div className='subscribe-list'>
                      <input type='text' placeholder='Enter Your Email' className='form-control' />
                      <button type='submit' className='envbtn'><Envelope className='subscribe-icon' border="gray" size={32} /></button>
                    </div>
                  </div>

                  <div className='social_icon mt-5'>
                    <ul>
                      <li>
                        <Link to="https://www.facebook.com/search/top?q=reading%20matters%20foundations" target="_blank">
                          <img src={Facebook} alt="Facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.instagram.com/readingmattersfoundations/" target="_blank">
                          <img src={insta} alt="insta" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.linkedin.com/company/reading-matters-foundation/" target="_blank">
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

        {/* know section */}
      </div>
      <div className="wrapper">
        <Row>
          <Col className='mb-4'>
            <p className='text-center font15'>© {new Date().getFullYear()} by Reading Matters Foundation</p>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Footer