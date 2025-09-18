export const plans = [
    {
        id: 1,
        name: 'Basic',
        price: 30,
        featured: false,
        features: [
            { text: 'Limpieza de 1 habitación', included: true },
            { text: 'Limpieza de 1 baño', included: true },
            { text: 'Aspirado general', included: true },
            { text: 'Limpieza de polvo', included: true },
            { text: 'Limpieza de cocina', included: false },
            { text: 'Limpieza de ventanas', included: false },
        ]
    },
    {
        id: 2,
        name: 'Standard',
        price: 70,
        featured: true,
        features: [
            { text: 'Limpieza de hasta 3 habitaciones', included: true },
            { text: 'Limpieza de 2 baños', included: true },
            { text: 'Aspirado y trapeado', included: true },
            { text: 'Limpieza de polvo y superficies', included: true },
            { text: 'Limpieza de cocina básica', included: true },
            { text: 'Limpieza de ventanas', included: false },
        ]
    },
    {
        id: 3,
        name: 'Premium',
        price: 120,
        featured: false,
        features: [
            { text: 'Limpieza completa del hogar', included: true },
            { text: 'Limpieza de hasta 3 baños', included: true },
            { text: 'Aspirado y trapeado profundo', included: true },
            { text: 'Limpieza de todas las superficies', included: true },
            { text: 'Limpieza profunda de cocina', included: true },
            { text: 'Limpieza de ventanas (interior)', included: true },
        ]
    }
];
