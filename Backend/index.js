import express from 'express'
import 'dotenv/config'
import connectDB from './db.js'
import users from './routes/users.js';

const app = express();
const PORT = 3000;

app.use(express.json());
connectDB(); 

app.use('/api',users); 

app.get('/',(req,res) => {
    console.log("Route");
    res.send("hello");
})


app.listen(PORT,() =>{
    console.log("Server is running");
})