import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MenuIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"/></svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/></svg>
);


const navLinks = ["Home", "About", "Services", "Pricing", "Gallery", "Contact"];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* --- CAMBIO AQUÍ --- */}
                {/* Ajustamos el nombre del archivo para que coincida con el tuyo */}
                <a href="#home" className="flex items-center">
                    <img src="/assets/logos/logolimpiaval.png" alt="Limpiaval Logo" className="h-10 w-auto" />
                </a>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                         <a key={link} href={`#${link.toLowerCase()}`} className="font-semibold text-text hover:text-primary transition-colors duration-300">{link}</a>
                    ))}
                </div>
                
                <div className="hidden md:block">
                     <a href="#contact" className="bg-primary text-white font-semibold px-6 py-2 rounded-lg hover:bg-primary-600 transition-all duration-300 transform hover:-translate-y-0.5">Contact Us</a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <CloseIcon/> : <MenuIcon />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-white shadow-lg absolute w-full"
                >
                    <div className="flex flex-col items-center space-y-4 py-6">
                        {navLinks.map(link => (
                            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="font-semibold text-text hover:text-primary transition-colors duration-300">{link}</a>
                        ))}
                        <a href="#contact" onClick={() => setIsOpen(false)} className="bg-primary text-white font-semibold px-6 py-2 rounded-lg hover:bg-primary-600 transition-all duration-300">Contact Us</a>
                    </div>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar;

