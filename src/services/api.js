import axios from "axios";

const baseURL = "https://empresas.ioasys.com.br/api/v1/";
const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

export default api;
