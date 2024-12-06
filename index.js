

import express from 'express';
import dotenv from 'dotenv';
import { postsRoute } from './routes/Posts/postsRoute.js';
import { commentsRoute } from './routes/comments/commentsRoute.js';
import { albumsRoute } from './routes/albums/albumsRoute.js';
import { photosRoute } from './routes/photos/photosRoute.js';
import { todosRoute } from './routes/todos/todosRoute.js';
import { usersRoute } from './routes/users/usersRoute.js';



const app = express();
dotenv.config();


app.get('/',(req,res)=>{

    res.status(200).send('Welcome To API');
})


app.use('/',postsRoute)
app.use('/',commentsRoute)
app.use('/',albumsRoute)
app.use('/',photosRoute)
app.use('/',todosRoute)
app.use('/',usersRoute)



const PORT = process.env.PORT;
app.listen(PORT,()=>{


       console.log(`server is running on port ${PORT}`) 

})