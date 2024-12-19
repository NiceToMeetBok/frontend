import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUserByToken } from "./services/get-user-by-token";
import { UserType } from "./types/user";

export const config = {
  matcher: ["/bambok", "/bambok/:path*"],
};

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname === "/bambok") {
    const token = searchParams.get("token");

    if (token) {
      const data: UserType | null = await getUserByToken(token);
      if (data) {
        return NextResponse.redirect(new URL(`/bambok/${data?.identifier}`, request.url));
      } else {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } else {
      // token이 없는 경우
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}
