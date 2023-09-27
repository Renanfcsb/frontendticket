import axios from "axios";

const api = axios.create({
  baseURL: "https://tickets-6xnp.onrender.com",
  timeout: 3000,
});

export default api;
