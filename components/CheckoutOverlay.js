import { useState } from 'react';

export default function CheckoutOverlay({ onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        zip: '',
        country: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const inputStyle = {
        display: 'block',
        width: '100%',
        padding: '15px',
        marginBottom: '15px',
        border: '2px solid #000',
        fontSize: '1rem',
        fontFamily: 'inherit',
        fontWeight: 'bold'
    };

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
    };

    return (
        <div style={overlayStyle}>
            <div style={{ maxWidth: '500px', width: '90%', position: 'relative' }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '-40px',
                        right: 0,
                        border: 'none',
                        background: 'none',
                        fontSize: '2rem',
                        cursor: 'pointer',
                        fontWeight: '900'
                    }}
                >
                    &times;
                </button>

                <h2 style={{ fontSize: '2rem', marginBottom: '30px', fontWeight: '800', textAlign: 'center', textTransform: 'uppercase' }}>
                    Secure Checkout
                </h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="FULL NAME"
                        required
                        style={inputStyle}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="STREET ADDRESS"
                        required
                        style={inputStyle}
                        onChange={handleChange}
                    />
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <input
                            type="text"
                            name="city"
                            placeholder="CITY"
                            required
                            style={inputStyle}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="zip"
                            placeholder="ZIP CODE"
                            required
                            style={inputStyle}
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        type="text"
                        name="country"
                        placeholder="COUNTRY"
                        required
                        style={inputStyle}
                        onChange={handleChange}
                    />

                    <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#eee', fontSize: '0.9rem', marginBottom: '20px' }}>
                        <strong>TOTAL: $0.00</strong> (PROMO: FIRST100)
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                        CONFIRM ORDER
                    </button>
                </form>
            </div>
        </div>
    );
}
