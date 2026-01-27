import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, newsletter } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        await sql`
      INSERT INTO waitlist (name, email, newsletter)
      VALUES (${name}, ${email}, ${newsletter});
    `;

        return NextResponse.json({ message: 'Joined waitlist successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
