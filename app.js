import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import { localMiddleware } from "./localMiddleware";
import noteRouter from "./routers/noteRouter";

const app = express();
const CookieStore = MongoStore(session);

app.use(helmet());
app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/static", express.static("static"));
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
