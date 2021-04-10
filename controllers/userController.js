import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const kakaoLogin = passport.authenticate("kakao");
