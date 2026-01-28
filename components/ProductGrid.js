import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import JoinListModal from './JoinListModal';
import { useCart } from '../context/CartContext';

export default function ProductGrid() {
    const { addToCart } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [limit, setLimit] = useState(99); // Default limit

    useEffect(() => {
        fetch('/api/stats')
            .then(res => res.json())
            .then(data => {
                if (data.limit) setLimit(data.limit);
            })
            .catch(err => console.error('Failed to fetch stats:', err));
    }, []);

    const products = [
        {
            id: 1,
            name: "THE ENVELOPE",
            price: "€89.00",
            displayPrice: "€0.00",
            images: ["/envelope.png", "/envelope_product_one.png"],
            statusText: `Free for the first ${limit} orders.`,
            buttonText: "ADD TO CART",
            action: "add_to_cart"
        },
        {
            id: 2,
            name: "THE BOX",
            price: null,
            displayPrice: "PREORDER",
            images: ["/box.png", "/box_product_one.png"],
            statusText: "Register for preorder list.",
            buttonText: "JOIN LIST",
            action: "join_list"
        }
    ];

    const handleAction = (product) => {
        if (product.action === 'add_to_cart') {
            addToCart(product);
        } else if (product.action === 'join_list') {
            setIsModalOpen(true);
        }
    };

    return (
        <section style={{ padding: '40px 0' }}>
            <div className="container">
                {/* Double line separator before grid */}
                <div style={{
                    borderTop: '1px solid #000',
                    borderBottom: '1px solid #000',
                    padding: '10px 0',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    letterSpacing: '2px',
                    fontWeight: 'bold',
                    marginBottom: '40px',
                    position: 'sticky',
                    top: '185px',
                    zIndex: 900,
                    backgroundColor: 'var(--background)'
                }}>
                    minimize your snooze, unleash your full potential
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                    gap: '40px'
                }}>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={() => handleAction(product)}
                        />
                    ))}
                </div>
            </div>

            <JoinListModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
