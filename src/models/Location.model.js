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
    timestamps: false
});

export const getAllLocations = async () => {
    try {
        const locations = await Location.findAll();
        if(!locations) {
           return null;
        }
        return locations;
    } catch (error) {
        console.log(error);
        throw error;
    };
};

export const chargeLocation = async (locations) => {
    try {
        const carga= Location.bulkCreate(locations);
        if(!carga) {
            return null;
        }
        return carga;
    } catch (error) {
        console.log(error);
        
    }
    
}