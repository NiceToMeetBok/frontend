import { NoticeDDay } from "@/components/main/notice-d-day";

export default function Page() {
  return (
    <div className="flex h-full flex-col justify-between pl-[6vw] pr-[6vw]">
      <header className="flex items-center">
        <div className="font-bold text-3xl">
          <div>
            <span className="text-primary">보빈</span>
            <span> 님의 뱀복이가</span>
          </div>
          <div>
            <span className="text-primary"> 0</span>
            <span>개의 편지를 받았어요. </span>
          </div>
        </div>
      </header>

      <div className="flex h-full flex-col items-center justify-center">
        <div className="flex h-[90%] flex-col items-center justify-between">
          <div className="w-[max-content] rounded-lg border-2 border-secondary bg-tertiay px-2 py-1">
            <NoticeDDay />
          </div>
          <div>
            <img src="/bambok-basket.png"></img>
            <div> 뱀복이를 공유하고 덕담을 받아보세요! </div>
          </div>

          <div>
            <div>
              <span>받은 덕담은 </span>
              <span className="text-primary">2025년 1월 1일</span>
              <span>에 확인할 수 있어요</span>
            </div>
            <button>
              <img src="/icon/share.svg" />
              <div>url 복사하기</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
