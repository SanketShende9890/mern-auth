import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';
dotenv.config();    



const PORT = 3000;
const app = express();


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to database");
}).catch(err=>console.log(err))

app.use("/", userRouter)

app.listen(PORT, (req, res)=>{
    console.log(`Server is running on port: ${PORT}`);
})