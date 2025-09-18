import { Router } from 'express';
import { prisma } from '../server.js';

const router = Router();

// GET /api/plans
router.get('/', async (req, res) => {
  try {
    const plans = await prisma.plan.findMany();
    // Prisma stores array as JSON string, so we need to parse it
    const parsedPlans = plans.map(plan => ({
      ...plan,
      features: JSON.parse(plan.features),
    }));
    res.json(parsedPlans);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch plans' });
  }
});

export default router;
