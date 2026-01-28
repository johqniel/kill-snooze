'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function OrderModal({ isOpen, onClose }) {
    const [step, setStep] = useState(1); // 1: Form, 2: Success
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        newsletter: false
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Reset state when opened
    useEffect(() => {
        if (isOpen) {
            setStep(1);
            setError('');
            setFormData({
                name: '',
                email: '',
                address: '',
                city: '',
                zip: '',
                country: '',
                newsletter: false
            });
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!formData.newsletter) {
            setError('Du musst der Datenverarbeitung zustimmen.');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, digitalDelivery: false }), // Always false now
            });

            if (response.ok) {
                setStep(2);
            } else {
                const data = await response.json();
                setError(data.error || 'Fehler bei der Bestellung. Bitte versuche es erneut.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setError('Ein Fehler ist aufgetreten.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000
        }} onClick={onClose}>
            <div style={{
                backgroundColor: '#fff',
                padding: '40px',
                maxWidth: '500px',
                width: '90%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                border: '2px solid #000',
                textAlign: 'center'
            }} onClick={e => e.stopPropagation()}>

                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '15px',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    X
                </button>

                {step === 2 ? (
                    <div style={{ padding: '20px 0' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '20px', textTransform: 'uppercase' }}>
                            GESCHAFFT!
                        </h2>
                        <p style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '30px' }}>
                            Deine Bestellung war erfolgreich.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '30px' }}>
                            Du erhältst in Kürze eine Bestätigung per E-Mail.
                        </p>
                        <button onClick={onClose} className="btn-primary" style={{ width: '100%', borderRadius: 0 }}>
                            SCHLIESSEN
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 style={{
                            fontSize: '1.8rem',
                            fontWeight: '800',
                            marginBottom: '10px',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            letterSpacing: '-1px'
                        }}>
                            Infomaterial anfordern
                        </h2>

                        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>THE ENVELOPE</h3>
                            <p style={{ color: '#d01d1d', fontWeight: 'bold' }}>----------</p>
                        </div>

                        {error && <p style={{ color: '#d01d1d', marginBottom: '15px', fontWeight: 'bold' }}>{error}</p>}

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
                            {/* Personal Info */}
                            <div>
                                <input type="text" name="name" placeholder="VOLLSTÄNDIGER NAME *" required value={formData.name} onChange={handleChange}
                                    style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '1rem', borderRadius: 0 }} />
                            </div>

                            <div>
                                <input type="email" name="email" placeholder="E-MAIL ADRESSE *" required value={formData.email} onChange={handleChange}
                                    style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '1rem', borderRadius: 0 }} />
                            </div>

                            {/* Address */}
                            <div>
                                <input type="text" name="address" placeholder="STRASSE & HAUSNUMMER *" required value={formData.address} onChange={handleChange}
                                    style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '1rem', borderRadius: 0 }} />
                            </div>

                            <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                                <input type="text" name="city" placeholder="STADT *" required value={formData.city} onChange={handleChange}
                                    style={{ flex: 1, padding: '10px', border: '1px solid #000', fontSize: '1rem', borderRadius: 0 }} />
                                <input type="text" name="zip" placeholder="PLZ *" required value={formData.zip} onChange={handleChange}
                                    style={{ flex: 1, padding: '10px', border: '1px solid #000', fontSize: '1rem', borderRadius: 0 }} />
                            </div>

                            <div>
                                <input type="text" name="country" placeholder="LAND *" required value={formData.country} onChange={handleChange}
                                    style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '1rem', borderRadius: 0 }} />
                            </div>

                            {/* Options */}
                            <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                    <input type="checkbox" id="newsletter" name="newsletter" checked={formData.newsletter} onChange={handleChange} style={{ marginTop: '5px', transform: 'scale(1.2)', cursor: 'pointer' }} />
                                    <label htmlFor="newsletter" style={{ fontSize: '0.9rem', cursor: 'pointer', lineHeight: '1.4' }}>
                                        Ich willige ein, dass meine Angaben (inkl. Adresse) zur einmaligen Kontaktaufnahme per Brief oder E-Mail verarbeitet werden. <Link href="/impressum" target="_blank" style={{ textDecoration: 'underline' }}>Datenschutzerklärung</Link>
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className="btn-primary" style={{ width: '100%', borderRadius: 0, marginTop: '10px', padding: '15px', opacity: loading ? 0.7 : 1 }} disabled={loading}>
                                {loading ? 'BEARBEITE...' : 'BESTELLUNG ABSCHICKEN'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
