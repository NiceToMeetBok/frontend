import React from "react";
import { DDayProgress } from "@/components/bambok/d-day-progress";
import { cookies } from "next/headers";
import { DDAY } from "@/constants/dday";

export default async function BarLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id?: string };
}) {
  const userCookieStore = cookies().get("user")?.value;
  const loggedInUser = userCookieStore ? JSON.parse(userCookieStore) : null;
  const now = new Date();
  const isSame = loggedInUser && params.id && loggedInUser.identifier === params.id;
  // console.log(loggedInUser, params.id, isSame);
  return (
    <div className="flex h-screen flex-col">
      {isSame && now < DDAY && <DDayProgress createdAt={loggedInUser?.createdAt} />}
      <div className="flex h-full max-h-[900px] flex-col justify-around px-[6%]">{children}</div>
    </div>
  );
}

export const dynamicParams = true;
