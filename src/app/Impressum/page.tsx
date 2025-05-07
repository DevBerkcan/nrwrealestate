import React from "react";

const Impressum = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Anbieter</h2>
        <p>
          NRW Real Estate GmbH<br />
          Herderstraße 4<br />
          42327 Wuppertal<br />
          Deutschland
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Umsatzsteuer-Identifikationsnummer</h2>
        <p>132/5936/1032</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Kontakt</h2>
        <p>
          Telefon: +49 172 2116859<br />
          E-Mail: mail@nrwrealestate.de
        </p>
        <p>Geschäftsführer & Gesellschafter: Oliver Jacobi</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Kammer</h2>
        <p>
          Bergische Industrie- und Handelskammer Wuppertal-Solingen-Remscheid<br />
          Heinrich-Kamp-Platz 2<br />
          42103 Wuppertal<br />
          Deutschland<br />
          E-Mail: ihk@bergische.ihk.de<br />
          Telefon: 0202 2490 – 0
        </p>
      </section>

      <p className="text-sm text-gray-600">
        Im Falle von Abweichungen zwischen der deutschen und der englischen Fassung hat die deutsche Fassung Vorrang.
      </p>
    </div>
  );
};

export default Impressum;
