import { DDayProgress } from "@/components/bambok/d-day-progress";
import URLButton from "@/components/bambok/url-button";
import { Button } from "@/components/ui";
import Link from "next/link";
import { cookies } from "next/headers";
import Title from "@/components/bambok/title";
import Basket from "@/components/bambok/basket";

export default async function BambokID({ params }: { params: { id: string } }) {
  const { id } = params;
  const userCookieStore = cookies().get("user")?.value;
  const token = cookies().get("token")?.value || "";
  const loggedInUser = userCookieStore ? JSON.parse(userCookieStore) : null; // 현재 유저
  const isSame = loggedInUser && loggedInUser.identifier === id;
  // console.log("현재 user와 동일한가", isSame);
  return (
    <div className="flex h-screen flex-col">
      {isSame && <DDayProgress createdAt={loggedInUser.createdAt} />}

      <div className="flex h-full max-h-[1000px] flex-col justify-around px-[6%]">
        <Title isSame={isSame} identifier={id} loggedInUser={loggedInUser} token={token} />
        <Basket isSame={isSame} identifier={id} token={token} />
        {isSame ? (
          <URLButton identifier={id} />
        ) : (
          <div className="flex w-full flex-row justify-between">
            <Link className="flex w-[32%] flex-col justify-end" href="/">
              <div className="mb-2 text-center text-sm text-primary">
                <span>없다면</span>
                <span className="text-nowrap"> 만들어봐요!</span>
              </div>
              <Button className="w-full rounded-lg bg-quaternary py-7 text-xl">내 뱀복이</Button>
            </Link>
            <Link className="w-[65%]" href={`/create/${id}`}>
              <div className="mb-2 text-center text-sm">
                작성하신 덕담은
                <div>
                  <span className="text-primary">2025년 1월 1일</span>에 공개 돼요!
                </div>
              </div>
              <Button className="w-full rounded-lg bg-secondary py-7 text-xl">덕담 보내기</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
