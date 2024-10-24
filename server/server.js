import { configDotenv } from 'dotenv'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'


//app Config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// Intialize Middlewares
app.use(express.json())
app.use(cors())

// API routes
app.get('/',(req,res)=>res.send("API Working"))

app.listen(PORT,()=> console.log("Server Running on port " +PORT))