import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import WhyChoose from './components/WhyChoose';
import Benefits from './components/Benefits';
import Approach from './components/Approach';
import ReadOnAtHome from './components/ReadOnAtHome';
import Testimonials from './components/Testimonials';
import ReadingJourney from './components/ReadingJourney';
import Footer from './components/Footer';
import Awards from './components/Awards';
import Discover from './components/Discover';
import Character from './components/Characters';
import { Route, Routes } from 'react-router-dom';
import RegisterationForm from './components/RegisterationForm';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/*'
          element={
            <>
              <Navbar />
              <Home />
              <div className="wave-container" style={{ marginBottom: '-2px' }}>
                <svg
                  id="wave"
                  style={{ transform: "rotate(0deg)", transition: "0.3s" }}
                  viewBox="0 0 1440 230"
                  version="1.1"
                >
                  <defs>
                    <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                      <stop stopColor="rgba(245, 130, 32, 1)" offset="0%" />
                      <stop stopColor="rgba(245, 130, 32, 1)" offset="100%" />
                    </linearGradient>
                  </defs>
                  <path
                    style={{ transform: "translate(0, 0px)", opacity: 1 }}
                    fill="url(#sw-gradient-0)"
                    d="M0,161L40,149.5C80,138,160,115,240,107.3C320,100,400,107,480,115C560,123,640,130,720,122.7C800,115,880,92,960,95.8C1040,100,1120,130,1200,122.7C1280,115,1360,69,1440,65.2C1520,61,1600,100,1680,126.5C1760,153,1840,169,1920,149.5C2000,130,2080,77,2160,57.5C2240,38,2320,54,2400,65.2C2480,77,2560,84,2640,95.8C2720,107,2800,123,2880,111.2C2960,100,3040,61,3120,46C3200,31,3280,38,3360,65.2C3440,92,3520,138,3600,149.5C3680,161,3760,138,3840,118.8C3920,100,4000,84,4080,99.7C4160,115,4240,161,4320,153.3C4400,146,4480,84,4560,61.3C4640,38,4720,54,4800,80.5C4880,107,4960,146,5040,134.2C5120,123,5200,61,5280,42.2C5360,23,5440,46,5520,72.8C5600,100,5680,130,5720,145.7L5760,161L5760,230L5720,230C5680,230,5600,230,5520,230C5440,230,5360,230,5280,230C5200,230,5120,230,5040,230C4960,230,4880,230,4800,230C4720,230,4640,230,4560,230C4480,230,4400,230,4320,230C4240,230,4160,230,4080,230C4000,230,3920,230,3840,230C3760,230,3680,230,3600,230C3520,230,3440,230,3360,230C3280,230,3200,230,3120,230C3040,230,2960,230,2880,230C2800,230,2720,230,2640,230C2560,230,2480,230,2400,230C2320,230,2240,230,2160,230C2080,230,2000,230,1920,230C1840,230,1760,230,1680,230C1600,230,1520,230,1440,230C1360,230,1280,230,1200,230C1120,230,1040,230,960,230C880,230,800,230,720,230C640,230,560,230,480,230C400,230,320,230,240,230C160,230,80,230,40,230L0,230Z"
                  />
                </svg>
              </div>


              <About />
              <Discover />
              <WhyChoose />
              <Benefits />
              <Approach />
              <ReadOnAtHome />
              <Testimonials />
              <Character />
              <ReadingJourney />
              <Awards />
              <Footer />
            </>
          }
        />
        <Route path="/form" element={<RegisterationForm />} />
      </Routes>
    </div>
  );
}

export default App;
