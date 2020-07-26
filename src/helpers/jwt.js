import { Cookies } from "react-cookie";


class JWTService {
  static cookies = new Cookies();

  getToken() {
    return JWTService.cookies.get("onlineStore");
  }

  setToken(tokenObject) {
    JWTService.cookies.set("onlineStore", tokenObject.token, {
      path: "/",
      expires: new Date(tokenObject.expiredAt * 1000),
      sameSite: "lax",
      domain: 'localhost',
    });
  }
}

export default new JWTService();
