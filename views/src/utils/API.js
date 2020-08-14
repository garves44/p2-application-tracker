import axios from "axios";

export default {
  // USER
  login: (loginData) => axios.post("/api/users/login", loginData),

  //Job Controllers
  addJob: (jobData) => axios.post("/api/jobs/", jobData),
  getUserJobs: () => axios.get("/api/jobs/user"),
};
