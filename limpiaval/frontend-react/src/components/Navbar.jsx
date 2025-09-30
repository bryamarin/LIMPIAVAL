import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Nosotros", href: "#about" },
  { name: "Servicios", href: "#services" },
  { name: "Precios", href: "#pricing" },
  { name: "Galería", href: "#gallery" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center lg:px-24">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src="/assets/logos/logolimpiaval.png" alt="Limpiaval Logo" className="h-10 w-auto" />
          {/* --- MODIFICACIÓN DE COLOR AQUÍ --- */}
          <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-text' : 'text-white'
            }`}
          >
            Limpiaval
          </span>
        </a>

        {/* Links de Navegación (Escritorio) */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              {/* --- MODIFICACIÓN DE COLOR AQUÍ --- */}
              <a href={link.href} className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-text hover:text-primary' 
                    : 'text-white hover:text-sky'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón CTA (Escritorio) */}
        <a href="#contact" className="hidden lg:inline-block bg-primary text-white font-bold py-2 px-6 rounded-xl hover:bg-primary-600 transition-all duration-300 transform hover:-translate-y-1">
          Contacto
        </a>

        {/* Botón de Menú Móvil */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {/* --- MODIFICACIÓN DE COLOR AQUÍ --- */}
            <svg
              className={`w-8 h-8 transition-colors ${
                isScrolled ? 'text-text' : 'text-white'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Panel de Menú Móvil */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mt-4 bg-white shadow-lg"
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-text hover:text-primary transition-colors text-lg"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)} className="bg-primary text-white font-bold py-2 px-6 rounded-xl hover:bg-primary-600 transition-all duration-300 text-lg">
                Contacto
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

