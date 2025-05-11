import React from "react";

const Datenschutzerklaerung = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Allgemein</h2>
        <p>
          Als Betreiber dieser Webseite und als Unternehmen kommen wir mit Ihren personenbezogenen Daten in Kontakt. Gemeint sind alle Daten, die etwas über Sie aussagen und mit denen Sie identifiziert werden können. In dieser Datenschutzerklärung möchten wir Ihnen erläutern, in welcher Weise, zu welchem Zweck und auf welcher rechtlichen Grundlage wir Ihre Daten verarbeiten.
        </p>
        <p className="mt-4 font-semibold">Verantwortlich für die Datenverarbeitung:</p>
        <p>
          NRW Real Estate GmbH<br />
          Herderstraße 4<br />
          42327 Wuppertal<br />
          Deutschland<br />
          Telefon: +49 173 272 57 20<br />
          E-Mail: mail@nrwrealestate.de
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">SSL- bzw. TLS-Verschlüsselung</h2>
        <p>
          Unsere Website nutzt SSL- bzw. TLS-Verschlüsselung, um Ihre Daten vor dem Zugriff Dritter zu schützen. Sie erkennen dies am Schloss-Symbol in Ihrer Browserzeile sowie daran, dass unsere URL mit &quot;https://&quot; beginnt.

        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Wie lange speichern wir Ihre Daten?</h2>
        <p>
          Sofern in dieser Erklärung keine konkrete Speicherdauer genannt ist, speichern wir Ihre Daten, bis der Zweck der Datenverarbeitung entfällt, Sie der Verarbeitung widersprechen oder Ihre Einwilligung widerrufen.
        </p>
        <p>
          Eine Weiterverarbeitung erfolgt nur, wenn rechtliche Gründe dies erlauben, z. B. bei gesetzlichen Aufbewahrungspflichten oder zur Geltendmachung von Rechtsansprüchen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Ihre Rechte</h2>
        <ul className="list-disc list-inside">
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
          <li>Recht auf Beschwerde bei der Aufsichtsbehörde (Art. 77 DSGVO)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Widerruf Ihrer Einwilligung</h3>
        <p>
          Sie können eine erteilte Einwilligung zur Datenverarbeitung jederzeit widerrufen. Die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">Widerspruch gegen Datenverarbeitung</h3>
        <p>
          Wenn wir Ihre Daten auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) verarbeiten, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, Widerspruch einzulegen. Im Falle von Direktwerbung benötigen wir keine Begründung und dürfen Ihre Daten nicht weiter zu diesem Zweck verarbeiten.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Hosting & CDN</h2>
        <p>
          Unsere Website wird bei der Host Europe GmbH, Hansestraße 111, 51149 Köln gehostet. Dabei werden sämtliche Website-Daten und Meta-/Kommunikationsdaten im Rahmen unserer Weisung verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und f DSGVO.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Server-Log-Dateien</h2>
        <p>
          Unser Provider speichert bei jedem Zugriff automatisch sogenannte Server-Log-Dateien (z. B. IP-Adresse, Browser, Uhrzeit), um Sicherheit und Stabilität der Website zu gewährleisten. Diese Daten werden nicht mit anderen Quellen zusammengeführt.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Google Fonts (lokales Hosting)</h2>
        <p>
          Zur einheitlichen Darstellung nutzt diese Website lokal eingebundene Google Fonts. Es erfolgt keine Datenübertragung an Google-Server.
        </p>
        <p>
          Weitere Informationen:
          <a
            href="https://developers.google.com/fonts/faq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://developers.google.com/fonts/faq
          </a>{" "}
          und
          <a
            href="https://policies.google.com/privacy?hl=de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Datenschutzerklärung von Google
          </a>
        </p>
      </section>
    </div>
  );
};

export default Datenschutzerklaerung;