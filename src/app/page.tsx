export default function Home() {
  return (
    <div className="h-full">
      <div className="item-center flex h-full flex-col justify-evenly">
        <div className="flex flex-col gap-3">
          <div>
            <div className="text-center">
              <span className="font-bold text-3xl text-primary"> 만반잘복</span>
              <span className="font-bold text-3xl">으로 따뜻한</span>
            </div>
            <div className="text-center font-bold text-3xl">새해 인사를 주고 받아요!</div>
          </div>
          <div className="font-regular text-base">
            <div className="text-center">
              <span className="text-primary">만반잘복</span>
              <span>은 소중한 사람들에게 마음을 전할 수 있는</span>
            </div>
            <div className="text-center">
              <span className="text-primary">온라인 롤링 페이퍼 서비스</span>
              <span> 입니다.</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/bambok.png" alt="logo" className="w-5/6"></img>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-center font-regular text-base">
            <span> ↓↓</span>
            <span className="text-primary"> 뱀복이</span>
            <span> 만들러 가기 ↓↓</span>
          </div>
          <div className="flex justify-center">
            <img src="/kakaologin.png" alt="kakaologin" className="w-5/6"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
