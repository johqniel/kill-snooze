import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        let hasMore = true;
        let cursor;
        let totalClaims = 0;

        // Count all blobs in the 'orders/' folder
        while (hasMore) {
            const { blobs, hasMore: more, cursor: nextCursor } = await list({
                prefix: 'orders/',
                cursor,
                limit: 1000,
            });
            totalClaims += blobs.length;
            hasMore = more;
            cursor = nextCursor;
        }

        // Calculate dynamic limit
        // Limit starts at 99. If claims reach 99, it jumps to 199, then 299, etc.
        let limit = 99;
        while (totalClaims >= limit) {
            limit += 100;
        }

        return NextResponse.json({
            count: totalClaims,
            limit: limit
        }, {
            status: 200,
            headers: {
                'Cache-Control': 'no-store, max-age=0',
            }
        });
    } catch (error) {
        console.error('Stats error:', error);
        // Fallback in case of error (e.g. Blob not configured yet)
        return NextResponse.json({ count: 0, limit: 99 }, { status: 200 });
    }
}
