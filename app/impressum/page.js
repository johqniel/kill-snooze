'use client';

import Header from '../../components/Header';
import Link from 'next/link';

export default function ImpressumPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />

            <div className="container" style={{ flex: 1, padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '40px', textTransform: 'uppercase' }}>
                    IMPRESSUM
                </h1>

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
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase' }}>Haftungsausschluss (Disclaimer)</h2>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Haftung für Inhalte</h3>
                    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Hinweis zum Satire-Charakter</h3>
                    <p style={{ lineHeight: '1.6', fontWeight: 'bold', marginBottom: '15px' }}>
                        Diese Webseite ist ein Satire-Projekt.
                    </p>
                    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                        Die Seite dient als künstlerischer Kommentar zur modernen Produktivitätskultur.
                    </p>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Haftung für Links</h3>
                    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                    </p>
                    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    </p>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Urheberrecht</h3>
                    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                    </p>
                    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase' }}>Datenschutzerklärung nach DSGVO</h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
                        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                    </p>
                    <p style={{ lineHeight: '1.6', fontWeight: 'bold', border: '2px solid black', padding: '20px' }}>
                        Hiermit erklären wir ausdrücklich, dass alle erhobenen personenbezogenen Daten (Name, Adresse, E-Mail-Adresse) ausschließlich ein einziges Mal verwendet werden, um Ihnen das angeforderte Informationsmaterial zuzusenden. Nach diesem Vorgang werden Ihre Daten umgehend und unwiderruflich gelöscht. Es erfolgt keine weitere Speicherung, Verarbeitung oder Weitergabe an Dritte.
                    </p>
                </section>

                <Link href="/" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '20px' }}>
                    ZURÜCK ZUR STARTSEITE
                </Link>
            </div>

            <footer style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid #eee', marginTop: 'auto' }}>
                <Link href="/impressum" style={{ color: '#999', textDecoration: 'underline', fontSize: '0.8rem', display: 'inline-block' }}>IMPRESSUM</Link>
            </footer>
        </main>
    );
}
