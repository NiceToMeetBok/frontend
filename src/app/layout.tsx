import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/reset.css";
import localFont from "next/font/local";

const regular = localFont({
  src: "./fonts/CookieRun Regular.ttf",
  variable: "--font-regular",
});
const bold = localFont({
  src: "./fonts/CookieRun Bold.ttf",
  variable: "--font-bold",
});

export const metadata: Metadata = {
  title: "만반잘복: 만나서 반가워. 새해도 잘 부탁해. 복 많이 받아",
  description: "만반잘복은 소중한 사람들에게 마음을 전할 수 있는 온라인 롤링 페이퍼 서비스 입니다.",
  icons: {
    icon: "/bambok.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={regular.className}>
      <body className={`flex h-screen justify-center bg-white ${bold.variable}`}>
        <div className="w-full bg-main-bg sm:w-[500px]">{children}</div>
      </body>
    </html>
  );
}
