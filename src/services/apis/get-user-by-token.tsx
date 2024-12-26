import { UserType } from "@/types/user";
import apiClient from "../api";
// token 기반 사용자 정보를 가져오는 API 호출
export const getUserByToken = async (token: string): Promise<UserType> => {
  try {
    const response = await apiClient.get<UserType>("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data: UserType = response.data || response;
    return data;
  } catch (error) {
    console.error("사용자 정보 GET 요청 실패:", error);
    throw error;
  }
};
