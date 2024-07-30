// import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   locales: ["en", "fr"],
//   defaultLocale: "en",
// });

// export const config = {
//   matcher: ["/((?!api|_next|.*\\..*).*)"],
// };
import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}

// only applies this middleware to files in the app directory
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
