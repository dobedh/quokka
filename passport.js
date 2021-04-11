import dotenv from "dotenv";
import passport from "passport";
import KakaoStrategy from "passport-kakao";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import routes from "./routes";
import { kakaoLoginCallback } from "./controllers/userController";

dotenv.config();

passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.KAKAO_ID,
      callbackURL: `http://localhost:5000${routes.kakaoCallback}`,
    },
    kakaoLoginCallback
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
