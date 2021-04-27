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

// Community
export const post = (req, res) => res.render("postWrite");

// Login & Join

export const login = (req, res) => res.render("login");

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const join = (req, res) => res.render("join");

export const facebookLogin = passport.authenticate("facebook");

export const facebookLoginCallback = (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  console.log(accessToken, refreshToken, profile, cb);
};

export const postFacebookLogin = (req, res) => {
  res.redirect(routes.home);
};

export const kakaoLogin = passport.authenticate("kakao");

/*export const kakaoLoginCallback = (accessToken, refreshToken, profile, cb) => {
  console.log(profile);
};*/

export const kakaoLoginCallback = async (_, __, profile, cb) => {
  console.log(profile);
  const {
    id,
    username: name,
    _json: {
      profile_image: profileImage,
      kakao_account: { email },
    },
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
      avatarUrl: profileImage,
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

export const postWrite = async (req, res) => {
  const {
    body: { title, content, view },
  } = req;
  try {
    const post = await Post({
      title,
      content,
      date,
      view,
    });
  }
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("Join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};
