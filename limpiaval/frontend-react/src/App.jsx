import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-bg text-text-muted">
      <Navbar />
      <main>
        <Header />
        <Features />
        
        <section id="about" className="py-5 lg:py-5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <About />
          </div>
        </section>

        <section id="services">
            <Services />
        </section>

        {/* La sección WhyChooseUs también tiene su propio fondo, solo necesita el id */}
        <section id="why-choose-us" className="py-5 lg:py-5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <WhyChooseUs />
          </div>
        </section>


        {/* La sección de Pricing ya tiene su propio fondo y padding, solo necesita el id */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* Esta es la sección que arregla tu problema con el enlace a Galería */}
        <section id="gallery" className="py-5 lg:py-5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Gallery />
          </div>
        </section>
        
        <section id="contact" className="py-10 lg:py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <CTA />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

