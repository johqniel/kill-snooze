import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import JoinListModal from './JoinListModal';
import OrderModal from './OrderModal';

// TOGGLE: Set to true to use comic-style images
const USE_COMIC_IMAGES = true;

export default function ProductGrid() {
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
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
            images: USE_COMIC_IMAGES
                ? ["/envelope_comic.png"] // Single image for comic mode
                : ["/envelope.png", "/envelope_product_one.png"],
            statusText: "----------",
            buttonText: "KONTAKT AUFNEHMEN",
            action: "contact"
        },
        {
            id: 2,
            name: "THE BOX",
            images: USE_COMIC_IMAGES
                ? ["/box_comic.png"] // Single image for comic mode
                : ["/box.png", "/box_product_one.png"],
            statusText: "------------",
            buttonText: "PROJEKT UNTERSTÜTZEN",
            action: "join_list"
        }
    ];

    const handleAction = (product) => {
        if (product.action === 'contact') {
            setIsOrderModalOpen(true);
        } else if (product.action === 'join_list') {
            setIsJoinModalOpen(true);
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

                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAction={() => handleAction(product)}
                        />
                    ))}
                </div>
            </div>

            <JoinListModal
                isOpen={isJoinModalOpen}
                onClose={() => setIsJoinModalOpen(false)}
            />

            <OrderModal
                isOpen={isOrderModalOpen}
                onClose={() => setIsOrderModalOpen(false)}
            />
        </section>
    );
}
