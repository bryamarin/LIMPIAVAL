import { Router } from 'express';
import { prisma } from '../server.js';

const router = Router();

// GET /api/testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await prisma.testimonial.findMany();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
});

export default router;
