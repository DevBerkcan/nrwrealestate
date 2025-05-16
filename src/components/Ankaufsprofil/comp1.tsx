import Image from "next/image";
import React from "react";

const Ankaufsprofilcomp1 = () => {
  return (
    <section className=" px-8 md:px-28 mx-auto py-10 flex flex-col  xl:flex-row gap-14 lg:gap-10">
      {/* Image Section - 40% Width */}

      {/* Text Section - 60% Width */}
      <div className="w-full flex-1 flex flex-col text-[#1a1a1a] font-[400] pt-2 text-normal">
        <h2 className="font-merriweather font-normal text-[#1a1a1a] text-[40px] leading-[41.41px] mb-5">
          Wir suchen stetig nach Immobilien für unseren Bestand und freuen uns,
          wenn Sie uns bei der Suche unterstützen.
        </h2>
        <p className="font-gothic mb-8">
          Unser Fokus liegt auf Mehrfamilienhäusern, Wohn- und Geschäftshäusern,
          Wohnanlagen sowie Gewerbeimmobilien und Grundstücke.
        </p>
        <p className="font-gothic mb-8">
          Auch Immobilien in B- oder C-Lagen sowie Objekte mit Sanierungsbedarf
          stellen für uns kein Hindernis dar. Im Gegenteil, wir erkennen das
          Potenzial solcher Immobilien und sind stets an deren Entwicklung
          interessiert.
        </p>
      </div>
      <div className="relative md:w-[617px] h-[357px] m-auto md:m-0">
        <Image
          className="w-full h-full object-cover"
          alt="Ankaufsprofilcomp1 Image"
          src="/public/Rectangle 18.png" // Removed "/public/"
          width={617}
          height={357}
          objectFit="intrinsic" // Keeps the aspect ratio without extra space
          priority
        />
      </div>
    </section>
  );
};

export default Ankaufsprofilcomp1;
