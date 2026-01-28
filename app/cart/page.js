'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import SuccessScreen from '../../components/SuccessScreen';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';

export default function CartPage() {
    const { cartItem, clearCart } = useCart();
    const [step, setStep] = useState(1); // 1: Summary, 2: Address, 3: Success
    const [limit, setLimit] = useState(99);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        newsletter: false,
        digitalDelivery: false
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('/api/stats')
            .then(res => res.json())
            .then(data => {
                if (data.limit) setLimit(data.limit);
            })
            .catch(err => console.error('Failed to fetch stats:', err));
    }, []);

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleProceed = () => {
        setStep(2);
    };

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                clearCart();
                setStep(3);
            } else {
                alert('Fehler bei der Bestellung. Bitte versuche es erneut.');
            }
        } catch (error) {
            console.error('Checkout error:', error);
            alert('Ein Fehler ist aufgetreten. Bitte versuche es erneut.');
        } finally {
            setLoading(false);
        }
    };

    if (step === 3) {
        return <SuccessScreen />;
    }

    if (!cartItem && step === 1) {
        return (
            <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />
                <div className="container" style={{ flex: 1, padding: '40px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>DEIN WARENKORB IST LEER</h1>
                    <Link href="/" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                        JETZT EINKAUFEN
                    </Link>
                </div>
                <footer style={{ textAlign: 'center', padding: '40px 0', color: '#999', fontSize: '0.8rem', borderTop: '1px solid #eee', marginTop: 'auto' }}>
                    &copy; 2026 KILL SNOOZE INC. ALLE RECHTE VORBEHALTEN.<br />
                    <Link href="/impressum" style={{ color: '#999', textDecoration: 'underline', marginTop: '10px', display: 'inline-block' }}>IMPRESSUM</Link>
                </footer>
            </main>
        );
    }

    // Use cartItem data if available, otherwise fallback (shouldn't happen due to empty check)
    const displayItem = cartItem || {};

    // Determine image source - cartItem.images is an array for new products, cartItem.image string for old/mock
    const imageSrc = Array.isArray(displayItem.images) ? displayItem.images[0] : displayItem.image;

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <div className="container" style={{ flex: 1, padding: '40px 20px', maxWidth: '800px' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '40px', textTransform: 'uppercase' }}>
                    {step === 1 ? 'DEIN WARENKORB' : 'KASSE'}
                </h1>

                {step === 1 && (
                    <div style={{ borderTop: '2px solid #000', paddingTop: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <img src={imageSrc} alt={displayItem.name} style={{ width: '100px', height: '100px', objectFit: 'contain', backgroundColor: '#f9f9f9', padding: '10px' }} />
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{displayItem.name}</h3>
                                    <p style={{ color: '#666' }}>Menge: 1</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ textDecoration: 'line-through', color: '#999' }}>{displayItem.price}</div>
                                <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{displayItem.displayPrice || "€0.00"}</div>
                            </div>
                        </div>

                        <div style={{ borderTop: '1px solid #eee', padding: '20px 0', borderBottom: '1px solid #eee', marginBottom: '40px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <span>Zwischensumme</span>
                                <span>{displayItem.price}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#d01d1d', fontWeight: 'bold' }}>
                                <span>Rabatt (FIRST{limit})</span>
                                <span>-{displayItem.price}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.5rem', fontWeight: '900', marginTop: '20px' }}>
                                <span>GESAMT</span>
                                <span>{displayItem.displayPrice || "€0.00"}</span>
                            </div>
                        </div>

                        <button
                            onClick={handleProceed}
                            style={{
                                width: '100%',
                                padding: '15px',
                                backgroundColor: '#000',
                                color: '#fff',
                                border: 'none',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                cursor: 'pointer'
                            }}
                        >
                            WEITER ZU DEN PERSÖNLICHEN DATEN
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <form onSubmit={handlePlaceOrder}>
                        <div style={{ marginBottom: '30px' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', fontWeight: 'bold' }}>KONTAKT & VERSAND</h2>

                            <input type="text" name="name" placeholder="VOLLSTÄNDIGER NAME" required
                                style={{ display: 'block', width: '100%', padding: '15px', marginBottom: '15px', border: '2px solid #000', borderRadius: 0 }}
                                onChange={handleChange} />

                            <input type="email" name="email" placeholder="E-MAIL ADRESSE" required
                                style={{ display: 'block', width: '100%', padding: '15px', marginBottom: '15px', border: '2px solid #000', borderRadius: 0 }}
                                onChange={handleChange} />

                            <input type="text" name="address" placeholder="STRASSE & HAUSNUMMER" required={!formData.digitalDelivery}
                                style={{ display: 'block', width: '100%', padding: '15px', marginBottom: '15px', border: '2px solid #000', borderRadius: 0, opacity: formData.digitalDelivery ? 0.5 : 1 }}
                                disabled={formData.digitalDelivery}
                                onChange={handleChange} />

                            <div style={{ display: 'flex', gap: '15px' }}>
                                <input type="text" name="city" placeholder="STADT" required={!formData.digitalDelivery}
                                    style={{ flex: 1, padding: '15px', marginBottom: '15px', border: '2px solid #000', borderRadius: 0, opacity: formData.digitalDelivery ? 0.5 : 1 }}
                                    disabled={formData.digitalDelivery}
                                    onChange={handleChange} />
                                <input type="text" name="zip" placeholder="PLZ" required={!formData.digitalDelivery}
                                    style={{ flex: 1, padding: '15px', marginBottom: '15px', border: '2px solid #000', borderRadius: 0, opacity: formData.digitalDelivery ? 0.5 : 1 }}
                                    disabled={formData.digitalDelivery}
                                    onChange={handleChange} />
                            </div>

                            <input type="text" name="country" placeholder="LAND" required={!formData.digitalDelivery}
                                style={{ display: 'block', width: '100%', padding: '15px', marginBottom: '15px', border: '2px solid #000', borderRadius: 0, opacity: formData.digitalDelivery ? 0.5 : 1 }}
                                disabled={formData.digitalDelivery}
                                onChange={handleChange} />

                            {/* Options */}
                            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                    <input
                                        type="checkbox"
                                        id="newsletter"
                                        name="newsletter"
                                        checked={formData.newsletter}
                                        onChange={handleChange}
                                        style={{ marginTop: '5px', transform: 'scale(1.2)', cursor: 'pointer' }}
                                    />
                                    <label htmlFor="newsletter" style={{ fontSize: '0.9rem', cursor: 'pointer', lineHeight: '1.4' }}>
                                        Ich stimme dem Newsletter zu.
                                    </label>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                    <input
                                        type="checkbox"
                                        id="digitalDelivery"
                                        name="digitalDelivery"
                                        checked={formData.digitalDelivery}
                                        onChange={handleChange}
                                        style={{ marginTop: '5px', transform: 'scale(1.2)', cursor: 'pointer' }}
                                    />
                                    <label htmlFor="digitalDelivery" style={{ fontSize: '0.9rem', cursor: 'pointer', lineHeight: '1.4' }}>
                                        Produkt per E-Mail erhalten statt Post.
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn-primary"
                            style={{ width: '100%', borderRadius: 0, opacity: loading ? 0.7 : 1 }}
                            disabled={loading}
                        >
                            {loading ? 'BEARBEITE...' : 'BESTELLUNG ABSCHICKEN'}
                        </button>
                    </form>
                )}
            </div>

            <footer style={{ textAlign: 'center', padding: '40px 0', color: '#999', fontSize: '0.8rem', borderTop: '1px solid #eee', marginTop: 'auto' }}>
                &copy; 2026 KILL SNOOZE INC. ALL RIGHTS RESERVED. <br />
                <Link href="/impressum" style={{ color: '#999', textDecoration: 'underline', marginTop: '10px', display: 'inline-block' }}>IMPRESSUM</Link>
            </footer>
        </main>
    );
}
