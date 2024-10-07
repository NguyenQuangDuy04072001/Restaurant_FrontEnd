import axios from "axios";
import { Api } from "./Api";

const axiosClient = axios.create({
  baseURL: Api.BASE_URL + Api.PREFIX,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Optional: Add interceptors for request and response
axiosClient.interceptors.request.use(
  (config) => {
    // Có thể thêm token hoặc các logic khác vào request nếu cần
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Xử lý lỗi chung như báo lỗi, refresh token, v.v.
    return Promise.reject(error);
  }
);

export default axiosClient;
