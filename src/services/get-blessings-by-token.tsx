import { BlessingType } from "@/types/blessings";

// token 기반 덕담을 가져오는 API 호출
export const getBlessingsByToken = async (token: string): Promise<BlessingType[] | []> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blessings`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data: BlessingType[] = await response.json();
    return data;
  } catch (error) {
    console.error("덕담 GET 요청 실패:", error);
    return [];
  }
};
