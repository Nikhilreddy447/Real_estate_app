import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
    .connect("mongodb+srv://nikhilreddyaleti2002:nikhil@mern-estate.m9vml0d.mongodb.net/mern-estate?retryWrites=true&w=majority")
    .then(()=>{
        console.log("Connected to MongoDb")
    })
    .catch((err)=>{
        console.log(err)
    })

const app = express();

app.listen(3000,()=>{
    console.log('server is running on port 3000 !!!!')
})