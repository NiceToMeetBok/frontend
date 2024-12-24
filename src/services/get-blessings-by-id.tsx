import { BlessingType } from "@/types/blessings";
// identifier 기반 덕담 정보를 가져오는 API 호출

export const getBlessingsById = async (identifier: string): Promise<BlessingType[] | []> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/open-api/blessings/${identifier}`,
      {
        method: "GET",
        cache: "force-cache",
      },
    );
    const data: BlessingType[] = await response.json();
    return data;
  } catch (error) {
    console.error("덕담 받는 사용자 정보 GET 요청 실패:", error);
    return [];
  }
};
