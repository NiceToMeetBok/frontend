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
      {isSame && <DDayProgress />}

      <div className="flex h-full max-h-[1000px] flex-col justify-around pl-[6%] pr-[6%]">
        <Title isSame={isSame} identifier={id} loggedInUser={loggedInUser} token={token} />
        <Basket isSame={isSame} identifier={id} token={token} />
        {isSame ? (
          <URLButton />
        ) : (
          <div className="flex w-full flex-row justify-between">
            <Link className="w-[32%]" href="/">
              <div className="mb-2 text-center text-sm text-primary"> 없다면 만들어봐요! </div>
              <Button className="h-16 w-full rounded-lg bg-quaternary text-xl">내 뱀복이</Button>
            </Link>
            <Link className="w-[65%]" href="/create">
              <div className="mb-2 text-center text-sm">
                작성하신 덕담은 <span className="text-primary">2025년 1월 1일</span>에 공개 돼요!
              </div>
              <Button className="h-16 w-full rounded-lg bg-secondary text-xl">덕담 보내기</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
