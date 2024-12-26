import { BlessingType } from "@/types/blessings";
import apiClient from "../api";

// token 기반 덕담을 가져오는 API 호출
export const getBlessingsByToken = async (token: string): Promise<BlessingType[] | []> => {
  try {
    const response = await apiClient.get("/blessings", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: BlessingType[] = response.data || response;
    return data;
  } catch (error) {
    console.error("덕담 GET 요청 실패:", error);
    return [];
  }
};
