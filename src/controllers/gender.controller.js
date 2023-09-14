import { getGenders } from "../models/Gender.model.js";

export const getAllGenders = async () => {
    try {
        const genders = await getGenders.findAll();
        if(!genders) {
            return null;
        }
        return genders;
    } catch (error) {
        console.log(error);
    };
}