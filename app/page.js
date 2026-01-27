'use client';

import { useState } from 'react';
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';

export default function Home() {

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <Header />

      <ProductGrid />

      <footer style={{ textAlign: 'center', padding: '40px 0', color: '#999', fontSize: '0.8rem' }}>
        &copy; 2026 KILL SNOOZE INC. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}
