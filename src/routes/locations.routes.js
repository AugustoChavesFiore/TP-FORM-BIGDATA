import { Router } from 'express';
import { getAllLocations } from '../models/Location.model.js';
const locationsRoutes = Router();

locationsRoutes.get('/all', getAllLocations);

export { locationsRoutes };