import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Header() {
    // La lógica para el efecto parallax se mantiene intacta
    const layersRef = useRef([]);

    useEffect(() => {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) return;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            layersRef.current.forEach((layer) => {
                if (!layer) return;
                const speed = parseFloat(layer.dataset.speed || "0");
                layer.style.transform = `translateY(${scrollY * speed * 0.5}px)`;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    // El contenido se mantiene, solo cambia la estructura
    const title = "Nosotros limpiamos. Tú disfrutas.";
    const subtitle = "Servicios de limpieza profesionales para hogares, oficinas y Airbnb en Valencia.";
    const ctaText = "Nuestros Servicios";
    const ctaHref = "#services";
    const secondaryCtaText = "Pedir Cotización";
    const secondaryCtaHref = "#contact";
    
    return (
        <header id="home" className="relative h-screen min-h-[900px] overflow-hidden flex items-center">
            {/* --- FONDO CON VIDEO Y PARALLAX (SIN CAMBIOS) --- */}
            <video
                ref={(el) => (layersRef.current[0] = el)}
                data-speed="0.2"
                className="absolute inset-0 w-full h-full object-cover will-change-transform"
                autoPlay loop muted playsInline
                src="/assets/video/burbujas.mp4"
            ></video>
            <div
                ref={(el) => (layersRef.current[1] = el)}
                data-speed="0.4"
                className="absolute inset-0 bg-cover bg-center opacity-80 will-change-transform"
                style={{ backgroundImage: `url('/assets/parallax-medio.png')` }}
            ></div>
            <div
                ref={(el) => (layersRef.current[2] = el)}
                data-speed="0.7"
                className="absolute inset-0 bg-cover bg-center opacity-60 will-change-transform"
                style={{ backgroundImage: `url('/assets/parallax-frente.png')` }}
            ></div>
            <div className="absolute inset-0 bg-navy/60" style={{ backgroundColor: 'rgba(11, 27, 63, 0.6)' }}></div>

            {/* --- NUEVA ESTRUCTURA DEL CONTENIDO --- */}
            <div className="relative z-10 w-full h-full flex items-center">
                <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between">

                    {/* Columna Izquierda: Texto y CTAs */}
                    <motion.div 
                        className="lg:w-1/2 text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <span className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
                            Somos Limpiaval
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4">{title}</h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0">{subtitle}</p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a href={ctaHref} className="px-8 py-3 bg-primary hover:bg-primary-600 rounded-xl shadow-lg font-bold transition-all duration-300 transform hover:-translate-y-1 text-white">
                                {ctaText}
                            </a>
                            <a href={secondaryCtaHref} className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl font-bold transition-all duration-300 text-white">
                                {secondaryCtaText}
                            </a>
                        </div>

                        {/* Tarjetas de Estadísticas */}
                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8">
                            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-left">
                                <h3 className="text-3xl font-bold text-white">800+</h3>
                                <p className="text-gray-200">Clientes Felices</p>
                            </div>
                             <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-left">
                                <h3 className="text-3xl font-bold text-white">180+</h3>
                                <p className="text-gray-200">Servicios Realizados</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Columna Derecha: Imagen */}
                    <motion.div 
                        className="hidden lg:flex lg:w-1/2 justify-end items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    >
                        {/* INSTRUCCIÓN: Coloca tu imagen en public/assets/ */}
                        <img 
                            src="/assets/imagenes/bote-mesa.png" 
                            alt="Cubo con utensilios de limpieza" 
                            className="h-auto max-h-[90vh] w-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </header>
    );
}

