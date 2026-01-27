import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();
        const { name, email } = data;

        if (!email || !name) {
            return NextResponse.json({ error: 'Name and Email are required' }, { status: 400 });
        }

        const filename = `orders/${Date.now()}-${email}.json`;
        const jsonContent = JSON.stringify(data, null, 2);

        const blob = await put(filename, jsonContent, {
            access: 'public',
            contentType: 'application/json',
        });

        return NextResponse.json({ message: 'Order created successfully', url: blob.url }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
