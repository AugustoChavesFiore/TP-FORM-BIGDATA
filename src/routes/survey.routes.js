import {Router} from 'express';
import { createNewSurvey, getAllSurveys, getSurveyById,updateOneSurvey,deleteOneSurvey } from '../controllers/survey.controller.js';
import { surveySchema } from '../schemas/survey.schema.js';
import { validateFields } from '../middlewares/validator.js';

const surveyRoutes = Router();

surveyRoutes.get('/all', getAllSurveys);
surveyRoutes.post('/',surveySchema, validateFields, createNewSurvey);
surveyRoutes.get('/:id', getSurveyById);
surveyRoutes.put('/:id', updateOneSurvey);
surveyRoutes.delete('/:id', deleteOneSurvey);

export { surveyRoutes };