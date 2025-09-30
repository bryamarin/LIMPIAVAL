import styles from './Gallery.module.css';

// La misma lista de imágenes de antes
const images = Array.from({ length: 12 }, (_, i) => `/assets/imagenes/gallery-${i + 1}.jpg`);

const Gallery = () => {
  return (
    <div>
        <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-text mb-4">Nuestros Resultados</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
                Un vistazo a la calidad y el detalle que ponemos en cada trabajo.
            </p>
        </div>

        {/* Este es el contenedor principal que actúa como la "ventana" visible.
          Tendrá un gradiente en los bordes para un efecto de difuminado.
        */}
        <div className={styles.galleryContainer}>
            {/* El carrusel que contiene las imágenes. La animación se define en el CSS. */}
            <div className={styles.track}>
                {/* Duplicamos la lista de imágenes para crear el bucle infinito.
                  Cuando el primer grupo de imágenes sale de la pantalla, el segundo
                  grupo (que es idéntico) ya está entrando, creando una transición perfecta.
                */}
                {[...images, ...images].map((src, i) => (
                    <div key={i} className={styles.imageContainer}>
                        <img src={src} alt={`Imagen de galería ${i + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Gallery;

