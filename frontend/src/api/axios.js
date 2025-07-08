import axios from "axios";

const instance = axios.create({
  baseURL: "/api", // thanks to proxy
});

export default instance;
