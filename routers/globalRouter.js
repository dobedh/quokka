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
  post,
  facebookLogin,
  postFacebookLogin,
  newPost,
  postPost,
} from "../controllers/userController";
import routes from "../routes";

const globalRouter = express.Router();

// home
globalRouter.get(routes.home, home);

// COmmunity
globalRouter.get(routes.community, community);
globalRouter.get(routes.post, newPost);
globalRouter.post(routes.post, postPost);

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

// facebook
globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
  routes.facebookCallback,
  passport.authenticate(
    "facebook",
    { failureRedirect: "/login" },
    postFacebookLogin
  )
);

//KAKAO
globalRouter.get(routes.kakao, kakaoLogin);
globalRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: "/login" }),
  postKakaoLogin
);

export default globalRouter;
