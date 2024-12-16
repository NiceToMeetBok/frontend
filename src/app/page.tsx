import { DDayProgress } from "@/components/main/d-day-progress";
import URLButton from "@/components/main/url-button";
import { userInfo } from "@/mocks/data";

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <DDayProgress />

      <div className="flex h-full max-h-[1000px] flex-col justify-around pl-[6%] pr-[6%]">
        <header className="flex items-center">
          <div className="font-bold text-3xl">
            <div>
              <span className="text-primary">보빈</span>
              <span> 님의 뱀복이가</span>
            </div>
            <div>
              <span className="text-primary"> 0</span>
              <span>개의 덕담을 받았어요. </span>
            </div>
          </div>
        </header>

        <div className="relative">
          <img src="/bambok-basket.png" className="w-full" />

          <div className="absolute left-[50%] top-[50%] w-[20%] -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <img src="/luckybags/1.png" />
              <div className="text-sm text-white">복주머니1</div>
            </div>
          </div>

          <div className="absolute left-[29%] top-[35%] w-[20%] -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <img src="/luckybags/2.png" />
              <div className="text-sm text-white">복주머니2</div>
            </div>
          </div>

          <div className="absolute left-[75%] top-[38%] w-[20%] -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <img src="/luckybags/3.png" />
              <div className="text-sm text-white">복주머니3</div>
            </div>
          </div>

          <div className="absolute left-[54%] top-[25%] w-[20%] -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <img src="/luckybags/4.png" />
              <div className="text-sm text-white">복주머니4</div>
            </div>
          </div>

          <div className="absolute left-[30%] top-[62%] w-[20%] -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <img src="/luckybags/5.png" />
              <div className="text-sm text-white">복주머니5</div>
            </div>
          </div>

          <div className="absolute left-[70%] top-[62%] w-[20%] -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <img src="/luckybags/6.png" />
              <div className="text-sm text-white">복주머니6</div>
            </div>
          </div>

          {userInfo.blessings_cnt == 0 && (
            <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 transform text-2xl text-white">
              <div className="whitespace-nowrap">뱀복이를 공유하고</div>
              <div className="whitespace-nowrap">덕담을 받아보세요!</div>
            </div>
          )}
        </div>

        <URLButton />
      </div>
    </div>
  );
}
