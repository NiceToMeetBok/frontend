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
        const response = NextResponse.redirect(new URL(`/bambok/${data?.identifier}`, request.url));

        const tokenCookie = {
          name: "token",
          expires: Date.now() + 1 * 60 * 60 * 1000,
          httpOnly: true,
          value: token,
        };
        const userCookie = {
          name: "user",
          expires: Date.now() + 1 * 60 * 60 * 1000,
          httpOnly: true,
          value: JSON.stringify(data),
        };
        response.cookies.set(tokenCookie);
        response.cookies.set(userCookie);
        return response;
      } else {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } else {
      // token이 없는 경우
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}
