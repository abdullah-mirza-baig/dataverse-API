import express from 'express';
import { albumsData } from './albumsData.js';




export const albumsRoute = express.Router();




albumsRoute.get('/albums',(req,res)=>{

    res.status(200).send({status: 200, message: 'Success', data: albumsData})


})
