'use client';

import Header from '../../components/Header';
import Link from 'next/link';

export default function ImpressumPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <div className="container" style={{ flex: 1, padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '40px', textTransform: 'uppercase', textAlign: 'center' }}>
                    IMPRESSUM & DATENSCHUTZ
                </h1>

                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '40px' }}>

                    {/* LEFT COLUMN: IMPRESSUM */}
                    <div style={{ flex: 1, minWidth: '300px', paddingRight: '40px', borderRight: '1px solid #000' }}>
                        <section style={{ marginBottom: '40px' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase' }}>Angaben gemäß § 5 TMG</h2>
                            <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
                                Daniel Nogues Kollert<br />
                                Höningerweg 47<br />
                                50969 Köln<br />
                                Deutschland
                            </p>

                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Kontakt</h3>
                            <p style={{ lineHeight: '1.6' }}>
                                Telefon: +49 1551 025 8050<br />
                                E-Mail: daniel.nogues.daniel@gmail.com
                            </p>

                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Redaktionell verantwortlich</h3>
                            <p style={{ lineHeight: '1.6' }}>
                                Daniel Nogues Kollert<br />
                                Höningerweg 47<br />
                                50969 Köln
                            </p>
                        </section>

                        <section style={{ marginBottom: '40px' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase' }}>Haftungsausschluss</h2>

                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Haftung für Inhalte</h3>
                            <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                            </p>

                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Haftung für Links</h3>
                            <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                            </p>

                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Urheberrecht</h3>
                            <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
                            </p>
                        </section>
                    </div>

                    {/* RIGHT COLUMN: PRIVACY */}
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <section style={{ marginBottom: '40px' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase' }}>Datenschutzerklärung (DSGVO)</h2>
                            <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
                                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                            </p>
                            <p style={{ lineHeight: '1.6', fontWeight: 'bold', border: '2px solid black', padding: '20px', marginBottom: '20px' }}>
                                Hiermit erklären wir ausdrücklich, dass alle erhobenen personenbezogenen Daten (Name, Adresse, E-Mail-Adresse) ausschließlich ein einziges Mal verwendet werden, um Ihnen das angeforderte Informationsmaterial zuzusenden. Nach diesem Vorgang werden Ihre Daten umgehend und unwiderruflich gelöscht. Es erfolgt keine weitere Speicherung, Verarbeitung oder Weitergabe an Dritte.
                            </p>

                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Rechtsgrundlage der Verarbeitung</h3>
                            <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                                Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> zur Durchführung vorvertraglicher Maßnahmen bzw. zur Erfüllung Ihrer Anfrage.
                            </p>

                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Rechte der Betroffenen</h3>
                            <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                                Sie haben jederzeit das Recht auf unentgeltliche <strong>Auskunft</strong> über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf <strong>Berichtigung</strong>, <strong>Löschung</strong> oder <strong>Einschränkung</strong> dieser Daten.
                            </p>

                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Beschwerderecht</h3>
                            <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu.
                            </p>

                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Hinweis zu Instagram Ads & Tracking</h3>
                            <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                                Unsere Website wird teilweise über Werbeanzeigen auf Plattformen wie Instagram (Meta Platforms Ireland Ltd.) beworben. Wenn Sie über eine solche Anzeige auf unsere Seite gelangen, können technische Daten (z.B. Referrer-Informationen) übertragen werden.
                            </p>
                        </section>
                    </div>

                </div>

                <Link href="/" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '40px' }}>
                    ZURÜCK ZUR STARTSEITE
                </Link>
            </div>

            <footer style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid #eee', marginTop: 'auto', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <Link href="/impressum" style={{ color: '#999', textDecoration: 'underline', fontSize: '0.8rem' }}>IMPRESSUM</Link>
                <Link href="/impressum" style={{ color: '#999', textDecoration: 'underline', fontSize: '0.8rem' }}>DATENSCHUTZERKLÄRUNG</Link>
            </footer>
        </main>
    );
}
