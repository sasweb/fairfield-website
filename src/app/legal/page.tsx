import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const Legal = () => (
  <div>
    <Header />
    <section className="py-16">
      <div className="container">
        <div>
          <h1 className="text-3xl font-semibold">Impressum</h1>

          <h2 className="mb-4 mt-8 text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
          <p>
            Fairfield & Archer Gmbh <br />
            Neuer Wall 48 <br />
            20354 Hamburg
          </p>
          <p>
            Handelsregister: HRB <br />
            Registergericht: Hamburg
          </p>

          <h2 className="mb-4 mt-8 text-xl font-semibold">Vertreten durch:</h2>
          <p>Dr. Frank Passing</p>

          <h2 className="mb-4 mt-8 text-xl font-semibold">Kontakt</h2>
          <p>
            Telefon: +49 000 000 000 <br />
            E-Mail: info@fairfield-archer.com
          </p>

          <h2 className="mb-4 mt-8 text-xl font-semibold">Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE000000000</p>

          <h2 className="mb-4 mt-8 text-xl font-semibold">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr/">https://ec.europa.eu/consumers/odr/</a>.
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-semibold">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Legal;
