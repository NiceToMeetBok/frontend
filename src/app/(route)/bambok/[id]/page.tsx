import { DDayProgress } from "@/components/bambok/d-day-progress";
import URLButton from "@/components/bambok/url-button";
import { Button } from "@/components/ui";
import { userInfo, blessings } from "@/mocks/data";
import Link from "next/link";

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
  const isSame = userInfo.userid === id;

  // console.log("현재 user와 동일한가", isSame);
  return (
    <div className="flex h-screen flex-col">
      {isSame && <DDayProgress />}

      <div className="flex h-full max-h-[1000px] flex-col justify-around pl-[6%] pr-[6%]">
        <header className="flex items-center">
          <div className="font-bold text-3xl">
            <div>
              <span className="text-primary">{userInfo.nickname}</span>
              <span> 님의 뱀복이가</span>
            </div>
            <div>
              <span className="text-primary">{blessings.length}</span>
              <span>개의 덕담을 받았어요. </span>
            </div>
          </div>
        </header>

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
                    <img src={`/luckybags/${blessing.luckybagID}.png`} />
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
