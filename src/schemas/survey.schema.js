import { body } from 'express-validator';

export const surveySchema = [
    body('idLocation').notEmpty().withMessage('idLocation is required'),
    body('idGender').notEmpty().withMessage('idGender is required'),
    body('idStudy').notEmpty().withMessage('idStudy is required'),
    body('age').notEmpty().withMessage('Age is required'),
    body('questionsOne').notEmpty().withMessage('QuestionsOne is required'),
    body('questionTwo').notEmpty().withMessage('QuestionTwo is required'),
    body('questionThree').notEmpty().withMessage('QuestionThree is required'),
    body('questionFour').notEmpty().withMessage('QuestionFour is required'),
    body('questionFive').notEmpty().withMessage('QuestionFive is required'),
    body('questionSix').notEmpty().withMessage('QuestionSix is required'),
    body('questionSeven').notEmpty().withMessage('QuestionSeven is required'),
    body('questionEight').notEmpty().withMessage('QuestionEight is required')
]