import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  // baseURL: "http://localhost:8080/",
  baseURL: "https://mentor-map-backend.vercel.app/",
});

export default instance;
