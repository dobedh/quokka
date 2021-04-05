import dotenv from "dotenv";
import passport from "passport";
import KakaoStrategy from "passport-kakao";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";

dotenv.config();

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
