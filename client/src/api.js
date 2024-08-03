import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,

  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (req) => {
    try {
      const userLocal = JSON.parse(localStorage.getItem("USER_LOCAL"));

      if (userLocal && userLocal.token) {
        req.headers["Authorization-User"] = `Bearer ${userLocal.token}`;
      }
    } catch (error) {
      console.log("Error Parsing Local Storage Item", error);
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
