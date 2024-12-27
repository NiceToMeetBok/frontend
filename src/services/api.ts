import generateUUID from "@/utils/generate-uuid";
import axios from "axios";
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
apiClient.interceptors.request.use(
  (request) => {
    const uuid = generateUUID();
    request.headers["identifierCode"] = uuid;
    return request;
  },
  (error) => {
    console.error("Request Interceptor Error:", error);
    return Promise.reject(error);
  },
);
// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 || error.response?.status === 403) {
      window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/`;
    } else if (error.response?.status === 404) {
      window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/404`;
    } else if (error.response?.status === 530) {
      originalRequest._retryCount = originalRequest._retryCount || 0;

      if (originalRequest._retryCount < 3) {
        originalRequest._retryCount += 1;
        return apiClient(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;
