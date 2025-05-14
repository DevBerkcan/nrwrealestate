import React from "react";
import Image from "next/image";

const Datenschutzerklaerung = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-sm">
      {/* Header mit Titel */}
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-4xl font-bold text-custom-green mb-2">Datenschutzerklärung</h1>
        <div className="w-24 h-1 bg-custom-green rounded-full"></div>
        <p className="text-gray-600 mt-4 text-center max-w-2xl">
          Zuletzt aktualisiert: {new Date().toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })}
        </p>
      </div>

      <div className="space-y-8">
        {/* Allgemeiner Abschnitt */}
        <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-custom-green flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Allgemein
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Als Betreiber dieser Webseite und als Unternehmen kommen wir mit Ihren personenbezogenen Daten in Kontakt. 
              Gemeint sind alle Daten, die etwas über Sie aussagen und mit denen Sie identifiziert werden können. 
              In dieser Datenschutzerklärung möchten wir Ihnen erläutern, in welcher Weise, zu welchem Zweck und 
              auf welcher rechtlichen Grundlage wir Ihre Daten verarbeiten.
            </p>
            
            <div className="bg-white p-4 rounded border border-gray-200 mt-4">
              <p className="font-semibold text-custom-green mb-2">Verantwortlich für die Datenverarbeitung:</p>
              <p>
                <span className="font-medium">NRW Real Estate GmbH</span><br />
                Herderstraße 4<br />
                42327 Wuppertal<br />
                Deutschland<br /><br />
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +49 173 272 57 20
                </span>
                <span className="flex items-center mt-1">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  mail@nrwrealestate.de
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* SSL-Verschlüsselung */}
        <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-custom-green flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            SSL- bzw. TLS-Verschlüsselung
          </h2>
          <p className="text-gray-700">
            Unsere Website nutzt SSL- bzw. TLS-Verschlüsselung, um Ihre Daten vor dem Zugriff Dritter zu schützen. 
            Sie erkennen dies am Schloss-Symbol in Ihrer Browserzeile sowie daran, dass unsere URL mit &quot;https://&quot; beginnt.
          </p>
        </section>

        {/* Speicherdauer */}
        <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-custom-green flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Wie lange speichern wir Ihre Daten?
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Sofern in dieser Erklärung keine konkrete Speicherdauer genannt ist, speichern wir Ihre Daten, 
              bis der Zweck der Datenverarbeitung entfällt, Sie der Verarbeitung widersprechen oder Ihre Einwilligung widerrufen.
            </p>
            <p>
              Eine Weiterverarbeitung erfolgt nur, wenn rechtliche Gründe dies erlauben, z. B. bei gesetzlichen 
              Aufbewahrungspflichten oder zur Geltendmachung von Rechtsansprüchen.
            </p>
          </div>
        </section>

        {/* Rechte */}
        <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-custom-green flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Ihre Rechte
          </h2>
          <div className="text-gray-700 space-y-4">
            <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Beschwerde bei der Aufsichtsbehörde (Art. 77 DSGVO)</li>
            </ul>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Widerruf Ihrer Einwilligung</h3>
              <p>
                Sie können eine erteilte Einwilligung zur Datenverarbeitung jederzeit widerrufen. 
                Die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Widerspruch gegen Datenverarbeitung</h3>
              <p>
                Wenn wir Ihre Daten auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) verarbeiten, 
                haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, Widerspruch einzulegen. 
                Im Falle von Direktwerbung benötigen wir keine Begründung und dürfen Ihre Daten nicht weiter zu diesem Zweck verarbeiten.
              </p>
            </div>
          </div>
        </section>

        {/* Hosting & CDN */}
        <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-custom-green flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            Hosting & CDN
          </h2>
          <p className="text-gray-700">
            Unsere Website wird bei der Host Europe GmbH, Hansestraße 111, 51149 Köln gehostet. 
            Dabei werden sämtliche Website-Daten und Meta-/Kommunikationsdaten im Rahmen unserer Weisung verarbeitet. 
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und f DSGVO.
          </p>
        </section>

        {/* Server-Log-Dateien */}
        <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-custom-green flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
            </svg>
            Server-Log-Dateien
          </h2>
          <p className="text-gray-700">
            Unser Provider speichert bei jedem Zugriff automatisch sogenannte Server-Log-Dateien 
            (z.B. IP-Adresse, Browser, Uhrzeit), um Sicherheit und Stabilität der Website zu gewährleisten. 
            Diese Daten werden nicht mit anderen Quellen zusammengeführt.
          </p>
        </section>

        {/* Google Fonts */}
        <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-custom-green flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Google Fonts (lokales Hosting)
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Zur einheitlichen Darstellung nutzt diese Website lokal eingebundene Google Fonts. 
              Es erfolgt keine Datenübertragung an Google-Server.
            </p>
            <p>
              Weitere Informationen:
              <span className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                <a
                  href="https://developers.google.com/fonts/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-custom-green hover:text-blue-800 hover:underline flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  Google Fonts FAQ
                </a>
                <a
                  href="https://policies.google.com/privacy?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-custom-green hover:text-blue-800 hover:underline flex items-center mt-1 sm:mt-0"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  Datenschutzerklärung von Google
                </a>
              </span>
            </p>
          </div>
        </section>
      </div>

       {/* Fußzeile mit Siegel */}
       <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <Image
            src="/img_siegel_v2_light.png"
            alt="Geprüft durch Anwalt"
            width={180}
            height={180}
            className="filter drop-shadow-sm"
          />
          <p className="text-xs text-gray-500 mt-2 text-center md:text-left">Rechtlich geprüft durch eine juristische Fachkraft</p>
        </div>
        
        <p className="text-sm text-gray-500 text-center md:text-right">
          Diese Datenschutzerklärung gilt ab {new Date().toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })}<br />
          und wird bei Bedarf aktualisiert.
        </p>
      </div>
    </div>
  );
};

export default Datenschutzerklaerung;
