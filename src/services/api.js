import axios from "axios";
import { isAuthenticated, getToken, TOKEN_KEY } from "services/auth";

const baseURL = "https://empresas.ioasys.com.br/api/v1/";
const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(async (config) => {
  const newConfig = config;

  if (isAuthenticated()) {
    const tokenData = getToken();
    newConfig.headers[TOKEN_KEY] = tokenData[TOKEN_KEY];
    newConfig.headers.client = tokenData.client;
    newConfig.headers.uid = tokenData.uid;
  }

  return newConfig;
});

export default api;
