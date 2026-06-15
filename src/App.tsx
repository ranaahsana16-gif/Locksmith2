import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      
      {/* Call to Action Section */}
      <section className="section cta-section">
        <div className="container">
          <h2>Need a Locksmith Right Away?</h2>
          <p>Don't wait! Our expert technicians are ready to help you 24/7.</p>
          <a href="tel:3034793344" className="phone-large">
            (303) 479-3344
          </a>
          <a href="tel:3034793344" className="btn" style={{ backgroundColor: 'var(--white)', color: 'var(--primary)', fontSize: '1.25rem', padding: '1rem 2.5rem' }}>
            Call For Immediate Service
          </a>
        </div>
      </section>
      
      <Footer />
    </>
  );
}

export default App;
