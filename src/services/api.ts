import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // if (error.response?.status === 401) { -> 이후 상세 처리
    cookies.remove("user", { path: "/" });
    cookies.remove("token", { path: "/" });

    return Promise.reject(error); // 에러를 호출한 곳으로 전달
  },
);

export default apiClient;
