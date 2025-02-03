import { routes } from '@/utils/routes';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const publicRoutes = [routes.login, routes.register, routes.forgetPassword];

  const token = req.cookies.get('authToken');

  if (token || publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(routes.login, req.url));
}

export const config = {
  matcher: [`${routes.home}/:path*`, `${routes.dashboard}/:path*`],
};
