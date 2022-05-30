import apiClient from "./client";
import clien from "./client";

const login = (email, password) => apiClient.post("/auth", { email, password });

export default {
  login,
};
