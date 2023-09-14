import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';
import { connectDB } from './ddbb.js';
import { relations } from './models/Relations.js';
import { surveyRoutes } from './routes/survey.routes.js';
import { locationsRoutes } from './routes/locations.routes.js';
import { studyRoutes } from './routes/study.routes.js';
import { genderRoutes } from './routes/gender.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.use('/survey',surveyRoutes);
app.use('/locations',locationsRoutes);
app.use('/studies',studyRoutes);
app.use('/gender',genderRoutes);

connectDB();
relations();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})