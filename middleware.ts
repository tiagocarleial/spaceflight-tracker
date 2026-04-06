import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware uses Edge Runtime which is required for Cloudflare Pages
export const config = {
  runtime: 'edge',
};

export function middleware(request: NextRequest) {
  return NextResponse.next();
}
