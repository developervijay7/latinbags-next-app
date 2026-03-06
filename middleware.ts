import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === "true";
const SECRET = process.env.MAINTENANCE_SECRET;

export function middleware(request: NextRequest) {

    if (!MAINTENANCE_MODE) {
        return NextResponse.next();
    }

    const { pathname, searchParams } = request.nextUrl;

    // Allow maintenance page
    if (pathname === "/maintenance") {
        return NextResponse.next();
    }

    // Allow static files
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/images") ||
        pathname.startsWith("/favicon") ||
        pathname.startsWith("/api")
    ) {
        return NextResponse.next();
    }

    // Check cookie bypass
    const bypass = request.cookies.get("latinbags_admin");

    if (bypass?.value === "true") {
        return NextResponse.next();
    }

    // Check secret query param
    const secretParam = searchParams.get("secret");

    if (secretParam && secretParam === SECRET) {

        const response = NextResponse.redirect(new URL("/", request.url));

        response.cookies.set("latinbags_admin", "true", {
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 7 days
            httpOnly: true,
        });

        return response;
    }

    // Redirect to maintenance
    return NextResponse.redirect(new URL("/maintenance", request.url));
}