import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Import the rate limiter
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Create a new rate limiter that allows 3 requests per 1 minute
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, "1 m"),
  analytics: true,
});

// without rate limiter
export async function middleware(req: NextRequest) {
  // We need to create a response and hand it to the supabase client to be able to modify the response headers.
  const res = NextResponse.next();
  // Create authenticated Supabase Client.
  const supabase = createMiddlewareClient({ req, res });
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Check if user is on the signin page
  if (req.nextUrl.pathname === "/signin" || req.nextUrl.pathname === "/") {
    return res;
  }

  // Check auth condition
  if (session) {
    // Authentication successful, forward request to protected route.
    return res;
  }

  // Auth condition not met, redirect to home page.
  const redirectUrl = req.nextUrl.clone();
  redirectUrl.pathname = "/signin";
  redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
  return NextResponse.redirect(redirectUrl);
}




/* export async function middleware(req: NextRequest) {
  // We need to create a response and hand it to the supabase client to be able to modify the response headers.
  const res = NextResponse.next();
  // Create authenticated Supabase Client.
  const supabase = createMiddlewareClient({ req, res });

  console.log("inside middlware");

  // Rate limit by IP address
  let ipAddress;

  console.log("this is the req object", req);

  let ip = req.ip ?? req.headers.get("x-real-ip");
  console.log("ip", ip);

  if (req && req?.ip) {
    console.log("before assigning ipAddress");
    ipAddress = req.ip;
    console.log("after assigning ipAddress");
  }

  let success;

  if (ipAddress) {
    const rateLimitResult = await ratelimit.limit(ipAddress);
    success = rateLimitResult.success;
  }

  // If rate limit is exceeded, respond with a 429 status code
  if (!success) {
    return NextResponse.error({ status: 429, statusText: "Too Many Requests" });
  }

  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Check if user is on the signin page
  if (req.nextUrl.pathname === "/signin" || req.nextUrl.pathname === "/") {
    return res;
  }

  // Check auth condition
  if (session) {
    // Authentication successful, forward request to protected route.
    return res;
  }

  // Auth condition not met, redirect to home page.
  const redirectUrl = req.nextUrl.clone();
  redirectUrl.pathname = "/signin";
  redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
  return NextResponse.redirect(redirectUrl);
}
 */

// with rate limiter

export const config = {
  matcher: "/app/:path*",
};
