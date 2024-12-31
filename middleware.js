import { NextResponse } from "next/server";

export function middleware(request) {
    // ja khushi koren
    console.log("Hello");

    return NextResponse.rewrite(new URL("/users", request.url));
}

export const config = {
    matcher: "/",
};
