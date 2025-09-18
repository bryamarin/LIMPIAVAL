import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding ...');

  // Seed Plans
  await prisma.plan.deleteMany();
  await prisma.plan.createMany({
    data: [
      { id: 1, name: 'Basic', price: 30, featured: false, features: JSON.stringify([{ text: 'Limpieza de 1 habitación', included: true },{ text: 'Limpieza de 1 baño', included: true },{ text: 'Aspirado general', included: true },{ text: 'Limpieza de polvo', included: true },{ text: 'Limpieza de cocina', included: false },{ text: 'Limpieza de ventanas', included: false }]) },
      { id: 2, name: 'Standard', price: 70, featured: true, features: JSON.stringify([{ text: 'Limpieza de hasta 3 habitaciones', included: true },{ text: 'Limpieza de 2 baños', included: true },{ text: 'Aspirado y trapeado', included: true },{ text: 'Limpieza de polvo y superficies', included: true },{ text: 'Limpieza de cocina básica', included: true },{ text: 'Limpieza de ventanas', included: false }]) },
      { id: 3, name: 'Premium', price: 120, featured: false, features: JSON.stringify([{ text: 'Limpieza completa del hogar', included: true },{ text: 'Limpieza de hasta 3 baños', included: true },{ text: 'Aspirado y trapeado profundo', included: true },{ text: 'Limpieza de todas las superficies', included: true },{ text: 'Limpieza profunda de cocina', included: true },{ text: 'Limpieza de ventanas (interior)', included: true }]) },
    ],
  });
  console.log('Plans seeded.');

  // Seed Services
  await prisma.service.deleteMany();
  await prisma.service.createMany({
    data: [
      { id: 1, name: 'Home Cleaning', rating: 4.9, description: 'Limpieza completa para tu hogar.', imageUrl: 'https://picsum.photos/400/250?random=7' },
      { id: 2, name: 'Kitchen Cleaning', rating: 4.8, description: 'Dejamos tu cocina reluciente.', imageUrl: 'https://picsum.photos/400/250?random=8' },
      { id: 3, name: 'Office Cleaning', rating: 5.0, description: 'Un espacio de trabajo limpio y productivo.', imageUrl: 'https://picsum.photos/400/250?random=9' },
      { id: 4, name: 'Window Cleaning', rating: 4.7, description: 'Ventanas transparentes para una mejor vista.', imageUrl: 'https://picsum.photos/400/250?random=10' },
      { id: 5, name: 'Carpet Cleaning', rating: 4.9, description: 'Eliminamos manchas y ácaros de tus alfombras.', imageUrl: 'https://picsum.photos/400/250?random=11' },
      { id: 6, name: 'Post-Construction', rating: 4.8, description: 'Limpieza profunda después de obras.', imageUrl: 'https://picsum.photos/400/250?random=12' },
    ],
  });
  console.log('Services seeded.');
  
  // Seed Gallery
  await prisma.galleryItem.deleteMany();
  await prisma.galleryItem.createMany({
    data: Array.from({ length: 10 }, (_, i) => ({
      alt: `Resultado de limpieza ${i + 1}`,
      url: `https://picsum.photos/400/300?random=${i + 1}`,
    })),
  });
  console.log('Gallery seeded.');
  
  // Seed Testimonials
  await prisma.testimonial.deleteMany();
  await prisma.testimonial.createMany({
      data: [
          { name: 'Ana García', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', rating: 5, comment: '¡Un servicio impecable! Mi casa nunca había estado tan limpia. Totalmente recomendados.' },
          { name: 'Carlos Martínez', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e', rating: 4.5, comment: 'Muy profesionales y puntuales. El equipo de Limpiaval hizo un trabajo fantástico en nuestra oficina.' },
          { name: 'Lucía Fernández', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f', rating: 5, comment: 'Contraté el plan premium y vale cada céntimo. La atención al detalle es increíble.' },
          { name: 'Javier Rodríguez', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704a', rating: 4, comment: 'Buen servicio y precios competitivos. Los volveré a llamar sin duda.' },
      ]
  });
  console.log('Testimonials seeded.');

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });