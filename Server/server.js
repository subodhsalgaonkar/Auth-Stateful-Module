import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'
import User from './models/user.js'

const app = express()
const port = 3000

const uri = "mongodb://localhost:27017/AuthStatefull"

mongoose.connect(uri).then(()=>{
  console.log("Connection to the auth database is successful");
}).catch((err)=>{
  console.log(`Failed to connect to the db ${err}`);
})  

app.use(express.json())
app.use(cors())

app.use('/auth', authRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})