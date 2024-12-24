import { UserType } from "@/types/user";
// identifier 기반 사용자 정보를 가져오는 API 호출

export const getUserById = async (identifier: string): Promise<UserType | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/open-api/users/${identifier}`,
      {
        method: "GET",
        cache: "force-cache",
      },
    );
    const data: UserType = await response.json();
    return data;
  } catch (error) {
    console.error("덕담 받는 사용자 정보 GET 요청 실패:", error);
    return null;
  }
};
