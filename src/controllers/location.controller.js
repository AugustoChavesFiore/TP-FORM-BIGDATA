import { getAllLocations } from "../models/Location.model.js"

const getAllLocation = async (req, res) => {
    try {
        const locations=await  getAllLocations();
        if(!locations) {
            return res.status(404).json({message:'No locations found'});
        }
        return res.status(200).json(locations);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Internal server error'});
    }
}