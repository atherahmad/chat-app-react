import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRouter from "./routes/authRoute.js";
import chatRouter from "./routes/chatRoute.js";
import { errorHandler } from "./middleware/error-middleware.js";


const app = express();

console.log("env", process.env.NODE_ENV)

//Using cors for cross platform access. Can avoid by proxy for development server.

app.use(cors());

// Calling dotenv config method to load env variables
console.log("my env", process.env.NODE_ENV)
dotenv.config({ path: `../.env.${process.env.NODE_ENV}`});
console.log(process.env.PORT)
const PORT = process.env.PORT || 4000;


app.use(`/api/auth`, authRouter)
app.use(`/api/chat`, chatRouter)

app.get(`/`, (req, res) => {
    res.status(200).json({
        status: "success"
    })
})

// Using errorHandler as Middleware to manage errors

app.use(errorHandler)

app.listen(PORT, console.log(`Server running at port ${PORT}`))