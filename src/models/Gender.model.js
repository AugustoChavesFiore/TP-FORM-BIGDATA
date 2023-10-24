import { sequelize } from '../ddbb.js';
import { DataTypes } from 'sequelize';


export const Gender = sequelize.define('gender', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        timestamps: false
    });

export const getGenders = async () => {
    try {
        const genders = await Gender.findAll();
        if(!genders) {
            return null;
        }
        return genders;
    } catch (error) {
        console.log(error);
    };
};

export const ChargeGenders = async (genders) => {
    try {
        const carga= Gender.bulkCreate(genders);
        if(!carga) {
            return null;
        }
        return carga;
    } catch (error) {
        console.log(error);
    };
}