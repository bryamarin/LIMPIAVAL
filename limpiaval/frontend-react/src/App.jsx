import { useState } from 'react';
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
import Clients from './components/Clients';
import QuoteForm from './components/QuoteForm';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  // 1. CAMBIO: Creamos un estado para guardar el nombre del servicio seleccionado
  // Por defecto será "Cotización General"
  const [selectedService, setSelectedService] = useState("Cotización General");

  // 2. CAMBIO: Modificamos esta función para que acepte un nombre
  const handleOpenQuoteModal = (serviceName = "Cotización General") => {
    setSelectedService(serviceName); // Guardamos el nombre del plan clicado
    setIsQuoteModalOpen(true);       // Abrimos el modal
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="bg-bg text-text-muted">
      <Navbar />
      <main>
        <Header />
        <Features />

        {/* --- NUEVA SECCIÓN DE CLIENTES AQUÍ --- 
        <section id="clients" className="py-3 lg:py-3">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Clients />
          </div>
        </section>*/}

        <section
          id="about"
          className="py-20"
          style={{
            backgroundImage: "url('assets/imagenes/background.png')",
            backgroundRepeat: 'repeat'
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:py-8">
            <About />
          </div>
        </section>

        <section id="services">
          <Services />
        </section>

        {/* La sección WhyChooseUs también tiene su propio fondo, solo necesita el id */}
        <section id="why-choose-us" className="py-5 lg:py-5">
          <div
            className="py-20 bg"
            style={{
              backgroundImage: "url('assets/imagenes/background.png')",
              backgroundRepeat: 'repeat'
            }}
          >
            <WhyChooseUs />
          </div>
        </section>


        {/* La sección de Pricing ya tiene su propio fondo y padding, solo necesita el id */}
        <section id="pricing">
          {/* 3. CAMBIO: Pasamos la función al componente Pricing */}
          <Pricing onPlanSelect={handleOpenQuoteModal} />
        </section>

        {/* Esta es la sección que arregla tu problema con el enlace a Galería */}
        <section
          id="gallery"
          className="py-20 lg:py-28 overflow-hidden bg"
          style={{
            backgroundImage: "url('assets/imagenes/background.png')",
            backgroundRepeat: 'repeat'
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:py-8">
            <Gallery />
          </div>
        </section>


        <section id="contact" className="bg lg:py-18"
          style={{
              backgroundImage: "url('assets/imagenes/background.png')",
              backgroundRepeat: 'repeat'
            }}>
          <div className="container mx-auto px-4 sm:px-6 lg:py-8">
            <CTA onQuoteClick={() => handleOpenQuoteModal("Cotización General")} />
          </div>
        </section>
      </main>
      <Footer />
      <QuoteForm
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        serviceName={selectedService}
      />
    </div>
  );
}

export default App;

