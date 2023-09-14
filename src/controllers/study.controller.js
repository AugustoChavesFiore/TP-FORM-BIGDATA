import { getStudies } from "../models/Study.model.js";

export const getAllStudies = async (req, res) => {
    try {
        const studies = await getStudies();
        if(!studies) {
            return res.status(404).json({message:'No studies found'});
        }
        return res.status(200).json(studies);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Internal server error'});
    }
}