import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from 'cors'

import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";
import authRoutes from "./routes/authRoutes.js"
import orderRoute from './routes/orderRoute.js'
import { connectDatabase } from "./database/db.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import passportUtil from "./utils/passport.js";
import cookieParser from "cookie-parser";

dotenv.config();
connectDatabase()
const port = process.env.PORT || 5000;
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000")
  next()
})

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
app.use(cookieParser())

passportUtil(app)

app.use('/api/products',productRoute)
app.use("/api/users", userRoute)
app.use("/auth", authRoutes)
app.use('/api/orders',orderRoute)


app.use(notFound)
app.use(errorHandler)

const server = () => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
};

server();
