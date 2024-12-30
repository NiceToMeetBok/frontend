import { BlessingType } from "@/types/blessings";
import apiClient from "../api";

type GetBlessingProps = {
  id: string;
  token: string;
};
export const getBlessing = async ({ id, token }: GetBlessingProps): Promise<BlessingType> => {
  try {
    const response = await apiClient.get(`/blessings/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data: BlessingType = response.data || response;
    console.log(data);
    return data;
  } catch (error) {
    console.error("덕담 받는 GET 요청 실패:", error);
    throw error;
  }
};
