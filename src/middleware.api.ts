import { NextResponse, type NextMiddleware, type NextRequest } from "next/server";

import { pathToRegexp } from "path-to-regexp";

import { UserRole } from "./apis";
import { verifyJWT } from "./utils";

type RouteRole = UserRole | "PUBLIC" | "ANONYMOUS";

const ROUTE_PERMISSIONS: Record<string, RouteRole[]> = {
  "/auth/(.*)": ["ANONYMOUS"],
  "/teams": ["GUEST", "STUDENT", "ADMIN"],
  "/teams/(.*)": ["GUEST", "STUDENT", "ADMIN"],
};

const AUTH_USER_REDIRECT_URL = "/";
const NON_AUTH_USER_REDIRECT_URL = "/auth/login";

const redirectTo = (
  req: NextRequest,
  to: string,
  options?: {
    messageType?: "success" | "warn" | "error" | "info";
    message?: string;
  }
) => {
  const searchParams = new URLSearchParams({ ...options });
  const url = `${to}?${searchParams.toString()}`;

  return NextResponse.redirect(new URL(url, req.url));
};

export const middleware: NextMiddleware = async (req: NextRequest) => {
  const { JWT_TOKEN_NAME, JWT_SECRET_KEY } = process.env;
  const { pathname } = req.nextUrl;

  const matchedRoute = Object.keys(ROUTE_PERMISSIONS).filter((route) => {
    const regex = pathToRegexp(route);
    return regex.test(pathname);
  })[0];

  // 권한이 명시되어 있지 않는 경우 -> 모두 허용
  if (!ROUTE_PERMISSIONS[pathname] && !matchedRoute) return;

  const targetPermissions = ROUTE_PERMISSIONS[pathname] || ROUTE_PERMISSIONS[matchedRoute];
  const refreshToken = req.cookies.get(JWT_TOKEN_NAME)?.value;

  // PUBLIC 권한이 포함된 경우 -> 모두 허용
  if (targetPermissions.includes("PUBLIC")) return;

  if (refreshToken) {
    // Case. 리프레시 토큰이 있는 사용자

    const validToken = await verifyJWT(refreshToken, JWT_SECRET_KEY);
    if (!validToken) {
      return redirectTo(req, NON_AUTH_USER_REDIRECT_URL, {
        message: "인증이 만료되었어요. 다시 로그인해주세요",
        messageType: "error",
      });
    }

    const role = validToken.role as UserRole;

    // ANONYMOUS 권한이 포함된 경우 -> 권한 없음 리다이렉트
    if (targetPermissions.includes("ANONYMOUS")) {
      return redirectTo(req, AUTH_USER_REDIRECT_URL, {
        message: "잘못된 접근이에요",
        messageType: "warn",
      });
    }
    // 사용자의 권한이 포함된 경우 -> 접근 허용
    else if (targetPermissions.includes(role)) {
      return;
    } else {
      return redirectTo(req, AUTH_USER_REDIRECT_URL, {
        message: "잘못된 접근이에요",
        messageType: "warn",
      });
    }
  } else {
    // Case. 비로그인 사용자

    // ANONYMOUS 권한이 포함된 경우 -> 접근 허용
    if (targetPermissions.includes("ANONYMOUS")) return;
    // 이 외 모든 접근 -> 제한
    return redirectTo(req, AUTH_USER_REDIRECT_URL, {
      message: "로그인 후 이용해주세요",
      messageType: "warn",
    });
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
