export const TOKEN_KEY = "access-token";
export const LOCAL_STORAGE = "localStorage";

export const getToken = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE));

export const isAuthenticated = () => getToken() !== null;
