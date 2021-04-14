import express from "express";
import passport from "passport";
import {
  community,
  home,
  join,
  login,
  kakaoLogin,
  postKakaoLogin,
  logout,
  mypage,
} from "../controllers/userController";
import routes from "../routes";

const globalRouter = express.Router();

// home
globalRouter.get(routes.home, home);

//
globalRouter.get(routes.community, community);

//User_login
globalRouter.get(routes.login, login);
globalRouter.post(routes.login, home);

//User_Join
globalRouter.get(routes.join, join);
globalRouter.post(routes.join, home);

//User_logout
globalRouter.get(routes.logout, logout);

//Mypage
globalRouter.get(routes.mypage, mypage);

//KAKAO
globalRouter.get(routes.kakao, kakaoLogin);
globalRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: "/login" }),
  postKakaoLogin
);

export default globalRouter;
