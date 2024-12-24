"use client";
// user 전체 삭제용 (임시 사용)
export const handleDelete = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/all`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log("삭제 성공:");
  } else {
    console.error("삭제 실패:", response.statusText);
  }
};

export default function DeleteComponent() {
  return (
    <div
      onClick={() => {
        handleDelete();
      }}
    >
      삭제
    </div>
  );
}
