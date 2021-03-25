import express from "express";
import { home, join, login } from "../controllers/globalController";
import routes from "../routes";

const globalRouter = express.Router();

// home
globalRouter.get(routes.home, home);

//user
globalRouter.get(routes.login, login);
globalRouter.get(routes.join, join);

export default globalRouter;
