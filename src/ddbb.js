import { Sequelize } from 'sequelize';

export const sequelize= new Sequelize(
    process.env.DB_URL,
    {
        dialect: process.env.DB_DIALECT 
    });  

export const connectDB= async()=>{
    try {
        await sequelize.sync({force: false});
        console.log(`DB CONNECTED`);
    } catch (error) {
        console.log('Error Conecting',error);
    }
}