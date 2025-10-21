import styles from './Clients.module.css';

// --- INSTRUCCIONES ---
// 1. Crea una carpeta 'logos' dentro de 'public/assets/'.
// 2. Coloca tus logos allí (preferiblemente en formato SVG o PNG).
// 3. Añade las rutas a esta lista.
const logos = [
  '/assets/logos/client-1.svg',
  '/assets/logos/client-2.svg',
  '/assets/logos/client-3.svg',
  '/assets/logos/client-4.svg',
  '/assets/logos/client-5.svg',
  '/assets/logos/client-6.svg',
  '/assets/logos/client-7.svg',
];

const Clients = () => {
  return (
    <div className="text-center">
      <h3 className="text-sm font-bold tracking-wider text-text-muted uppercase mb-8">
        Empresas que confían en nosotros
      </h3>
      {/* Este es el contenedor "ventana" que oculta el desbordamiento */}
      <div className={styles.logosContainer}>
        {/* Este es el carrusel que se anima */}
        <div className={styles.logosTrack}>
          {/* Duplicamos la lista de logos para crear el bucle infinito */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <img src={logo} alt={`Logo de cliente ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
