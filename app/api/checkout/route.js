import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, address, city, zip, country, newsletter, digitalDelivery } = await request.json();

        if (!email || !name) {
            return NextResponse.json({ error: 'Name and Email are required' }, { status: 400 });
        }

        const addressDetails = JSON.stringify({
            address,
            city,
            zip,
            country
        });

        await sql`
      INSERT INTO orders (name, email, address_details, digital_delivery, newsletter)
      VALUES (${name}, ${email}, ${addressDetails}, ${digitalDelivery}, ${newsletter});
    `;

        return NextResponse.json({ message: 'Order created successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
