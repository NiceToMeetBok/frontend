import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { userInfo } from "@/mocks/data";

export const config = {
  matcher: ["/bambok", "/bambok/:path*"],
};

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname === "/bambok") {
    const token = searchParams.get("token");

    if (token) {
      // TODO : 사용자 정보를 가져오는 API 호출
      const id = userInfo.userid; // 임시
      return NextResponse.redirect(new URL(`/bambok/${id}`, request.url));
    } else {
      // token이 없는 경우
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}
