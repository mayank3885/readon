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

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Home />
        <About />
        <WhyChoose />
        <Benefits />
        <Approach />
        <ReadOnAtHome />
        <Testimonials />
        <ReadingJourney />
        <Footer />
      </div>
    </div>
  );
}

export default App;
