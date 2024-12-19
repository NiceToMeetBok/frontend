import { UserType } from "@/types/user";
// token 기반 사용자 정보를 가져오는 API 호출
export const getUserByToken = async (token: string): Promise<UserType | null> => {
  try {
    //const response = GET 요청

    // const data: UserType = await response.json();

    //임시
    const data: UserType = {
      id: 1,
      identifier: "3839627982",
      nickname: "보선",
      code: "1234 ",
    };
    return data;
  } catch (error) {
    console.error("Put Nickname 요청 실패:", error);
    return null;
  }
};
