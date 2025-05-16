import Image from "next/image";
import Link from "next/link";
import React from "react";

const Ankaufsprofilcomp2 = () => {
  return (
    <section className="px-8 md:px-28 mx-auto py-10 flex flex-col-reverse  xl:flex-row gap-14 lg:gap-10">
      
      {/* Image Section - 40% Width */}
      <div className="relative m-auto md:m-0 md:w-[662px]">
      <Image
        src="/public/frame8.png"
        alt="Ankaufsprofil Image"
        width={662}
        height={878}
        className="w-full h-full object-cover"
        priority
      />
      </div>

      {/* Text Section - 60% Width */}
      <div className="flex-1 flex flex-col font-light h-full">
        <h2 className="font-merriweather font-normal text-[#1a1a1a] text-[40px] leading-[32px] mb-12">
        Unser Anforderungsprofil
        </h2>
        <div className="flex flex-col justify-between h-full">
          <div className={`font-gothic text-[#1A1A1A] font-[400]`}>
            <p className="text-normal font-[400] mb-8 leading-[25px]">
              Unser Hauptaugenmerk liegt auf Wohnimmobilien in Wuppertal und
              Umgebung. Auch folgende Städte sind von Interesse: Remscheid,
              Solingen, Mettmann, Hilden, Essen, Oberhausen, Gelsenkirchen und
              weitere Städte im Ruhrgebiet und Bergischen Land.
            </p>
            <p className="text-normal mb-8">
              <strong className="font-gothic">Standortkriterien:</strong>{" "}
              Keine Einschränkungen. Wir prüfen gute, mittlere, als auch
              moderate Lagen.
            </p>
            <p className="text-normal mb-8">
              <strong className="font-gothic">Zustand:</strong> Keine
              Einschränkungen. Bestandsobjekte mit Entwicklungspotential, wie
              beispielsweise durch Leerstand oder Sanierungsbedarf, stellen kein
              Ankaufshindernis dar.
            </p>
            <p className="text-normal mb-8">
              <strong className="font-gothic">Objektart:</strong>{" "}
              Mehrfamilienhäuser, Wohn- & Geschäftshäuser, Wohnanlagen,
              Sozialwohnungen, Grundstücke, Parkanlagen. Asset- und Sharedeals
              sind möglich.
            </p>
            <p className="text-normal mb-8">
              <strong className="font-gothic">Gewerbe:</strong> Wir suchen
              Gewerbeimmobilien, Hallen und Lager im Raum Wuppertal.
            </p>
            <p className="text-normal mb-8">
              <strong className="font-gothic">Angebot:</strong> Für ein erstes
              indikatives Kaufpreisangebot benötigen wir vorab nur die
              wichtigsten Kerndaten der Immobilie.
            </p>
            <p className="text-normal mb-8">
              <strong className="font-gothic">Abwicklung:</strong> Wir
              versprechen eine schnelle, seriöse, transparente und diskrete
              Abwicklung. Eine Kaufentscheidung wird innerhalb kurzer Zeit
              getroffen.
            </p>
            <p className="text-normal mb-8">
              Gerne unterstützen wir Sie bei der Zusammenstellung der
              Objektunterlagen und freuen uns, Ihre Immobilie vertraulich zu
              prüfen zu dürfen.
            </p>
            <p className="text-normal mb-8">
              Kontaktieren können Sie uns gerne per Mail oder direkt hier.
            </p>
          </div>
<Link
  href="/Kontakt"
  className="text-white w-[126px] h-[40px] flex justify-center items-center font-gothic bg-[#1B944A] relative -top-[28px]"
>
  Kontakt
</Link>
        </div>
      </div>
    </section>
  );
};

export default Ankaufsprofilcomp2;
