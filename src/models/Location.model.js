import { sequelize } from '../ddbb.js';
import { DataTypes } from 'sequelize';

export const Location= sequelize.define('location',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postalCode: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
,{
    timestamps: true
});

export const getAllLocations = async (req, res) => {
    try {
        const locations = await Location.findAll();
        if(!locations) {
            return res.status(404).json({message:'No locations found'});
        }
        return res.status(200).json(locations);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Internal server error'});
    };
};
