import { sequelize } from '../ddbb.js';
import { DataTypes } from 'sequelize';

export const Study= sequelize.define('study',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    studyNivel: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        timestamps: false
    })

export const getStudies = async () => {
    try {
        const studys = await Study.findAll();
        if(!studys) {
            return null;
        }
        return studys;
    } catch (error) {
        console.log(error);
        throw error;
    };
};

export const ChargeStudies = async (studys) => {
    try {
        const carga= Study.bulkCreate(studys);
        if(!carga) {
            return null;
        }
        return carga;
    } catch (error) {
        console.log(error);
        
    }
}