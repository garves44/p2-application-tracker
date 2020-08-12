import axios from "axios";

export default {
  // USER
  login: (loginData) => axios.post("/api/users/login", loginData),
};
