import express from "express";
import { home, join, login } from "../controllers/globalController";
import routes from "../routes";

const globalRouter = express.Router();

// home
globalRouter.get(routes.home, home);

//User_login
globalRouter.get(routes.login, login);
globalRouter.post(routes.login, home);

//User_Join
globalRouter.get(routes.join, join);
globalRouter.post(routes.join, home);

export default globalRouter;
