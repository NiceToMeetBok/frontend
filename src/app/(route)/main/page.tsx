import { DDayProgress } from "@/components/main/d-day-progress";
import URLButton from "@/components/main/url-button";

export default function Page() {
  return (
    <div className="flex h-screen flex-col">
      <DDayProgress />

      <div className="flex h-[90vh] flex-col justify-around pl-[6vw] pr-[6vw]">
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
          <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 transform text-2xl text-white">
            <div className="whitespace-nowrap">뱀복이를 공유하고</div>
            <div className="whitespace-nowrap">덕담을 받아보세요!</div>
          </div>
        </div>

        <URLButton />
      </div>
    </div>
  );
}
