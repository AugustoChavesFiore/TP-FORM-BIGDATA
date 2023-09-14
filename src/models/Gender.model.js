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
}