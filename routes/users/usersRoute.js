import express from 'express';
import { usersData } from './usersData.js';



export const usersRoute = express.Router();




usersRoute.get('/users',(req,res)=>{

    res.status(200).send({status: 200, message: 'Success', data: usersData})


})
