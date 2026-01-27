import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartItem } = useCart();
  const cartCount = cartItem ? 1 : 0;

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
        <Link href="/" className="supreme-logo" style={{ textDecoration: 'none' }}>
          KILL SNOOZE!
        </Link>

        <Link
          href="/cart"
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          CART ({cartCount})
        </Link>
      </div>
    </header>
  );
}
