import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://adamalmahdi.com/sitemap.xml

# Security
Disallow: /api/
Disallow: /.env
Disallow: /admin/
Disallow: /private/

# Performance
Crawl-delay: 1
`;

  return new NextResponse(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}