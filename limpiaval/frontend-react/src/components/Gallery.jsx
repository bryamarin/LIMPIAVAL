import styles from './Gallery.module.css';

// Asegúrate de que las rutas apunten a tus imágenes optimizadas
const images = Array.from({ length: 6 }, (_, i) => `/assets/imagenes/gallery-${i + 1}.jpg`);

const Gallery = () => {
  return (
    <div>
        <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-text mb-4">Nuestros Resultados</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
                Un vistazo a la calidad y el detalle que ponemos en cada trabajo.
            </p>
        </div>
        <div className={styles.galleryContainer}>
            <div className={styles.track}>
                {/* Duplicamos las imágenes para el bucle infinito */}
                {[...images, ...images].map((src, i) => (
                    <div key={i} className={styles.imageContainer}>
                        <img src={src} alt={`Trabajo de limpieza ${i + 1}`} loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Gallery;

