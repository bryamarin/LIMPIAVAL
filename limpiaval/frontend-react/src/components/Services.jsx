import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// RUTA CORREGIDA: Apuntamos a la carpeta /data
import { services as mockServices } from "./data/services.js";

const Services = () => {
  // En una aplicación real, aquí llamarías a la API
  // const [services, setServices] = useState([]);
  // useEffect(() => {
  //   api.getServices().then(setServices);
  // }, []);
  const services = mockServices; // Usamos los datos de ejemplo

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
          Nuestros Servicios de Limpieza
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto mb-12">
          Ofrecemos una amplia gama de servicios para satisfacer todas tus
          necesidades de limpieza, siempre con la máxima calidad.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-bg p-8 rounded-2xl shadow-soft hover:shadow-lg transition-shadow duration-300 text-left hover:-translate-y-1"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <img
                src={service.imageUrl}
                alt={service.name}
                className="w-full h-48 object-cover rounded-lg mb-6"
                loading="lazy"
              />
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-text">{service.name}</h3>
                <div className="flex items-center bg-accent/20 text-accent-dark font-bold text-sm px-3 py-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-accent"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{service.rating}</span>
                </div>
              </div>
              <p className="text-text-muted">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

