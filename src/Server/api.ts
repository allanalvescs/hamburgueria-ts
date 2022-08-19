import axios from "axios";

const api = axios.create({
  baseURL: "https://hamburgueriakenzie.herokuapp.com/",
});

export default api;
