import express from 'express';
import { todosData } from './todosData.js';



export const todosRoute = express.Router();




todosRoute.get('/todos',(req,res)=>{

    res.status(200).send({status: 200, message: 'Success', data: todosData})


})
