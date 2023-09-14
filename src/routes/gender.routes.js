import { Router } from 'express';
import { getAllGenders } from '../controllers/gender.controller.js';

const genderRoutes = Router();

genderRoutes.get('/all', getAllGenders);

export { genderRoutes };