import Content from "@/components/blessing/content";
import { Button, Header } from "@/components/ui";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

const Blessing = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const token = cookies().get("token")?.value || "";
  const userCookie = cookies().get("user")?.value;
  const loggedInUser = userCookie ? JSON.parse(userCookie) : null;

  return (
    <>
      <Header>덕담 보기</Header>
      <div className="py-4 text-lg">
        새해
        <span className="px-2 text-primary">&apos;복&apos;</span>많이 받으세요!
      </div>

      <div className="flex-1 justify-between">
        <Content id={id} token={token} />
      </div>

      <Link href={`/bambok/${loggedInUser?.identifier}`} className="flex justify-center">
        <Button className="w-full rounded-lg bg-secondary py-6 text-lg">돌아가기</Button>
      </Link>
    </>
  );
};

export default Blessing;
