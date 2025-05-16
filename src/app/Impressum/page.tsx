import React from "react";
import Image from "next/image";


const Impressum = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-sm">
      <div className="flex flex-col items-center mb-10">
        <div className="mb-6">
          </div>
        <h1 className="text-4xl font-bold text-custom-green mb-2">Impressum</h1>
        <div className="w-24 h-1 bg-custom-green rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Linke Spalte */}
        <div className="space-y-8">
          <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-custom-green flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Anbieter
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium">NRW Real Estate GmbH</span><br />
              Herderstraße 4<br />
              42327 Wuppertal<br />
              Deutschland
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-custom-green flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Kontakt
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium">Oliver Jacobi</span><br /><br />
              <span className="flex items-center mt-1">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +49 172 2116859
              </span>
              <span className="flex items-center mt-1">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                mail@nrwrealestate.de
              </span>
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-custom-green flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              Steuernummer
            </h2>
            <p className="text-gray-700">132/5936/1032</p>
          </section>
        </div>

        {/* Rechte Spalte */}
        <div className="space-y-8">
          <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-custom-green flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              Registereintrag
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Eingetragen im Handelsregister beim<br />
              <span className="font-medium">Amtsgericht Wuppertal</span><br /><br />
              Handelsregisternummer: <span className="font-medium">HRB 23380</span><br /><br />
              Vertretungsberechtigte Person:<br />
              <span className="font-medium">Oliver Jacobi</span>, Geschäftsführer & Gesellschafter
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-custom-green flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              Kammer
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-medium">Bergische Industrie- und Handelskammer</span><br />
              Wuppertal-Solingen-Remscheid<br /><br />
              Heinrich-Kamp-Platz 2<br />
              42103 Wuppertal<br />
              Deutschland<br /><br />
              <span className="flex items-center mt-1">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                ihk@bergische.ihk.de
              </span>
              <span className="flex items-center mt-1">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                0202 2490 – 0
              </span>
            </p>
            </section>
        </div>
      </div>

      {/* Fußzeile mit Siegel und Hinweis */}
      <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <Image
            src="/img_siegel_v1_light.png"
            alt="Geprüft durch Anwalt"
            width={180}
            height={180}
            className="filter drop-shadow-sm"
          />
          <p className="text-xs text-gray-500 mt-2 text-center md:text-left">
            Rechtlich geprüft durch eine juristische Fachkraft
          </p>
        </div>

        <p className="text-sm text-gray-500 text-center md:text-right">
          Im Falle von Abweichungen zwischen der deutschen und der englischen Fassung<br />
          hat die deutsche Fassung Vorrang.
        </p>
      </div>
    </div>
  );
};

export default Impressum;