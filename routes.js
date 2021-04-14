// Global
const HOME = "/";

// Note
const NOTE = "/note";

// Community
const COMMUNITY = "/community";

//user
const LOGIN = "/login";
const JOIN = "/join";
const LOGOUT = "/logout";
const MYPAGE = "/mypage";

//kakao
const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK = "/oauth";

const routes = {
  home: HOME,
  community: COMMUNITY,
  note: NOTE,
  login: LOGIN,
  join: JOIN,
  logout: LOGOUT,
  mypage: MYPAGE,
  kakao: KAKAO,
  kakaoCallback: KAKAO_CALLBACK,
};

export default routes;
