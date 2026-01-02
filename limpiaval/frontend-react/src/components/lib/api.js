// --- DATOS FIJOS (Antes estaban en el servidor, ahora viven aquí) ---
const servicesData = [
  {
    id: 1,
    name: "Tratamiento de suelos",
    description: "Mantenemos tus suelos impecables. Limpieza profunda, juntas y en madera.",
    imageUrl: "/assets/imagenes/suelos.png",
    rating: 5.0
  },
  {
    id: 2,
    name: "Limpieza de Oficinas",
    description: "Un ambiente de trabajo limpio mejora la productividad. Nos encargamos de escritorios, suelos y zonas comunes.",
    imageUrl: "/assets/imagenes/OFICINA..png",
    rating: 4.9
  },
  {
    id: 3,
    name: "Limpieza de Cocinas",
    description: "Eliminamos grasa y suciedad acumulada. Dejamos tu cocina brillante y desinfectada.",
    imageUrl: "/assets/imagenes/cocina LVAL.png",
    rating: 4.8
  },
  {
    id: 4,
    name: "Chales y villas",
    description: "Ideal para limpiezas de primavera o post-mudanza. Llegamos a cada rincón difícil.",
    imageUrl: "/assets/imagenes/chalet.png",
    rating: 4.7
  },
  {
    id: 5,
    name: "Cristales y fachadas",
    description: "Revitaliza tus cristales y elimina manchas difíciles con nuestro tratamiento especializado.",
    imageUrl: "/assets/imagenes/baño LVAL.png",
    rating: 4.9
  },
  {
    id: 6,
    name: "Post-Construction",
    description: "Servicio especializado de limpieza para eliminar suciedad después de obras.",
    imageUrl: "/assets/imagenes/potsobra LVAL.png",
    rating: 5.0
  }
];

const plansData = [
    {
        id: 1,
        name: 'Pack Hogar',
        price: 104,
        featured: false,
        features: [
            { text: '4 sesiones de 2h al mes', included: true },
            { text: 'Limpieza de habitaciónes', included: true },
            { text: 'Limpieza de baño', included: true },
            { text: 'Aspirado general', included: true },
            { text: 'Limpieza de polvo', included: true },
            { text: 'Limpieza de cocina', included: false },
            { text: 'Limpieza de ventanas', included: false },
        ]
    },
    {
        id: 2,
        name: 'Pack Airbnb',
        price: 300,
        featured: true,
        features: [
            { text: '10 limpiezas'},
            { text: 'Limpieza General', included: true },
            { text: 'Cambio de sábanas', included: true },
            { text: 'Toallas y amenities', included: true },
            { text: 'Limpieza de polvo y superficies', included: true },
            { text: 'Productos y aspirado profesional', included: true },
            { text: 'Limpieza de ventanas y cristales', included: false },
        ]
    },
    {
        id: 3,
        name: 'Pack Oficina',
        price: 96,
        featured: false,
        features: [
            { text: ' 4 sesiones', included: true },
            { text: 'Limpieza de áreas comunes', included: true },
            { text: 'Limpieza de baños', included: true },
            { text: 'Aspirado y trapeado', included: true },
            { text: 'Limpieza de todas las superficies', included: true },
            { text: 'Limpieza de ventanas (interior)', included: true },
        ]
    }
];

// --- FUNCIONES NUEVAS ---

// Ya no piden datos al servidor, los devuelven directamente
export const getPlans = async () => {
  return plansData;
};

export const getServices = async () => {
  return servicesData;
};

// Esta función es la única que conecta con el exterior (PHP)
export const submitQuote = async (data) => {
  // Apuntamos a un archivo PHP que subiremos a One.com
  const response = await fetch('send_quote.php', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Error al enviar el correo (PHP)');
  }
  return response.json();
};