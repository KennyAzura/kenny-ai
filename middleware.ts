import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes
const isPublicRoute = createRouteMatcher(["/", "/api/webhooks/clerk"]);

export default clerkMiddleware((auth, req) => {
  // Protect non-public routes
  if (!isPublicRoute(req)) {
    auth();
  }
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    "/(api|trpc)(.*)",
  ],
};
