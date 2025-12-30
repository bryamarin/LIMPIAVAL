import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Middleware
app.use(cors()); 
// Usamos express.json() directamente, no hace falta body-parser
app.use(express.json());

// --- DATOS MOCK (Simulados) ---
const services = [
  {
    id: 1,
    name: "Limpieza de Hogar",
    description: "Mantenemos tu hogar impecable y fresco. Limpieza profunda de habitaciones, baños, y áreas comunes.",
    imageUrl: "https://images.unsplash.com/photo-1581578731117-104f2a863a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.9
  },
  {
    id: 2,
    name: "Limpieza de Oficinas",
    description: "Un ambiente de trabajo limpio mejora la productividad. Nos encargamos de escritorios, suelos y zonas comunes.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.8
  },
  {
    id: 3,
    name: "Limpieza de Cocinas",
    description: "Eliminamos grasa y suciedad acumulada. Dejamos tu cocina brillante y desinfectada.",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 5.0
  },
  {
    id: 4,
    name: "Limpieza Profunda",
    description: "Ideal para limpiezas de primavera o post-mudanza. Llegamos a cada rincón difícil.",
    imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.7
  },
  {
    id: 5,
    name: "Limpieza de Alfombras",
    description: "Revitaliza tus alfombras y elimina manchas difíciles con nuestro tratamiento especializado.",
    imageUrl: "https://images.unsplash.com/photo-1558317374-a35425a67728?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.9
  },
  {
    id: 6,
    name: "Desinfección Total",
    description: "Servicio especializado de desinfección para eliminar gérmenes y bacterias.",
    imageUrl: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 5.0
  }
];

const plans = [
    { name: "Básico", price: 50, features: ["Limpieza general", "2 Habitaciones"] },
    { name: "Premium", price: 100, features: ["Limpieza profunda", "Toda la casa", "Planchado"] }
];

// --- RUTAS DE LA API ---

app.get('/api/services', (req, res) => {
  res.json(services);
});

app.get('/api/plans', (req, res) => {
    res.json(plans);
});

app.post('/api/quote', (req, res) => {
  const { name, email, phone, serviceName } = req.body;
  
  console.log("------------------------------------------------");
  console.log("📩 NUEVA COTIZACIÓN RECIBIDA");
  console.log(`Cliente: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Servicio: ${serviceName}`);
  console.log("------------------------------------------------");

  if (!name || !email) {
      return res.status(400).json({ error: "Nombre y email son requeridos" });
  }

  setTimeout(() => {
      res.json({ success: true, message: "Cotización recibida correctamente" });
  }, 1000);
});

app.listen(port, () => {
  console.log(`✅ Servidor API listo en http://localhost:${port}`);
});