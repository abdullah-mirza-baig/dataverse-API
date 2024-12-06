import express from 'express';
import { commentsData } from './commentsData.js';




export const commentsRoute = express.Router();




commentsRoute.get('/comments',(req,res)=>{

    res.status(200).send({status: 200, message: 'Success', data: commentsData})


})
