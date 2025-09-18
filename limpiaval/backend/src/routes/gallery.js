import { Router } from 'express';
import { prisma } from '../server.js';

const router = Router();

// GET /api/gallery
router.get('/', async (req, res) => {
  try {
    const galleryItems = await prisma.galleryItem.findMany();
    res.json(galleryItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch gallery items' });
  }
});

export default router;