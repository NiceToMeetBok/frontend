import { BlessingType } from "@/types/blessings";
import apiClient from "../api";
// identifier 기반 덕담 정보를 가져오는 API 호출

export const getBlessingsById = async (identifier: string): Promise<BlessingType[] | []> => {
  try {
    const response = await apiClient.get(`/open-api/blessings/${identifier}`);
    const data: BlessingType[] = response.data || response;
    return data;
  } catch (error) {
    console.error("덕담 받는 사용자 정보 GET 요청 실패:", error);
    return [];
  }
};
