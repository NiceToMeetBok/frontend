import { BlessingType } from "@/types/blessings";
export const postBlessing = async ({ identifier, nickname, body, luckyBagId }: BlessingType) => {
  const payload = {
    identifier,
    nickname,
    body,
    luckyBagId,
  };
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/open-api/blessings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("덕담 보내기 요청 실패:", response.statusText);
      return null;
    }

    return response;
  } catch (error) {
    console.error("덕담 보내기 요청 실패:", error);
    throw new Error("덕담 전송에 실패했습니다.");
  }
};
