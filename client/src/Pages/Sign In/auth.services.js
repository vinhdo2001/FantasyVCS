import axios from "axios";
const API_URL = "http://localhost:8080/";
class AuthService {
   login(email, password) {
    return axios
      .post(API_URL + "signin", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        window.location.reload()
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
    window.location.reload()
  }
  register(email, password, role) {
    return axios.post(API_URL + "signup", {
        email,
      password,
      role
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}


export default new AuthService();