import { UserType } from "@/types/user";
export const putNickname = async (code: string, nickname: string): Promise<UserType | null> => {
  const payload = {
    nickname,
    code,
  };
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/nickname`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error:", errorData);
      return null;
    }

    const data: UserType = await response.json();

    return data;
  } catch (error) {
    console.error("Put Nickname 요청 실패:", error);
    return null;
  }
};
