import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import { localMiddleware } from "./localMiddleware";
import noteRouter from "./routers/noteRouter";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(bodyParser());
app.use(cookieParser());

app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.note, noteRouter);

export default app;
