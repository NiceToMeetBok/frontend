import { DDayProgress } from "@/components/bambok/d-day-progress";
import URLButton from "@/components/bambok/url-button";
import { Button } from "@/components/ui";
import { blessings } from "@/mocks/data";
import Link from "next/link";
import { cookies } from "next/headers";
import Title from "@/components/bambok/title";

const BASKET_POSITION = [
  { left: "50%", top: "50%" },
  { left: "29%", top: "35%" },
  { left: "75%", top: "38%" },
  { left: "54%", top: "25%" },
  { left: "30%", top: "62%" },
  { left: "70%", top: "62%" },
];

export default async function BambokID({ params }: { params: { id: string } }) {
  const { id } = params;
  const userCookieStore = cookies().get("user")?.value;
  const token = cookies().get("token")?.value || "";
  const loggedInUser = userCookieStore ? JSON.parse(userCookieStore) : null; // 현재 유저
  const isSame = loggedInUser && loggedInUser.identifier === id;
  console.log("현재 user와 동일한가", isSame);

  return (
    <div className="flex h-screen flex-col">
      {isSame && <DDayProgress />}

      <div className="flex h-full max-h-[1000px] flex-col justify-around pl-[6%] pr-[6%]">
        <Title isSame={isSame} identifier={id} loggedInUser={loggedInUser} token={token} />

        <div className="relative">
          <img src="/bambok-basket.png" className="w-full" />

          {blessings.length > 0 ? (
            blessings.map((blessing, index) => {
              const position = BASKET_POSITION[index % 6];

              return (
                <div
                  key={blessing.id}
                  className="absolute w-[20%] -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: position.left,
                    top: position.top,
                  }}
                >
                  <div className="flex flex-col items-center">
                    <img src={`/luckybags/${blessing.luckyBagId}.png`} />
                    <div className="text-sm text-white">{blessing.nickname}</div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 transform text-2xl text-white">
              <div className="whitespace-nowrap">뱀복이를 공유하고</div>
              <div className="whitespace-nowrap">덕담을 받아보세요!</div>
            </div>
          )}
        </div>

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
