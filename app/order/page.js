'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import SuccessScreen from '../../components/SuccessScreen';
import Link from 'next/link';

export default function OrderPage() {
    const [step, setStep] = useState(2); // Start directly at form
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

    // Static Item for the Order Page
    const displayItem = {
        name: "THE ENVELOPE",
        images: ["/envelope.png"]
    };
    const imageSrc = displayItem.images[0];

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <div className="container" style={{ flex: 1, padding: '40px 20px', maxWidth: '800px' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '40px', textTransform: 'uppercase' }}>
                    BESTELLUNG ABSCHLIESSEN
                </h1>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '40px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
                    <img src={imageSrc} alt={displayItem.name} style={{ width: '80px', height: '80px', objectFit: 'contain', backgroundColor: '#f9f9f9', padding: '10px' }} />
                    <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{displayItem.name}</h3>
                        <p style={{ color: '#d01d1d', fontWeight: 'bold' }}>
                            ----------
                        </p>
                    </div>
                </div>

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
            </div>

            <footer style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid #eee', marginTop: 'auto' }}>
                <Link href="/impressum" style={{ color: '#999', textDecoration: 'underline', fontSize: '0.8rem', display: 'inline-block' }}>IMPRESSUM</Link>
            </footer>
        </main>
    );
}
