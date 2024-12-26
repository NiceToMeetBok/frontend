import { UserType } from "@/types/user";
import apiClient from "../api";

export const putNickname = async (code: string, nickname: string): Promise<UserType> => {
  const payload = {
    nickname,
    code,
  };

  try {
    const response = await apiClient.put<UserType>("/users/nickname", payload);
    // console.log("Full response:", response);
    const data: UserType = response.data || response;
    return data;
  } catch (error) {
    console.error("Put Nickname 요청 실패:", error);
    throw error;
  }
};
