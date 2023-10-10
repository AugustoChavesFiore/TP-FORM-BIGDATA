import { body } from 'express-validator';

export const surveySchema = [
    body('idLocation').notEmpty().withMessage('idLocation is required'),
    body('idGender').notEmpty().withMessage('idGender is required'),
    body('idStudy').notEmpty().withMessage('idStudy is required'),
    body('age').notEmpty().withMessage('Age is required'),
    body('answerOne').notEmpty().withMessage('answerOne is required'),
    body('answerTwo').notEmpty().withMessage('answerTwo is required'),
    body('answerThree').notEmpty().withMessage('answerThree is required'),
    body('answerFour').notEmpty().withMessage('answerFour is required'),
    body('answerFive').notEmpty().withMessage('answerFive is required'),
    body('answerSix').notEmpty().withMessage('answerSix is required'),
    body('answerSeven').notEmpty().withMessage('answerSeven is required'),
    body('answerEight').notEmpty().withMessage('answerEight is required')
]