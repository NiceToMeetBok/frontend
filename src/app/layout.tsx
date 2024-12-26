import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/reset.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

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
  description: "소중한 사람들에게 마음을 전할 수 있는 온라인 롤링 페이퍼 서비스 입니다.",
  icons: {
    icon: "/bambok.png",
  },
  openGraph: {
    title: "만반잘복: 만나서 반가워. 새해도 잘 부탁해. 복 많이 받아",
    description: "소중한 사람들에게 마음을 전할 수 있는 온라인 롤링 페이퍼 서비스 입니다.",
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={regular.className}>
      <body
        className={`flex h-screen min-w-[320px] justify-center bg-out-bg bg-repeat ${bold.variable}`}
      >
        <div className="flex w-full flex-col justify-center bg-main-bg sm:w-[500px]">
          <div>{children}</div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
