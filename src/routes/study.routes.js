import { Router } from 'express';
import {getAllStudies} from '../controllers/study.controller.js';
const studyRoutes = Router();

studyRoutes.get('/all', getAllStudies);

export { studyRoutes };