import { sequelize } from '../ddbb.js';
import { DataTypes } from 'sequelize';
import { Gender } from '../models/Gender.model.js';
import { Location } from '../models/Location.model.js';
import { Study } from '../models/Study.model.js';

export const Survey = sequelize.define('survey', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idLocation: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idGender: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idStudy: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    answerOne: {
        type: DataTypes.STRING,
        allowNull: false
    },
    answerTwo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    answerThree: {
        type: DataTypes.STRING,
        allowNull: false
    },
    answerFour: {
        type: DataTypes.STRING,
        allowNull: false
    },
    answerFive: {
        type: DataTypes.STRING,
        allowNull: false
    },
    answerSix: {
        type: DataTypes.STRING,
        allowNull: false
    },
    answerSeven: {
        type: DataTypes.STRING,
        allowNull: false
    },
    answerEight: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        timestamps: true
    }
);

export const findAllSurveys = async () => {
    try {
        const surveys = await Survey.findAll({
            attributes: ['id', 'age', 'answerOne', 'answerTwo', 'answerThree', 'answerFour', 'answerFive', 'answerSix', 'answerSeven', 'answerEight'],
        
        include: [
            {
                model: Gender,
                attributes: ['gender']
            },
            {
                model: Location,
                attributes: ['name', 'postalCode']
            },
            {
                model: Study,
                attributes: ['studyNivel']
            }
        ]
        });
        if (!surveys) {
            return null;
        }
        return surveys;
    } catch (error) {

        console.log(error);
    }
};
export const createSurvey = async (survey) => {
    try {
        const newSurvey = await Survey.create(survey);
        if (!newSurvey) {
            return null;
        };
        return newSurvey;
    } catch (error) {
        console.log(error);
    }
};

export const findSurveyById = async (id) => {
    try {
        const survey = await Survey.findByPk(id,
            {
                attributes: ['id', 'age', 'answerOne', 'answerTwo', 'answerThree', 'answerFour', 'answerFive', 'answerSix', 'answerSeven', 'answerEight'],
                include: [
                    {
                        model: Gender,
                        attributes: ['gender']
                    },
                    {
                        model: Location,
                        attributes: ['name', 'postalCode']
                    },
                    {
                        model: Study,
                        attributes: ['studyNivel']
                    }

                ]
            });
        if (!survey) {
            return null;
        };
        return survey;
    } catch (error) {
        console.log(error);
    };
};

export const updateSurvey = async (id, survey) => {
    try {
        const updatedSurvey = await Survey.update(survey, {
            where: {
                id: id
            }
        });
        if (!updatedSurvey) {
            return null;
        };
        return updatedSurvey;
    } catch (error) {
        console.log(error);
    };
};

export const deleteSurvey = async (id) => {
    try {
        const deletedSurvey = await Survey.destroy({
            where: {
                id: id
            }
        });
        if (!deletedSurvey) {
            return null;
        };
        return deletedSurvey;
    } catch (error) {
        console.log(error);
    };
};
