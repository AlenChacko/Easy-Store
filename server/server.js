import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from 'cors'

import productRoute from "./routes/productRoute.js";
import { connectDatabase } from "./database/db.js";

dotenv.config();
connectDatabase()
const port = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PATCH, DELETE, PUT",
    credentials: true,
  })
)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("dev"));
app.use(helmet());

app.use('/api',productRoute)

const server = () => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
};

server();
