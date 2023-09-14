import { createSurvey, deleteSurvey, findAllSurveys, findSurveyById, updateSurvey, } from "../models/Survey.model.js";

export const getAllSurveys = async (req, res) => {
    try {
        const surveys = await findAllSurveys();
        if(!surveys) {
            return res.status(404).json({message:'No surveys found'});
        }
        return res.status(200).json(surveys);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Internal server error'});
    }
};
export const createNewSurvey = async (req, res) => {
    try {
       const survey = await createSurvey(req.body);
       if(!survey) {
           return res.status(404).json({message:'Survey not created'});
       }
       return res.status(201).json(survey);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Internal server error'});
    }
};

export const getSurveyById = async (req, res) => {
    try {
        const survey = await findSurveyById(req.params.id);
        if(!survey) {
            return res.status(404).json({message:'Survey not found'});
        }
        return res.status(200).json(survey);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Internal server error'});
    }
};

export const updateOneSurvey = async (req, res) => {
    try {
        const survey = await findSurveyById(req.params.id);
        if(!survey) {
            return res.status(404).json({message:'Survey not found'});
        }
        const updatedSurvey = await updateSurvey(req.params.id, req.body);
        if(!updatedSurvey) {
            return res.status(404).json({message:'Survey not updated'});
        }
        return res.status(200).json(updatedSurvey);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Internal server error'});
    }
};

export const deleteOneSurvey = async (req, res) => {
    try {
        const survey = await findSurveyById(req.params.id);
        if(!survey) {
            return res.status(404).json({message:'Survey not found'});
        }
        const deletedSurvey = await deleteSurvey(req.params.id);
        if(!deletedSurvey) {
            return res.status(404).json({message:'Survey not deleted'});
        }
        return res.status(200).json(deletedSurvey);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Internal server error'});
    }
};