import { Router } from 'express';
import { getAllLocation } from '../controllers/location.controller.js';

const locationsRoutes = Router();

locationsRoutes.get('/all', getAllLocation );

export { locationsRoutes };