import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (req) => {
    const local = JSON.parse(localStorage.getItem("USER_LOCAL"));

    if (local?.token) {
      req.headers["Authorization-User"] = `Bearer ${local?.token}`;
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
