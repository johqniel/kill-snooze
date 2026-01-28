import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SuccessScreen() {
    const [limit, setLimit] = useState(99);

    useEffect(() => {
        fetch('/api/stats')
            .then(res => res.json())
            .then(data => {
                if (data.limit) setLimit(data.limit);
            })
            .catch(err => console.error('Failed to fetch stats:', err));
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#d01d1d', /* Red background for impact */
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            textAlign: 'center',
            padding: '20px'
        }}>
            <h1 style={{ fontSize: '4rem', fontWeight: '900', fontStyle: 'italic', marginBottom: '20px', lineHeight: 1 }}>
                YOU MADE IT.
            </h1>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', maxWidth: '800px' }}>
                YOU ARE ONE OF THE FIRST {limit} CLIENTS.
            </p>
            <div style={{ width: '100px', height: '5px', backgroundColor: 'white', margin: '30px auto' }}></div>
            <p style={{ fontSize: '1.5rem' }}>
                IT'S ON US.
            </p>

            <Link href="/" style={{
                marginTop: '40px',
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.2rem',
                border: '2px solid white',
                padding: '10px 30px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                display: 'inline-block'
            }}>
                BACK TO HOME
            </Link>
        </div>
    );
}
