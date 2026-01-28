'use client';

import { useState } from 'react';

export default function ProductCard({ product, onAction }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    return (
        <div
            style={{ display: 'flex', flexDirection: 'column' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{
                backgroundColor: '#f9f9f9',
                marginBottom: '20px',
                padding: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                minHeight: '400px'
            }}>
                <img
                    src={product.images[currentImageIndex]}
                    alt={product.name}
                    style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'contain' }}
                />

                {/* Arrows - Only visible on hover and if multiple images exist */}
                {isHovered && product.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            style={{
                                position: 'absolute',
                                left: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '2rem',
                                fontWeight: 'bold'
                            }}
                        >
                            &lt;
                        </button>
                        <button
                            onClick={nextImage}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '2rem',
                                fontWeight: 'bold'
                            }}
                        >
                            &gt;
                        </button>
                    </>
                )}
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '10px', textTransform: 'uppercase' }}>
                {product.name}
            </h3>

            <div style={{ marginBottom: '15px' }}>
                {product.price && (
                    <span style={{ textDecoration: 'line-through', color: '#999', marginRight: '10px', fontSize: '1.1rem' }}>
                        {product.price}
                    </span>
                )}
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                    {product.displayPrice}
                </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#d01d1d', fontWeight: 'bold', marginBottom: '20px' }}>
                {product.statusText}
            </p>

            <button
                onClick={() => onAction && onAction(product)}
                className="btn-primary"
                style={{
                    width: '100%',
                    borderRadius: '0',
                }}
            >
                {product.buttonText}
            </button>
        </div>
    );
}
