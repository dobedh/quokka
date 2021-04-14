import passport from "passport";
import routes from "../routes";
import User from "../models/User";
import Note from "../models/Note";

// Global

export const home = (req, res) => {
  res.render("home");
};

export const community = (req, res) => res.render("community");

export const mypage = (req, res) => res.render("mypage");

// Login & Join

export const login = (req, res) => res.render("login");

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const join = (req, res) => res.render("join");

export const kakaoLogin = passport.authenticate("kakao");

export const kakaoLoginCallback = async (_, __, profile, cb) => {
  const {
    id,
    username: name,
    _json: { properties: profile_image, kakao_account: email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.kakaoId = id;
      return cb(null, user);
    }
    const newUser = await User.create({
      name,
      email,
      avatarUrl: profile_image,
      kakaoId: id,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postKakaoLogin = (req, res) => {
  res.redirect(routes.home);
};
