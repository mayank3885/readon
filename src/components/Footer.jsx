import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// img
import Facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'
import linkdin from '../assets/linkdin.png'

import { Envelope, EnvelopeFill, GeoAltFill, TelephoneForwardFill, CaretRightFill } from 'react-bootstrap-icons';
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
        <div className="wrapper">
          <Row className="flex justify-content-center" style={{ padding: '40px', marginTop: '50px', borderRadius: '20px' }}>
            <Col md={12} lg={4}>
              <Fade direction='up' cascade damping={0.3} triggerOnce={true}>
                <div className="footer_logo">
                  <Link to='/'> <img src={footer_logo} alt="footer_logo" /></Link>
                </div>
                <p className="font15 address">A Section 8 company dedicated to
                  creating awareness and providing
                  services to people struggling to
                  read and learn.
                </p>
                <ul className='mt-5 address-list'>
                  <li className='mb-2'>
                    <Row>
                      <Col lg={1} md={1} xs={1}><GeoAltFill className='address-icon' size={17} /></Col>
                      <Col lg={11} md={11} xs={11}><p className='font15 text-primary-color tetx-black'> <b> Address:</b> Kendriya Vihar, Sector 56, Gurugram, Haryana 122011</p></Col>
                    </Row>
                  </li>
                  <li className='mb-3'>
                    <Row>
                      <Col lg={1} md={1} xs={1}><EnvelopeFill className='address-icon' border="gray" size={17} /></Col>
                      <Col lg={11} md={11} xs={11}><p className='font15 text-primary-color'> <b>Email:</b> <a href="mailto:info@readingmatters.in" className='text-black'>info@readingmatters.in</a></p></Col>
                    </Row>
                  </li>
                  <li >
                    <Row>
                      <Col lg={1} md={1} xs={1}><TelephoneForwardFill className='address-icon' size={17} /></Col>
                      <Col lg={11} md={11} xs={11}><p className='font15 text-primary-color'>  <b>Phone:</b ><a href="tel:+91-78386 68993" className='text-black'> +91-78386 68993 </a></p></Col>
                    </Row>
                  </li>

                </ul>
              </Fade>
            </Col>
            <Col md={12} lg={4}></Col>
            <Col md={12} lg={4} className="align-content-center ">
              <div className="footer-info">
                <Fade direction='up' cascade damping={0.3} triggerOnce={true}>
                  <h6 className="weight800 font20 padding10">
                    Quick Links
                  </h6>
                  <NavLink to="/readonathome" onClick={handleClickTop}>
                    <p className='mt-3 font18 text-black'>
                      <CaretRightFill color="black" size={18} /> ReadON At Home</p>
                  </NavLink>
                  <NavLink to="/privacypolicy" target='_blank'>
                    <p className='mt-3 font18 text-black'>
                      <CaretRightFill color="black" size={18} /> Privacy Policy</p>
                  </NavLink>
                  <NavLink to="/refundpolicy" target='_blank'>
                    <p className='mt-3 font18 text-black'>
                      <CaretRightFill color="black" size={18} /> Refund Policy</p>
                  </NavLink>
                  <NavLink to="/termsofuse" target='_blank'>
                    <p className='mt-3 font18 text-black'>
                      <CaretRightFill color="black" size={18} /> Terms Of Use</p>
                  </NavLink>

                  <div className='subscribe mt-5'>
                    <p className='weight800 font18 '>Get Monthly Update</p>
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