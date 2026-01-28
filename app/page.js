'use client';


import Link from 'next/link';
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';

export default function Home() {

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <Header />

      <ProductGrid />

      <footer style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid #eee', marginTop: 'auto', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Link href="/impressum" style={{ color: '#999', textDecoration: 'underline', fontSize: '0.8rem' }}>IMPRESSUM</Link>
        <Link href="/impressum" style={{ color: '#999', textDecoration: 'underline', fontSize: '0.8rem' }}>DATENSCHUTZERKLÄRUNG</Link>
      </footer>
    </main>
  );
}
