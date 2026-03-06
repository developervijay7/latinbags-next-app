import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MAINTENANCE_MODE = true;
const SECRET = process.env.MAINTENANCE_SECRET;

export function middleware(request: NextRequest) {

    if (!MAINTENANCE_MODE) return NextResponse.next();

    const { pathname } = request.nextUrl;

    // Allow maintenance page itself
    if (pathname === "/maintenance") return NextResponse.next();

    // Allow static assets
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/images") ||
        pathname.startsWith("/favicon")
    ) {
        return NextResponse.next();
    }

    // If cookie exists → allow
    const bypass = request.cookies.get("latinbags_admin");

    if (bypass?.value === "true") {
        return NextResponse.next();
    }

    // Secret bypass
    if (pathname === `/bypass/${SECRET}`) {
        const response = NextResponse.redirect(new URL("/", request.url));

        response.cookies.set("latinbags_admin", "true", {
            path: "/",
            maxAge: 60 * 60 * 24,
        });

        return response;
    }

    // Redirect visitors to maintenance
    return NextResponse.redirect(new URL("/maintenance", request.url));
}