import Link from "next/link";
import Header from "../../components/Header";

export default function ImpressumPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="container" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '40px', textTransform: 'uppercase' }}>Impressum</h1>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Angaben gemäß § 5 DDG</h2>
                    <p style={{ lineHeight: '1.6' }}>
                        Daniel Nogues<br />
                        Königsallee 27<br />
                        40212 Düsseldorf
                    </p>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Kontakt</h3>
                    <p style={{ lineHeight: '1.6' }}>
                        Telefon: +49 1551 025 8050<br />
                        E-Mail: daniel.nogues.daniel@gmail.com
                    </p>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Redaktionell verantwortlich</h3>
                    <p style={{ lineHeight: '1.6' }}>
                        Daniel Nogues<br />
                        Königsallee 27<br />
                        40212 Düsseldorf
                    </p>
                </section>

                <section style={{ marginBottom: '40px', borderTop: '1px solid #eee', paddingTop: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Rechtliche Hinweise & Disclaimer</h2>
                    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                        Diese Webseite ist ein Satire-Projekt.
                    </p>
                    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                        Die Seite dient als künstlerischer Kommentar zur modernen Produktivitätskultur.
                    </p>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Haftung für Links</h3>
                    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>Urheberrecht</h3>
                    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                </section>

                <section style={{ marginBottom: '40px', borderTop: '1px solid #eee', paddingTop: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Datenschutzerklärung (gem. Art. 13 DSGVO)</h2>

                    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                    </p>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>1. Datenerfassung und -löschung</h3>
                    <p style={{ lineHeight: '1.6', fontWeight: 'bold', border: '2px solid black', padding: '20px', backgroundColor: '#f9f9f9', marginBottom: '20px' }}>
                        Hiermit erklären wir ausdrücklich, dass alle erhobenen personenbezogenen Daten (Name, Adresse, E-Mail-Adresse) ausschließlich ein einziges Mal verwendet werden, um Ihnen das angeforderte Informationsmaterial zuzusenden. Nach diesem Vorgang werden Ihre Daten umgehend und unwiderruflich gelöscht. Es erfolgt keine weitere Speicherung, Verarbeitung oder Weitergabe an Dritte.
                    </p>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>2. Rechtsgrundlage der Verarbeitung</h3>
                    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                        Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> zur Durchführung vorvertraglicher Maßnahmen bzw. zur Erfüllung Ihrer Anfrage (Zusendung des angeforderten Materials).
                    </p>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>3. Rechte der Betroffenen</h3>
                    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                        Sie haben jederzeit das Recht auf unentgeltliche <strong>Auskunft</strong> über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf <strong>Berichtigung</strong>, <strong>Sperrung</strong> oder <strong>Löschung</strong> dieser Daten. Des Weiteren haben Sie das Recht auf Datenübertragbarkeit und Widerspruch gegen die Verarbeitung. Da wir Daten unmittelbar nach Zweckerfüllung löschen, laufen diese Rechte in der Praxis oft ins Leere, bestehen aber formaljuristisch uneingeschränkt.
                    </p>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>4. Beschwerderecht</h3>
                    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
                    </p>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>5. Hinweis zu Instagram Ads & Tracking</h3>
                    <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
                        Unsere Website wird teilweise über Werbeanzeigen auf Plattformen wie Instagram (Meta Platforms Ireland Ltd.) beworben. Wenn Sie über eine solche Anzeige auf unsere Seite gelangen, können technische Daten (z.B. Referrer-Informationen) übertragen werden. Wir nutzen diese Daten nicht zur Erstellung von Nutzerprofilen. Beachten Sie jedoch, dass die jeweiligen Plattformbetreiber (z.B. Meta) eigene Tracking-Technologien einsetzen können, auf die wir keinen Einfluss haben.
                    </p>
                </section>

                <footer style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #ccc', textAlign: 'center' }}>
                    <Link href="/" style={{ textDecoration: 'underline' }}>Zurück zur Startseite</Link>
                </footer>
            </div>
        </main>
    );
}
