import  {Sequelize} from "sequelize";
import {initModels} from "../models/init-models.js";



export const sequelize = new Sequelize(
    "edu",
    process.env.DB_USER as string,
    process.env.DB_PASSWORD as string,{
        host:process.env.DB_HOST,
        dialect:"mysql"
    }
);
const models = initModels(sequelize);



export default models;