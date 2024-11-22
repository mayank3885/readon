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
import WaveContainer from './components/WaveContainer';
import Reports from './components/Reports';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';

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
              <WaveContainer />
              <About />
              <Discover />
              <WhyChoose />
              <Benefits />
              <Approach />
              <Reports />
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
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
