export const plans = [
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
