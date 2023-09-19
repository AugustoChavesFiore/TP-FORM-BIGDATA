import { getGenders } from "../models/Gender.model.js";

export const getAllGenders = async (req, res) => {
    try {
        const genders = await getGenders();
        if(!genders) {
            return res.json({msg: "No genders found"});
        }
        return res.json(genders);
    } catch (error) {
        console.log(error);
    };
}