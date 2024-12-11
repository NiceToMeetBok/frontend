import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "만반잘복: 만나서 반가워. 새해도 잘 부탁해. 복 많이 받아",
  description: "회원가입 페이지입니다.",
  icons: {
    icon: "/bambok.png",
  },
};

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pl-[5vw]">
      <header className="flex h-[15vh] items-center">
        <div className="font-bold text-3xl">
          <span> 나만의</span>
          <span className="text-primary"> 뱀복이</span>
          <span> 만들기</span>
        </div>
      </header>

      <div className="flex flex-col">{children}</div>
    </div>
  );
}
