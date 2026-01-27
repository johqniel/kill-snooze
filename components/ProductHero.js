export default function ProductHero({ onOrder }) {
    return (
        <section style={{ padding: '60px 0', textAlign: 'center' }}>
            <div className="container">
                <h1 style={{ fontSize: '4rem', marginBottom: '20px', fontWeight: '800', letterSpacing: '-2px' }}>
                    MINIMIZE YOUR SNOOZE.
                </h1>

                {/* Product Image */}
                <div style={{ margin: '0 auto 40px' }}>
                    <img
                        src="/product-new.jpeg"
                        alt="Kill Snooze Product"
                        style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }}
                    />
                </div>

                <p style={{ fontSize: '1.5rem', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                    The first 100 orders are completely free. <br />
                    <strong>0/100 Claimed.</strong>
                </p>

                <button className="btn-primary" onClick={onOrder}>
                    ORDER FREE
                </button>
            </div>
        </section>
    );
}
