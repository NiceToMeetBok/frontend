import { UserType } from "@/types/user";
// token 기반 사용자 정보를 가져오는 API 호출
export const getUserByToken = async (token: string): Promise<UserType | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data: UserType = await response.json();
    return data;
  } catch (error) {
    console.error("사용자 정보 GET 요청 실패:", error);
    return null;
  }
};
