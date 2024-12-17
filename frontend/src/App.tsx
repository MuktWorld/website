import Navbar from './components/nav-links/Navbar';
import Hero from './components/nav-links/Hero';
import Services from './components/nav-links/Services';
import Portfolio from './components/nav-links/Portfolio';
import Testimonials from './components/nav-links/Testimonials';
import Contact from './components/nav-links/Contact';
import Footer from './components/nav-links/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;