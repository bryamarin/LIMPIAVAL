import { Router } from 'express';
import { z } from 'zod';
import { prisma } from '../server.js';

const router = Router();

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
});

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const validatedData = contactSchema.parse(req.body);

    const newLead = await prisma.lead.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
        type: 'CONTACT'
      },
    });

    res.status(201).json({ message: 'Contact form submitted successfully!', data: newLead });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation failed', details: error.errors });
    }
    res.status(500).json({ error: 'Failed to process contact form' });
  }
});

export default router;