import { useEffect, useRef, useState } from 'react';
// Asegúrate de importar desde 'framer-motion' que es lo que usa el proyecto
import { motion, useMotionValue, useAnimation, useTransform } from 'framer-motion';
// Importamos el nuevo archivo CSS
import './Gallery.css';

// --- INSTRUCCIONES ---
// Coloca tus imágenes en la carpeta `public/assets/`
// y asegúrate de que los nombres coincidan con los de esta lista.
// Puedes añadir o quitar imágenes, el carrusel se adaptará solo.
const galleryImages = [
  '/assets/imagenes/gallery-1.jpg',
  '/assets/imagenes/gallery-2.jpg',
  '/assets/imagenes/gallery-3.jpg',
  '/assets/imagenes/gallery-4.jpg',
  '/assets/imagenes/gallery-5.jpg',
  '/assets/imagenes/gallery-6.jpg',
  '/assets/imagenes/gallery-7.jpg',
  '/assets/imagenes/gallery-8.jpg',
  '/assets/imagenes/gallery-9.jpg',
  '/assets/imagenes/gallery-10.jpg',
];

const Gallery = ({ autoplay = true, pauseOnHover = true }) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);

  // --- MODIFICACIÓN CLAVE ---
  // Aumentamos el ancho del cilindro para crear más espacio entre las fotos.
  const cylinderWidth = isScreenSizeSm ? 1300 : 2400;
  const faceCount = galleryImages.length;
  // Ajustamos el tamaño de la foto para que se vea bien con el nuevo espacio.
  const faceWidth = isScreenSizeSm ? 200 : 320; 
  const dragFactor = 0.05;
  const radius = cylinderWidth / (1.5 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef();

  const handleDrag = (_, info) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: { type: 'spring', stiffness: 60, damping: 20, mass: 0.1, ease: 'easeOut' }
    });
  };
  
  // Tu lógica de autoplay, resize y hover se mantiene
  useEffect(() => {
    if (autoplay) {
        const play = () => {
            controls.start({
                rotateY: rotation.get() - 360 / faceCount,
                transition: { duration: 1.5, ease: 'linear' }
            });
            rotation.set(rotation.get() - 360 / faceCount);
        };
        autoplayRef.current = setInterval(play, 2000);
        return () => clearInterval(autoplayRef.current);
    }
  }, [autoplay, rotation, controls, faceCount]);

  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
        const play = () => {
            controls.start({
                rotateY: rotation.get() - 360 / faceCount,
                transition: { duration: 1.5, ease: 'linear' }
            });
            rotation.set(rotation.get() - 360 / faceCount);
        };
        play(); // Inicia inmediatamente al salir
        autoplayRef.current = setInterval(play, 2000);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-bg overflow-hidden">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-black text-text mb-4">Nuestros Resultados</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto mb-12">
                Un vistazo a la calidad y el detalle que ponemos en cada trabajo.
            </p>
        </div>
        <div className="gallery-container">
            <div className="gallery-gradient gallery-gradient-left"></div>
            <div className="gallery-gradient gallery-gradient-right"></div>
            <div className="gallery-content">
                <motion.div
                    drag="x"
                    className="gallery-track"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateY: rotation,
                        width: cylinderWidth,
                        transformStyle: 'preserve-3d'
                    }}
                    onDrag={handleDrag}
                    onDragEnd={handleDragEnd}
                    animate={controls}
                >
                    {galleryImages.map((url, i) => (
                        <div
                            key={i}
                            className="gallery-item"
                            style={{
                                width: `${faceWidth}px`,
                                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`
                            }}
                        >
                            <img src={url} alt={`Trabajo de limpieza ${i + 1}`} className="gallery-img" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Gallery;

