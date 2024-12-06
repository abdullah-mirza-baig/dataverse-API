import express from 'express';
import { photosData } from './photosData.js';




export const photosRoute = express.Router();




photosRoute.get('/photos',(req,res)=>{

    res.status(200).send({status: 200, message: 'Success', data: photosData})


})
