import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';
dotenv.config();    



const PORT = 3000;
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://sanketshende18:admin@cluster0.rw80cbl.mongodb.net/mern-auth-base").then(()=>{
    console.log("Connected to database");
}).catch(err=>console.log(err))

app.use("/", userRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, (req, res)=>{
    console.log(`Server is running on port: ${PORT}`);
})