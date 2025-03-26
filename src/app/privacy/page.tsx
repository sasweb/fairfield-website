import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const Legal = () => (
  <div>
    <Header />
    <section className="py-16">
      <div className="container">
        <div>
          <h1 className="mb-3 mt-6 text-3xl font-semibold">Datenschutzerklärung</h1>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Präambel</h2>
          <p>
            Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten
            Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu
            welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für
            alle von uns durchgeführten Verarbeitungen personenbezogener Daten auf unsere Webseite
            sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile
            (nachfolgend zusammenfassend bezeichnet als "Onlineangebot").
          </p>
          <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
          <p>
            <strong>Stand:</strong> 26. März 2025
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Inhaltsübersicht</h2>
          <ul className="ml-6 list-disc">
            <li>Präambel</li>
            <li>Verantwortlicher</li>
            <li>Kontakt Datenschutzbeauftragter</li>
            <li>Übersicht der Verarbeitungen</li>
            <li>Maßgebliche Rechtsgrundlagen</li>
            <li>Sicherheitsmaßnahmen</li>
            <li>Übermittlung von personenbezogenen Daten</li>
            <li>Internationale Datentransfers</li>
            <li>Allgemeine Informationen zur Datenspeicherung und Löschung</li>
            <li>Rechte der betroffenen Personen</li>
            <li>Bereitstellung des Onlineangebotes und Webhosting</li>
            <li>Kontakt- und Anfrageverwaltung</li>
            <li>Newsletter und elektronische Benachrichtigungen</li>
            <li>Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon</li>
            <li>Bewerbungsverfahren</li>
            <li>Änderung und Aktualisierung</li>
            <li>Begriffsdefinitionen</li>
          </ul>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Verantwortlicher</h2>
          <p>
            <strong>Fairfield & Archer GmbH</strong>
            <br />
            Neuer Wall 48
            <br />
            20354 Hamburg
          </p>
          <p>
            <strong>Vertretungsberechtigte Personen:</strong> Prof. Dr. Frank Passing
          </p>
          <p>
            <strong>E-Mail-Adresse:</strong>{' '}
            <a href="mailto:datenschutz@fairfield-archer.com" className="text-blue-600">
              datenschutz@fairfield-archer.com
            </a>
          </p>
          <p>
            <strong>Telefon:</strong> +49 40 66858206
          </p>
          <p>
            <strong>Impressum:</strong>{' '}
            <a href="https://fairfield-archer.com/legal" className="text-blue-600">
              https://fairfield-archer.com/legal
            </a>
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Kontakt Datenschutzbeauftragter</h2>
          <p>
            <a href="mailto:datenschutz@fairfield-archer.com" className="text-blue-600">
              datenschutz@fairfield-archer.com
            </a>
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Übersicht der Verarbeitungen</h2>
          <h3 className="mb-3 mt-6 text-xl font-semibold">Arten der verarbeiteten Daten</h3>
          <ul className="ml-6 list-disc">
            <li>Bestandsdaten</li>
            <li>Kontaktdaten</li>
            <li>Inhaltsdaten</li>
            <li>Nutzungsdaten</li>
            <li>Meta-, Kommunikations- und Verfahrensdaten</li>
            <li>Bewerberdaten</li>
            <li>Protokolldaten</li>
          </ul>

          <h3 className="mb-3 mt-6 text-xl font-semibold">Kategorien betroffener Personen</h3>
          <ul className="ml-6 list-disc">
            <li>Kommunikationspartner</li>
            <li>Nutzer</li>
            <li>Bewerber</li>
            <li>Geschäfts- und Vertragspartner</li>
          </ul>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Maßgebliche Rechtsgrundlagen</h2>
          <p>
            Maßgebliche Rechtsgrundlagen nach der DSGVO: Im Folgenden erhalten Sie eine Übersicht
            der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten.
            Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale
            Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten
            ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen
            diese in der Datenschutzerklärung mit.
          </p>
          <ul className="list-inside list-disc space-y-4">
            <li>
              <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> – Die betroffene
              Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden
              personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke
              gegeben.
            </li>
            <li>
              <strong>
                Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)
              </strong>{' '}
              – Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die
              betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich,
              die auf Anfrage der betroffenen Person erfolgen.
            </li>
            <li>
              <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> – Die
              Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder
              eines Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und
              Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten
              verlangen, nicht überwiegen.
            </li>
            <li>
              <strong>
                Bewerbungsverfahren als vorvertragliches bzw. vertragliches Verhältnis (Art. 6 Abs.
                1 S. 1 lit. b) DSGVO)
              </strong>{' '}
              – Soweit im Rahmen des Bewerbungsverfahrens besondere Kategorien von personenbezogenen
              Daten im Sinne des Art. 9 Abs. 1 DSGVO (z. B. Gesundheitsdaten, wie
              Schwerbehinderteneigenschaft oder ethnische Herkunft) bei Bewerbern angefragt werden,
              erfolgt deren Verarbeitung nach Art. 9 Abs. 2 lit. b. DSGVO oder für Zwecke der
              Gesundheitsvorsorge oder der Arbeitsmedizin nach Art. 9 Abs. 2 lit. h. DSGVO. Im Fall
              einer auf freiwilliger Einwilligung beruhenden Mitteilung von besonderen Kategorien
              von Daten erfolgt deren Verarbeitung auf Grundlage von Art. 9 Abs. 2 lit. a. DSGVO.
            </li>
          </ul>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">
            Nationale Datenschutzregelungen in Deutschland
          </h2>
          <p>
            Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum
            Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor
            Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz –
            BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht
            auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien
            personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie
            automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner
            können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Sicherheitsmaßnahmen</h2>
          <p>
            Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der
            Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der
            Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und
            des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete
            technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau
            zu gewährleisten.
          </p>
          <ul className="list-inside list-disc space-y-4">
            <li>
              Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle
              des physischen und elektronischen Zugangs zu den Daten sowie des sie betreffenden
              Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer
              Trennung.
            </li>
            <li>
              Einrichtung von Verfahren, die eine Wahrnehmung von Betroffenenrechten, die Löschung
              von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten.
            </li>
            <li>
              Berücksichtigung des Schutzes personenbezogener Daten bereits bei der Entwicklung bzw.
              Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des
              Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche
              Voreinstellungen.
            </li>
          </ul>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">
            Sicherung von Online-Verbindungen durch TLS-/SSL-Verschlüsselungstechnologie (HTTPS)
          </h2>
          <p>
            Um die Daten der Nutzer, die über unsere Online-Dienste übertragen werden, vor
            unerlaubten Zugriffen zu schützen, setzen wir auf die
            TLS-/SSL-Verschlüsselungstechnologie. Secure Sockets Layer (SSL) und Transport Layer
            Security (TLS) sind die Eckpfeiler der sicheren Datenübertragung im Internet. Diese
            Technologien verschlüsseln die Informationen, die zwischen der Website oder App und dem
            Browser des Nutzers (oder zwischen zwei Servern) übertragen werden, wodurch die Daten
            vor unbefugtem Zugriff geschützt sind.
          </p>
          <p>
            TLS, als die weiterentwickelte und sicherere Version von SSL, gewährleistet, dass alle
            Datenübertragungen den höchsten Sicherheitsstandards entsprechen. Wenn eine Website
            durch ein SSL-/TLS-Zertifikat gesichert ist, wird dies durch die Anzeige von HTTPS in
            der URL signalisiert. Dies dient als ein Indikator für die Nutzer, dass ihre Daten
            sicher und verschlüsselt übertragen werden.
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">
            Übermittlung von personenbezogenen Daten
          </h2>
          <p>
            Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass diese an
            andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder
            Personen übermittelt beziehungsweise ihnen gegenüber offengelegt werden. Zu den
            Empfängern dieser Daten können z. B. mit IT-Aufgaben beauftragte Dienstleister gehören
            oder Anbieter von Diensten und Inhalten, die in eine Website eingebunden sind. In
            solchen Fällen beachten wir die gesetzlichen Vorgaben und schließen insbesondere
            entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den
            Empfängern Ihrer Daten ab.
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">
            Datenübermittlung innerhalb der Organisation
          </h2>
          <p>
            Wir können personenbezogene Daten an andere Abteilungen oder Einheiten innerhalb unserer
            Organisation übermitteln oder ihnen den Zugriff darauf gewähren. Sofern die
            Datenweitergabe zu administrativen Zwecken erfolgt, beruht sie auf unseren berechtigten
            unternehmerischen und betriebswirtschaftlichen Interessen oder erfolgt, sofern sie zur
            Erfüllung unserer vertragsbezogenen Verpflichtungen erforderlich ist beziehungsweise,
            wenn eine Einwilligung der Betroffenen oder eine gesetzliche Erlaubnis vorliegt.
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Internationale Datentransfers</h2>
          <p>
            Sofern wir Daten in einem Drittland (d. h., außerhalb der Europäischen Union (EU), des
            Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die Verarbeitung im Rahmen der
            Inanspruchnahme von Diensten Dritter oder der Offenlegung bzw. Übermittlung von Daten an
            andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang mit
            den gesetzlichen Vorgaben...
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">
            Allgemeine Informationen zur Datenspeicherung und Löschung
          </h2>
          <p>
            Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen
            Bestimmungen, sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine
            weiteren rechtlichen Grundlagen für die Verarbeitung bestehen. Dies betrifft Fälle, in
            denen der ursprüngliche Verarbeitungszweck entfällt oder die Daten nicht mehr benötigt
            werden...
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">
            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten
          </h2>
          <p>
            Die folgenden allgemeinen Fristen gelten für die Aufbewahrung und Archivierung nach
            deutschem Recht:
          </p>
          <ul className="list-inside list-disc space-y-4">
            <li>
              <strong>10 Jahre</strong> – Aufbewahrungsfrist für Bücher und Aufzeichnungen,
              Jahresabschlüsse, Inventare, Lageberichte, Eröffnungsbilanz sowie die zu ihrem
              Verständnis erforderlichen Arbeitsanweisungen und sonstigen Organisationsunterlagen (§
              147 Abs. 1 Nr. 1 i.V.m. Abs. 3 AO, § 14b Abs. 1 UStG, § 257 Abs. 1 Nr. 1 i.V.m. Abs. 4
              HGB).
            </li>
            <li>
              <strong>8 Jahre</strong> – Buchungsbelege, wie z. B. Rechnungen und Kostenbelege (§
              147 Abs. 1 Nr. 4 und 4a i.V.m. Abs. 3 Satz 1 AO sowie § 257 Abs. 1 Nr. 4 i.V.m. Abs. 4
              HGB).
            </li>
            <li>
              <strong>6 Jahre</strong> – Übrige Geschäftsunterlagen: empfangene Handels- oder
              Geschäftsbriefe, Wiedergaben der abgesandten Handels- oder Geschäftsbriefe, sonstige
              Unterlagen, soweit sie für die Besteuerung von Bedeutung sind (§ 147 Abs. 1 Nr. 2, 3,
              5 i.V.m. Abs. 3 AO, § 257 Abs. 1 Nr. 2 u. 3 i.V.m. Abs. 4 HGB).
            </li>
            <li>
              <strong>3 Jahre</strong> – Daten, die erforderlich sind, um potenzielle
              Gewährleistungs- und Schadensersatzansprüche oder ähnliche vertragliche Ansprüche und
              Rechte zu berücksichtigen (§§ 195, 199 BGB).
            </li>
          </ul>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Rechte der betroffenen Personen</h2>
          <p>
            Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere
            aus Art. 15 bis 21 DSGVO ergeben:
          </p>
          <ul className="list-inside list-disc space-y-4">
            <li>
              <strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus
              Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie
              betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f
              DSGVO erfolgt, Widerspruch einzulegen...
            </li>
            <li>
              <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte
              Einwilligungen jederzeit zu widerrufen.
            </li>
            <li>
              <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu
              verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten
              sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen
              Vorgaben.
            </li>
            <li>
              <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen
              Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die
              Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
            </li>
            <li>
              <strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach
              Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten
              unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben
              eine Einschränkung der Verarbeitung der Daten zu verlangen.
            </li>
            <li>
              <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende
              Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in
              einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten...
            </li>
            <li>
              <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben ferner das Recht, bei
              einer Datenschutzaufsichtsbehörde eine Beschwerde einzulegen, wenn Sie der Ansicht
              sind, dass die Verarbeitung der Ihre Person betreffenden personenbezogenen Daten gegen
              die DSGVO verstößt.
            </li>
          </ul>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">
            Bereitstellung des Onlineangebotes und Webhosting
          </h2>
          <p>
            Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung
            stellen zu können...
          </p>
          <ul className="list-inside list-disc space-y-4">
            <li>
              <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. Seitenaufrufe und
              Verweildauer, Klickpfade, Nutzungsintensität und -frequenz...), Meta-, Kommunikations-
              und Verfahrensdaten (z. B. IP-Adressen...)
            </li>
            <li>
              <strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von
              Onlinediensten).
            </li>
            <li>
              <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und
              Nutzerfreundlichkeit...
            </li>
            <li>
              <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
              "Allgemeine Informationen zur Datenspeicherung und Löschung".
            </li>
            <li>
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
              DSGVO).
            </li>
          </ul>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">
            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten
          </h2>
          <ul className="list-inside list-disc space-y-4">
            <li>
              <strong>Bereitstellung Onlineangebot auf gemietetem Speicherplatz:</strong> Für die
              Bereitstellung unseres Onlineangebotes nutzen wir Speicherplatz, Rechenkapazität und
              Software...
            </li>
            <li>
              <strong>Erhebung von Zugriffsdaten und Logfiles:</strong> Der Zugriff auf unser
              Onlineangebot wird in Form von sogenannten &quot;Server-Logfiles&quot;
              protokolliert...
            </li>
            <li>
              <strong>NETLIFY:</strong> Leistungen auf dem Gebiet der Bereitstellung von
              informationstechnischer Infrastruktur und verbundenen Dienstleistungen (z. B. Hosting
              und Content Delivery); Dienstanbieter: Netlify, Inc., 2325 3rd Street, Suite 215, San
              Francisco, California 94107, USA; Rechtsgrundlagen: Berechtigte Interessen (Art. 6
              Abs. 1 S. 1 lit. f) DSGVO); Website: https://www.netlify.com; Datenschutzerklärung:
              https://www.netlify.com/privacy/. Auftragsverarbeitungsvertrag: Wird vom
              Dienstanbieter bereitgestellt. Bitte beachten Sie, dass Netlify ein US-amerikanisches
              Unternehmen ist. Daher können personenbezogene Daten in die USA übertragen werden, ein
              Land, für das der Europäische Gerichtshof festgestellt hat, dass es kein angemessenes
              Datenschutzniveau bietet. Es besteht das Risiko, dass Ihre Daten von US-Behörden zu
              Kontroll- und Überwachungszwecken verarbeitet werden, ohne dass Ihnen möglicherweise
              Rechtsbehelfe zustehen. Bitte prüfen Sie, ob Netlify geeignete Garantien gemäß Art. 46
              DSGVO bietet, um ein angemessenes Datenschutzniveau sicherzustellen.
            </li>
          </ul>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Kontakt- und Anfrageverwaltung</h2>
          <p>
            Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder
            via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden
            die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der
            Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
          </p>
          <ul className="list-inside list-disc space-y-4">
            <li>
              <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. vollständiger Name,
              Wohnadresse, Kontaktinformationen, Kundennummer etc.); Kontaktdaten (z. B. Post- und
              E-Mail-Adressen oder Telefonnummern); Inhaltsdaten (z. B. textliche oder bildliche
              Nachrichten und Beiträge); Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer,
              Klickpfade...); Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen,
              Zeitangaben, Identifikationsnummern).
            </li>
            <li>
              <strong>Betroffene Personen:</strong> Kommunikationspartner; Nutzer (z. B.
              Webseitenbesucher, Nutzer von Onlinediensten); Geschäfts- und Vertragspartner.
            </li>
            <li>
              <strong>Zwecke der Verarbeitung:</strong> Kommunikation; Organisations- und
              Verwaltungsverfahren; Feedback (z. B. Sammeln von Feedback via Online-Formular);
              Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
            </li>
            <li>
              <strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt
              "Allgemeine Informationen zur Datenspeicherung und Löschung".
            </li>
            <li>
              <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
              DSGVO); Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b)
              DSGVO).
            </li>
          </ul>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">
            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten
          </h2>
          <ul className="list-inside list-disc space-y-4">
            <li>
              <strong>Kontaktformular:</strong> Bei Kontaktaufnahme über unser Kontaktformular, per
              E-Mail oder anderen Kommunikationswegen, verarbeiten wir die uns übermittelten
              personenbezogenen Daten zur Beantwortung und Bearbeitung des jeweiligen Anliegens...
            </li>
            <li>
              <strong>Telefondienstleistung:</strong> Bereitstellung von Kommunikationsdiensten,
              Vermittlung von Anrufen, Aufzeichnung und Speicherung von Anrufdaten, Analyse des
              Telefonierverhaltens zu administrativen Zwecken; <strong>Dienstanbieter:</strong>{' '}
              BroadSoft Germany GmbH, Lothringer Str. 56, 50677 Köln, Deutschland.
            </li>
            <li>
              <strong>Microsoft Clouddienste:</strong> Cloudspeicher, Cloudinfrastrukturdienste und
              cloudbasierte Anwendungssoftware; <strong>Dienstanbieter:</strong> Microsoft Irland
              Operations Limited, One Microsoft Place, South County Business Park, Leopardstown,
              Dublin 18, D18 P521, Irland;{' '}
              <a href="https://microsoft.com/de-de" className="text-blue-600 underline">
                Website
              </a>
              ;{' '}
              <a
                href="https://privacy.microsoft.com/de-de/privacystatement"
                className="text-blue-600 underline"
              >
                Datenschutzerklärung
              </a>
              ;{' '}
              <a
                href="https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA"
                className="text-blue-600 underline"
              >
                Auftragsverarbeitungsvertrag
              </a>
              ; Grundlage Drittlandtransfers: Data Privacy Framework (DPF).
            </li>
            <li>
              <strong>Outlook:</strong> E-Mail-Versand und -Empfang, Speicherung von Kontakten im
              Adressbuch, Filterregeln zur Sortierung eingehender E-Mails, Spam- und Virenschutz,
              Cloud-Speicher für Anhänge und andere Inhalte; <strong>Dienstanbieter:</strong>{' '}
              Microsoft Irland Operations Limited, One Microsoft Place, South County Business Park,
              Leopardstown, Dublin 18, D18 P521, Irland;{' '}
              <a
                href="https://www.microsoft.com/de-de/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook"
                className="text-blue-600 underline"
              >
                Website
              </a>
              ;{' '}
              <a
                href="https://privacy.microsoft.com/de-de/privacystatement"
                className="text-blue-600 underline"
              >
                Datenschutzerklärung
              </a>
              .
            </li>
          </ul>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">
            Newsletter und elektronische Benachrichtigungen
          </h2>
          <p>
            Wir versenden Newsletter, E-Mails und weitere elektronische Benachrichtigungen
            (nachfolgend „Newsletter") ausschließlich mit der Einwilligung der Empfänger oder
            aufgrund einer gesetzlichen Grundlage. Sofern im Rahmen einer Anmeldung zum Newsletter
            dessen Inhalte genannt werden, sind diese Inhalte für die Einwilligung der Nutzer
            maßgeblich.
          </p>
          <p>
            Für die Anmeldung zu unserem Newsletter ist normalerweise die Angabe Ihrer
            E-Mail-Adresse ausreichend. Um Ihnen jedoch einen personalisierten Service bieten zu
            können, bitten wir gegebenenfalls um die Angabe Ihres Namens für eine persönliche
            Ansprache im Newsletter oder um weitere Informationen, falls diese für den Zweck des
            Newsletters notwendig sind.
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">
            Löschung und Einschränkung der Verarbeitung
          </h2>
          <p>
            Wir können die ausgetragenen E-Mail-Adressen bis zu drei Jahren auf Grundlage unserer
            berechtigten Interessen speichern, bevor wir sie löschen, um eine ehemals gegebene
            Einwilligung nachweisen zu können. Die Verarbeitung dieser Daten wird auf den Zweck
            einer potenziellen Abwehr von Ansprüchen beschränkt. Ein individueller Löschungsantrag
            ist jederzeit möglich, sofern zugleich das ehemalige Bestehen einer Einwilligung
            bestätigt wird.
          </p>
          <p>
            Im Fall von Pflichten zur dauerhaften Beachtung von Widersprüchen behalten wir uns die
            Speicherung der E-Mail-Adresse alleine zu diesem Zweck in einer Sperrliste (sogenannte
            „Blocklist") vor.
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Inhalte</h2>
          <p>Informationen zu uns, unseren Leistungen, Aktionen und Angeboten.</p>

          <ul className="list-inside list-disc space-y-4">
            <li>
              <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. vollständiger Name,
              Wohnadresse, Kontaktinformationen, Kundennummer, etc.); Kontaktdaten (z. B. Post- und
              E-Mail-Adressen oder Telefonnummern); Meta-, Kommunikations- und Verfahrensdaten (z.
              B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen);
              Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität
              und -frequenz, verwendete Gerätetypen und Betriebssysteme).
            </li>
            <li>
              <strong>Betroffene Personen:</strong> Kommunikationspartner; Nutzer (z. B.
              Webseitenbesucher, Nutzer von Onlinediensten).
            </li>
            <li>
              <strong>Zwecke der Verarbeitung:</strong> Direktmarketing (z. B. per E-Mail oder
              postalisch); Erbringung vertraglicher Leistungen und Erfüllung vertraglicher
              Pflichten; Reichweitenmessung (z. B. Zugriffsstatistiken, Erkennung wiederkehrender
              Besucher); Konversionsmessung (Messung der Effektivität von Marketingmaßnahmen);
              Erstellung von Nutzerprofilen.
            </li>
            <li>
              <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO);
              Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
            </li>
            <li>
              <strong>Widerspruchsmöglichkeit (Opt-Out):</strong> Sie können den Empfang unseres
              Newsletters jederzeit kündigen, d.h. Ihre Einwilligung widerrufen. Einen Link zur
              Kündigung des Newsletters finden Sie am Ende eines jeden Newsletters oder Sie nutzen
              eine der oben angegebenen Kontaktmöglichkeiten (vorzugsweise per E-Mail).
            </li>
          </ul>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">
            Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten
          </h2>
          <ul className="list-inside list-disc space-y-4">
            <li>
              <strong>Messung von Öffnungs- und Klickraten:</strong> Die Newsletter enthalten einen
              sogenannten „Web Beacon" (eine pixelgroße Datei), die beim Öffnen des Newsletters
              abgerufen wird. Dabei werden technische Informationen wie Browserdaten,
              Betriebssystem, IP-Adresse und Zeitpunkt des Abrufs erfasst. Diese Informationen
              dienen der technischen Verbesserung unseres Newsletters sowie der Anpassung unserer
              Inhalte an die Interessen der Empfänger. Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1
              S. 1 lit. a) DSGVO).
            </li>
            <li>
              <strong>Voraussetzung der Inanspruchnahme kostenloser Leistungen:</strong> Die
              Einwilligung in den Versand von Newslettern kann als Voraussetzung zur Inanspruchnahme
              kostenloser Leistungen (z. B. Zugang zu bestimmten Inhalten oder Teilnahme an
              Aktionen) abhängig gemacht werden. Falls Sie die kostenlose Leistung ohne
              Newsletteranmeldung nutzen möchten, kontaktieren Sie uns bitte direkt.
            </li>
            <li>
              <strong>Sendinblue:</strong> E-Mail-Versand- und Automatisierungsdienste;
              Dienstanbieter: Sendinblue GmbH, Köpenicker Str. 126, 10179 Berlin, Deutschland;
              <a href="https://sendinblue.com/" className="text-blue-600 underline">
                Website
              </a>
              ;
              <a
                href="https://de.sendinblue.com/legal/privacypolicy/"
                className="text-blue-600 underline"
              >
                Datenschutzerklärung
              </a>
              ;
              <a
                href="https://www.brevo.com/de/datenschutz-uebersicht/"
                className="text-blue-600 underline"
              >
                Auftragsverarbeitungsvertrag
              </a>
              .
            </li>
          </ul>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">
            Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon
          </h2>
          <p>
            Wir verarbeiten personenbezogene Daten zu Zwecken der werblichen Kommunikation, die über
            diverse Kanäle, wie z. B. E-Mail, Telefon, Post oder Fax, entsprechend den gesetzlichen
            Vorgaben erfolgen kann.
          </p>
          <p>
            Die Empfänger haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen oder der
            werblichen Kommunikation jederzeit zu widersprechen.
          </p>
          <p>
            Nach Widerruf oder Widerspruch speichern wir die zum Nachweis der bisherigen
            Berechtigung erforderlichen Daten zur Kontaktaufnahme oder Zusendung bis zu drei Jahre
            nach Ablauf des Jahres des Widerrufs oder Widerspruchs auf der Grundlage unserer
            berechtigten Interessen. Die Verarbeitung dieser Daten ist auf den Zweck einer möglichen
            Abwehr von Ansprüchen beschränkt. Auf der Grundlage des berechtigten Interesses, den
            Widerruf bzw. Widerspruch der Nutzer dauerhaft zu beachten, speichern wir ferner die zur
            Vermeidung einer erneuten Kontaktaufnahme erforderlichen Daten (z. B. je nach
            Kommunikationskanal die E-Mail-Adresse, Telefonnummer, Name).
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Verarbeitete Datenarten</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              Bestandsdaten (z. B. der vollständige Name, Wohnadresse, Kontaktinformationen,
              Kundennummer, etc.)
            </li>
            <li>Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern)</li>
            <li>
              Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie
              betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der
              Erstellung)
            </li>
          </ul>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Betroffene Personen</h2>
          <p>Kommunikationspartner.</p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Zwecke der Verarbeitung</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>Direktmarketing (z. B. per E-Mail oder postalisch)</li>
            <li>Marketing</li>
            <li>Absatzförderung</li>
          </ul>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Aufbewahrung und Löschung</h2>
          <p>
            Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen zur
            Datenspeicherung und Löschung".
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Rechtsgrundlagen</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</li>
            <li>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold">Bewerbungsverfahren</h2>
          <p>
            Das Bewerbungsverfahren setzt voraus, dass Bewerber uns die für deren Beurteilung und
            Auswahl erforderlichen Daten mitteilen. Welche Informationen erforderlich sind, ergibt
            sich aus der Stellenbeschreibung oder im Fall von Onlineformularen aus den dortigen
            Angaben.
          </p>
          <p>
            Grundsätzlich gehören zu den erforderlichen Angaben, die Informationen zur Person, wie
            der Name, die Adresse, eine Kontaktmöglichkeit sowie die Nachweise über die für eine
            Stelle notwendigen Qualifikationen. Auf Anfragen teilen wir zusätzlich gerne mit, welche
            Angaben benötigt werden.
          </p>

          <h2 className="text-xl font-semibold">Verarbeitung besonderer Kategorien von Daten</h2>
          <p>
            Soweit im Rahmen des Bewerbungsverfahrens besondere Kategorien von personenbezogenen
            Daten (Art. 9 Abs. 1 DSGVO) bei Bewerbern angefragt oder von diesen mitgeteilt werden,
            erfolgt deren Verarbeitung damit der Verantwortliche oder die betroffene Person die ihm
            bzw. ihr aus dem Arbeitsrecht und dem Recht der sozialen Sicherheit und des
            Sozialschutzes erwachsenden Rechte ausüben und seinen bzw. ihren diesbezüglichen
            Pflichten nachkommen kann.
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Löschung von Daten</h2>
          <p>
            Die von den Bewerbern zur Verfügung gestellten Daten können im Fall einer erfolgreichen
            Bewerbung für die Zwecke des Beschäftigungsverhältnisses von uns weiterverarbeitet
            werden. Andernfalls, sofern die Bewerbung auf ein Stellenangebot nicht erfolgreich ist,
            werden die Daten der Bewerber gelöscht.
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Aufnahme in einen Bewerberpool</h2>
          <p>
            Die Aufnahme in einen Bewerber-Pool, sofern angeboten, erfolgt auf Grundlage einer
            Einwilligung. Die Bewerber werden darüber belehrt, dass ihre Zustimmung zur Aufnahme in
            den Talentpool freiwillig ist.
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Verarbeitete Datenarten</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              Bestandsdaten (z. B. der vollständige Name, Wohnadresse, Kontaktinformationen,
              Kundennummer, etc.)
            </li>
            <li>Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern)</li>
            <li>Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge)</li>
            <li>Bewerberdaten (z. B. Anschreiben, Lebenslauf, Zeugnisse)</li>
          </ul>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Betroffene Personen</h2>
          <p>Bewerber.</p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Zwecke der Verarbeitung</h2>
          <p>
            Bewerbungsverfahren (Begründung und etwaige spätere Durchführung sowie mögliche spätere
            Beendigung des Beschäftigungsverhältnisses).
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Aufbewahrung und Löschung</h2>
          <p>
            Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen zur
            Datenspeicherung und Löschung".
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Rechtsgrundlagen</h2>
          <p>
            Bewerbungsverfahren als vorvertragliches bzw. vertragliches Verhältnis (Art. 6 Abs. 1 S.
            1 lit. b) DSGVO).
          </p>

          <h2 className="mb-3 mt-6 text-2xl font-semibold">Änderung und Aktualisierung</h2>
          <p className="mb-4">
            Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu
            informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns
            durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald
            durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine
            sonstige individuelle Benachrichtigung erforderlich wird.
          </p>
          <p className="mb-4">
            Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von
            Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich
            über die Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
          </p>

          <h2 className="mb-3 mt-6 text-xl font-semibold">Für uns zuständige Aufsichtsbehörde:</h2>
          <p className="mb-1">Hamburgische Beauftragte für Datenschutz und Informationsfreiheit</p>
          <p className="mb-1">Ludwig-Erhard-Str. 22</p>
          <p className="mb-1">20459 Hamburg</p>
          <p className="mb-1">Telefon: +49 40 / 428 54 - 4040</p>
          <p className="mb-4">E-Mail: mailbox@datenschutz-hamburg.de</p>

          <h2 className="mb-3 mt-6 text-xl font-semibold">Begriffsdefinitionen</h2>

          <h3 className=" text-lg font-medium">Bestandsdaten</h3>
          <p className="mb-4">
            Bestandsdaten umfassen wesentliche Informationen, die für die Identifikation und
            Verwaltung von Vertragspartnern, Benutzerkonten, Profilen und ähnlichen Zuordnungen
            notwendig sind.
          </p>

          <h3 className=" text-lg font-medium">Inhaltsdaten</h3>
          <p className="mb-4">
            Inhaltsdaten umfassen Informationen, die im Zuge der Erstellung, Bearbeitung und
            Veröffentlichung von Inhalten aller Art generiert werden.
          </p>

          <h3 className=" text-lg font-medium">Kontaktdaten</h3>
          <p className="mb-4">
            Kontaktdaten sind essenzielle Informationen, die die Kommunikation mit Personen oder
            Organisationen ermöglichen.
          </p>

          <h3 className=" text-lg font-medium">Konversionsmessung</h3>
          <p className="mb-4">
            Die Konversionsmessung (auch als "Besuchsaktionsauswertung" bezeichnet) ist ein
            Verfahren, mit dem die Wirksamkeit von Marketingmaßnahmen festgestellt werden kann.
          </p>

          <h3 className=" text-lg font-medium">Meta-, Kommunikations- und Verfahrensdaten</h3>
          <p className="mb-4">
            Meta-, Kommunikations- und Verfahrensdaten sind Kategorien, die Informationen über die
            Art und Weise enthalten, wie Daten verarbeitet, übermittelt und verwaltet werden.
          </p>

          <h3 className=" text-lg font-medium">Nutzungsdaten</h3>
          <p className="mb-4">
            Nutzungsdaten beziehen sich auf Informationen, die erfassen, wie Nutzer mit digitalen
            Produkten, Dienstleistungen oder Plattformen interagieren.
          </p>

          <h3 className=" text-lg font-medium">Personenbezogene Daten</h3>
          <p className="mb-4">
            "Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder
            identifizierbare natürliche Person beziehen.
          </p>

          <h3 className=" text-lg font-medium">Profile mit nutzerbezogenen Informationen</h3>
          <p className="mb-4">
            Die Verarbeitung von "Profilen mit nutzerbezogenen Informationen" umfasst jede Art der
            automatisierten Verarbeitung personenbezogener Daten.
          </p>

          <h3 className=" text-lg font-medium">Protokolldaten</h3>
          <p className="mb-4">
            Protokolldaten sind Informationen über Ereignisse oder Aktivitäten, die in einem System
            oder Netzwerk protokolliert wurden.
          </p>

          <h3 className=" text-lg font-medium">Reichweitenmessung</h3>
          <p className="mb-4">
            Die Reichweitenmessung (auch als Web Analytics bezeichnet) dient der Auswertung der
            Besucherströme eines Onlineangebotes.
          </p>

          <h3 className=" text-lg font-medium">Verantwortlicher</h3>
          <p className="mb-4">
            Als "Verantwortlicher" wird die natürliche oder juristische Person bezeichnet, die über
            die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
          </p>

          <h3 className=" text-lg font-medium">Verarbeitung</h3>
          <p className="mb-4">
            "Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte
            Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten.
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Legal;
