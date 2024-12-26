import { BlessingType } from "@/types/blessings";
import apiClient from "../api";
export const postBlessing = async ({ identifier, nickname, body, luckyBagId }: BlessingType) => {
  const payload = {
    identifier,
    nickname,
    body,
    luckyBagId,
  };
  try {
    const response = await apiClient.post("/open-api/blessings", payload);
    return response.data || response;
  } catch (error) {
    console.error("덕담 보내기 요청 실패:", error);
    throw error;
  }
};
