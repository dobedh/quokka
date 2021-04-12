import express from "express";
import passport from "passport";
import { home, join, login } from "../controllers/globalController";
import { kakaoLogin, postKakaoLogin } from "../controllers/userController";
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

//KAKAO
globalRouter.get(routes.kakao, kakaoLogin);
globalRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: "/login" }),
  postKakaoLogin
);

export default globalRouter;
