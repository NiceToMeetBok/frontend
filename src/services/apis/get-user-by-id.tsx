import { UserType } from "@/types/user";
import apiClient from "../api";
// identifier 기반 사용자 정보를 가져오는 API 호출

export const getUserById = async (identifier: string): Promise<UserType> => {
  try {
    const response = await apiClient.get(`/open-api/users/${identifier}`);
    const data: UserType = response.data || response;
    return data;
  } catch (error) {
    console.error("덕담 받는 사용자 정보 GET 요청 실패:", error);
    throw error;
  }
};
