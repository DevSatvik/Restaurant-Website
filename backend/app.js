import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoutes.js"

const app = express();
dotenv.config({path: "./config/config.env"});

app.use(cors({
    origin:[process.env.FRONTEND_URL], //path of frontend which you want to connect with your backend 
    methods: ["POST"], // get, post, delete, put 
    credentials: true
}))

app.use(express.json()); // takes the json string and converts into json object
app.use(express.urlencoded({extended:true}));
app.use('/api/reservation', reservationRouter);

dbConnection();

app.use(errorMiddleware)

export default app;