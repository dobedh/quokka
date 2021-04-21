// Global
const HOME = "/";

// Note
const NOTE = "/note";

// Community
const COMMUNITY = "/community";
const POST = "/post";

//user
const LOGIN = "/login";
const JOIN = "/join";
const LOGOUT = "/logout";
const MYPAGE = "/mypage";

//kakao
const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK = "/oauth";

//facebook

const FB = "/auth/facebook";
const FB_CALLBACK = "/auth";

const routes = {
  home: HOME,
  community: COMMUNITY,
  post: POST,
  note: NOTE,
  login: LOGIN,
  join: JOIN,
  logout: LOGOUT,
  mypage: MYPAGE,
  kakao: KAKAO,
  kakaoCallback: KAKAO_CALLBACK,
  facebook: FB,
  facebookCallback: FB_CALLBACK,
};

export default routes;
