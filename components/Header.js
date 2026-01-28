'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      paddingBottom: '20px',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'var(--background)'
    }}>
      {/* Top Border */}
      <div style={{ borderBottom: '1px solid #000', marginBottom: '5px' }}></div>

      {/* Slogan */}


      {/* Bottom Border */}
      <div style={{ borderBottom: '1px solid #000', marginBottom: '20px' }}></div>

      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" className="site-logo" style={{ textDecoration: 'none' }}>
          KILL SNOOZE!
        </Link>
        <div style={{ width: '24px' }}>
          {/* Placeholder for alignment */}
        </div>
      </div>
    </header>
  );
}
