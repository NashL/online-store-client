import { Cookies } from 'react-cookie';
  
class JWTService {
  static cookies = new Cookies()

  getToken() {
    return JWTService.cookies.get('gonlineToken')
  }

  setToken(tokenValue) {
    JWTService.cookies.set('gonlineToken', tokenValue, { path: '/' })
  }
}

export default new JWTService()