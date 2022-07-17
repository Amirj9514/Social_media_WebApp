import express, { Router } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import Auth from './Routers/Auth.js'
import User from './Routers/User.js'
import cors from 'cors'
import PostRoute from './Routers/PostRoute.js'
import uploadRoute from './Routers/uploadRoute.js'

const app = express();

app.use(express.static('public'))
app.use('/images', express.static("images"))


dotenv.config()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use('/auth', Auth)
app.use('/user', User,)
app.use('/post', PostRoute)
app.use('/upload', uploadRoute)


// MongoDB Connection ...............................


mongoose.connect(process.env.MONGO_DB)
mongoose.connection.on('connected', () => {
    console.log("Database Connected Successfully :) ");
})
mongoose.connection.on('error', () => {
    console.log("Database Connected Failed :( ");
})


// Router .................................





app.listen(process.env.PORT, () => {
    console.log("Server Runing Successfully");
})