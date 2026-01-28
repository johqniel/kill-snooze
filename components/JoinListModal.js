'use client';

import { useState } from 'react';

export default function JoinListModal({ isOpen, onClose }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [error, setError] = useState('');

    const [loading, setLoading] = useState(false);

    const [success, setSuccess] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!email) {
            setError('Please enter your email.');
            setLoading(false);
            return;
        }
        if (!agreed) {
            setError('You must agree to subscribe to the newsletter.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/join-list', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, newsletter: agreed }),
            });

            if (response.ok) {
                setSuccess(true);
                // Reset form
                setName('');
                setEmail('');
                setAgreed(false);
            } else {
                const data = await response.json();
                setError(data.error || 'Something went wrong.');
            }
        } catch (err) {
            setError('Failed to submit. Please try again.');
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

                {success ? (
                    <div style={{ padding: '20px 0' }}>
                        <h2 style={{
                            fontSize: '2rem',
                            fontWeight: '900',
                            textTransform: 'uppercase',
                            marginBottom: '20px'
                        }}>
                            Thank You For Joining
                        </h2>
                        <p style={{
                            fontSize: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            marginBottom: '30px'
                        }}>
                            We will keep you posted.
                        </p>
                        <button
                            onClick={onClose}
                            className="btn-primary"
                            style={{
                                width: '100%',
                                borderRadius: 0,
                                padding: '15px',
                                textTransform: 'uppercase',
                                fontWeight: 'bold'
                            }}
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 style={{
                            fontSize: '1.8rem',
                            fontWeight: '800',
                            marginBottom: '20px',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            letterSpacing: '-1px'
                        }}>
                            Join The Waitlist
                        </h2>

                        {error && <p style={{ color: '#d01d1d', marginBottom: '15px', fontWeight: 'bold' }}>{error}</p>}

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
                            <div>
                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        border: '1px solid #000',
                                        fontSize: '1rem',
                                        borderRadius: 0
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Email *</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '10px',
                                        border: '1px solid #000',
                                        fontSize: '1rem',
                                        borderRadius: 0
                                    }}
                                    required
                                />
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '10px' }}>
                                <input
                                    type="checkbox"
                                    id="newsletter"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    style={{ marginTop: '5px', transform: 'scale(1.2)', cursor: 'pointer' }}
                                />
                                <label htmlFor="newsletter" style={{ fontSize: '0.9rem', cursor: 'pointer', lineHeight: '1.4' }}>
                                    I agree to subscribe to the newsletter and receive updates about product availability.
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="btn-primary"
                                style={{
                                    marginTop: '10px',
                                    width: '100%',
                                    borderRadius: 0,
                                    opacity: loading ? 0.7 : 1
                                }}
                                disabled={loading}
                            >
                                {loading ? 'JOINING...' : 'SUBMIT'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
