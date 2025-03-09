import axios from "axios";
import jwtDecode from "jwt-decode";
import config from "../config.js";
import { toast } from "react-toastify";

// Get Token from localStorage
const getToken = () => localStorage.getItem("token");

// Attach token to every request dynamically
axios.interceptors.request.use((req) => {
  const token = getToken();
  if (token) req.headers.authorization = `Bearer ${token}`;
  return req;
});

// Register Admin
export const register = async (email, password) => {
  try {
    await axios.post(config.registerAdminUrl(), { email, password });
    toast.success("Registration successful!");
  } catch (e) {
    handleError(e);
  }
};

// Login Admin
export const login = async (email, password) => {
  try {
    const response = await axios.post(config.loginAdminUrl(), { email, password });

    // Store token
    localStorage.setItem("token", response.data.jwt);
    return { success: true };
  } catch (e) {
    handleError(e);
    return { success: false, message: e.response?.data?.message || "Login failed." };
  }
};

// Logout Admin
export const logout = () => {
  localStorage.removeItem("token");
};

// Check Authorization Status
export const isAuthorised = () => {
  const token = getToken();
  if (!token) return false;

  try {
    const { exp } = jwtDecode(token);
    
    // If token is expired, remove it
    if (exp * 1000 < Date.now()) {
      logout();
      return false;
    }

    return true;
  } catch {
    logout();
    return false;
  }
};

// Handle API Errors
const handleError = (e) => {
  if (e.response?.data?.message) {
    toast.error(e.response.data.message);
  } else {
    toast.error("Something went wrong.");
  }
};

