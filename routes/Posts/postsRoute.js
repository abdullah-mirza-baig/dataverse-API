import express from 'express';
import { postsData } from './postsData.js';



export const postsRoute = express.Router();




postsRoute.get('/posts',(req,res)=>{

    res.status(200).send({status: 200, message: 'Success', data: postsData})


})
