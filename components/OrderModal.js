'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SuccessScreen from './SuccessScreen'; // We might want a smaller inline success or just use the Component

export default function OrderModal({ isOpen, onClose }) {
    const [step, setStep] = useState(1); // 1: Form, 2: Success
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

    // Reset state when opened
    useEffect(() => {
        if (isOpen) {
            setStep(1);
            setFormData({
                name: '',
                email: '',
                address: '',
                city: '',
                zip: '',
                country: '',
                newsletter: false,
                digitalDelivery: false
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
        setLoading(true);

        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStep(2);
            } else {
                alert('Fehler bei der Bestellung. Bitte versuche es erneut.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Ein Fehler ist aufgetreten.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            backdropFilter: 'blur(5px)'
        }} onClick={onClose}>
            <div style={{
                backgroundColor: '#fff',
                padding: '40px',
                width: '100%',
                maxWidth: '600px',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                border: '1px solid #000'
            }} onClick={e => e.stopPropagation()}>

                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    ✕
                </button>

                {step === 2 ? (
                    <div style={{ textAlign: 'center', padding: '40px 0' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '20px', textTransform: 'uppercase' }}>
                            GESCHAFFT!
                        </h2>
                        <p style={{ marginBottom: '20px' }}>
                            Deine Bestellung war erfolgreich.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>
                            Du erhältst in Kürze eine Bestätigung per E-Mail.
                        </p>
                        <button onClick={onClose} className="btn-primary" style={{ marginTop: '30px' }}>
                            SCHLIESSEN
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '30px', textTransform: 'uppercase', textAlign: 'center' }}>
                            BESTELLUNG ABSCHLIESSEN
                        </h2>

                        <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>THE ENVELOPE</h3>
                            <p style={{ color: '#d01d1d', fontWeight: 'bold' }}>----------</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="VOLLSTÄNDIGER NAME" required value={formData.name} onChange={handleChange}
                                style={{ display: 'block', width: '100%', padding: '15px', marginBottom: '15px', border: '2px solid #000', borderRadius: 0 }} />

                            <input type="email" name="email" placeholder="E-MAIL ADRESSE" required value={formData.email} onChange={handleChange}
                                style={{ display: 'block', width: '100%', padding: '15px', marginBottom: '15px', border: '2px solid #000', borderRadius: 0 }} />

                            <input type="text" name="address" placeholder="STRASSE & HAUSNUMMER" required={!formData.digitalDelivery} disabled={formData.digitalDelivery} value={formData.address} onChange={handleChange}
                                style={{ display: 'block', width: '100%', padding: '15px', marginBottom: '15px', border: '2px solid #000', borderRadius: 0, opacity: formData.digitalDelivery ? 0.5 : 1 }} />

                            <div style={{ display: 'flex', gap: '15px' }}>
                                <input type="text" name="city" placeholder="STADT" required={!formData.digitalDelivery} disabled={formData.digitalDelivery} value={formData.city} onChange={handleChange}
                                    style={{ flex: 1, padding: '15px', marginBottom: '15px', border: '2px solid #000', borderRadius: 0, opacity: formData.digitalDelivery ? 0.5 : 1 }} />
                                <input type="text" name="zip" placeholder="PLZ" required={!formData.digitalDelivery} disabled={formData.digitalDelivery} value={formData.zip} onChange={handleChange}
                                    style={{ flex: 1, padding: '15px', marginBottom: '15px', border: '2px solid #000', borderRadius: 0, opacity: formData.digitalDelivery ? 0.5 : 1 }} />
                            </div>

                            <input type="text" name="country" placeholder="LAND" required={!formData.digitalDelivery} disabled={formData.digitalDelivery} value={formData.country} onChange={handleChange}
                                style={{ display: 'block', width: '100%', padding: '15px', marginBottom: '15px', border: '2px solid #000', borderRadius: 0, opacity: formData.digitalDelivery ? 0.5 : 1 }} />

                            {/* Options */}
                            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                    <input type="checkbox" id="newsletter" name="newsletter" checked={formData.newsletter} onChange={handleChange} style={{ marginTop: '5px', transform: 'scale(1.2)' }} />
                                    <label htmlFor="newsletter" style={{ fontSize: '0.9rem', cursor: 'pointer', lineHeight: '1.4' }}>Ich stimme dem Newsletter zu.</label>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                    <input type="checkbox" id="digitalDelivery" name="digitalDelivery" checked={formData.digitalDelivery} onChange={handleChange} style={{ marginTop: '5px', transform: 'scale(1.2)' }} />
                                    <label htmlFor="digitalDelivery" style={{ fontSize: '0.9rem', cursor: 'pointer', lineHeight: '1.4' }}>Produkt per E-Mail erhalten statt Post.</label>
                                </div>
                            </div>

                            <button type="submit" className="btn-primary" style={{ width: '100%', borderRadius: 0, opacity: loading ? 0.7 : 1 }} disabled={loading}>
                                {loading ? 'BEARBEITE...' : 'BESTELLUNG ABSCHICKEN'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
