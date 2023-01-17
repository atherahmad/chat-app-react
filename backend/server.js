import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRouter from "./routes/authRoute.js";
import chatRouter from "./routes/chatRoute.js";

const app = express();

//Using cors for cross platform access. Can avoid by proxy for development server.

app.use(cors());

// Calling dotenv config method to load env variables

dotenv.config();

const PORT = process.env.PORT || 4000;


app.use(`/api/auth`, authRouter)
app.use(`/api/chat`, chatRouter)

app.get(`/`, (req, res) => {
    res.status(200).json({
        status: "success"
    })
})

app.listen(PORT, console.log(`Server running at port ${PORT}`))