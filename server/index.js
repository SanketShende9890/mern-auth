import express from 'express';
const PORT = 3000;

const app = express();



app.get('/', (req, res)=>{
    res.send('Server is running!!');
})
app.listen(PORT, (req, res)=>{
    console.log(`Server is running on port: ${PORT}`);
})