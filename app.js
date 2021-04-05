import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import { localMiddleware } from "./localMiddleware";
import noteRouter from "./routers/noteRouter";
import "./passport";

dotenv.config();

const app = express();
const CookieStore = MongoStore(session);

// Middlewares
app.use(helmet());
app.set("view engine", "pug");
app.use("/static", express.static("static"));
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
  })
);

app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.note, noteRouter);

export default app;
