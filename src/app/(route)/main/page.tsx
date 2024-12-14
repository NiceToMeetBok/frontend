export default function Page() {
  return (
    <div className="flex h-full flex-col justify-between pl-[6vw] pr-[6vw]">
      <header className="flex items-center">
        <div className="font-bold text-3xl">
          <div>
            <span className="text-primary"> 보빈</span>
            <span> 님의 뱀복이가</span>
          </div>
          <div>
            <span className="text-primary"> 0</span>
            <span> 개의 편지를 받았어요. </span>
          </div>
        </div>
      </header>
      <div className="h-[90%]">
        <div> 2025년 새해까지 0일 00시 00분 00초 남았습니다</div>
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
  );
}
