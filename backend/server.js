import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRouter from "./routes/authRoute.js";
import chatRouter from "./routes/chatRoute.js";
import { errorHandler } from "./middleware/error-middleware.js";

/* const basket = [ {item : "Tee", quantity : 3, unitPrice: 20},
                 {item : "Tee", quantity : 1, unitPrice: 10},
                 {item : "Tee", quantity : 5, unitPrice: 50},
                 {item : "Tee", quantity : 2, unitPrice: 15}
            ];

console.log(basket.reduce((accum, currentValue)=>{
    return {
        totalItems:currentValue.quantity + accum.totalItems, 
        totalAmount:currentValue.unitPrice * currentValue.quantity + accum.totalAmount}
},{totalItems:0, totalAmount: 0}))
 */


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

// Using errorHandler as Middleware to manage errors

app.use(errorHandler)

app.listen(PORT, console.log(`Server running at port ${PORT}`))