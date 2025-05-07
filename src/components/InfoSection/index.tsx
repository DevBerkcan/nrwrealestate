import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface InfoSectionProps {
  title?: string;
  subtitle?: string;
  imageSrc: string;
  addButton: boolean;
  className?: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  subtitle,
  imageSrc,
  addButton,
  className,
}) => {
  return (
    <section
      className={cn(
        "py-10 flex flex-col-reverse [@media(min-width:1350px)]:flex-row gap-20 lg:gap-28",
        className
      )}
    >
      {/* Image Section */}
      <div className="max-w-[726px] [@media(min-width:1350px)]:w-[726px]">
        <Image
          className="w-full h-auto object-cover"
          alt={title ? `${title} Bild` : "Info Section Image"}
          src={imageSrc}
          width={726}
          height={1071}
          priority
        />
      </div>

      {/* Text Section */}
      <div
        className={`w-full text-normal flex-1 flex flex-col pt-10 font-gothic `}
      >
        {title && (
          <h2 className="font-merriweather font-[400] text-center md:text-left text-[#1a1a1a] text-[40px] leading-[32px] mb-2">
            {title}
          </h2>
        )}
        {subtitle && (
          <h2 className="font-gothic font-bold text-center md:text-left text-[#1a1a1a] text-normal leading-[52px] mb-16">
            {subtitle}
          </h2>
        )}
        <p className="  mb-10">
          Wir suchen kontinuierlich nach attraktiven Immobilien in Wuppertal und
          Umgebung.
        </p>
        <p className=" mb-10">
          <>
            Dank unserer langjährigen Expertise können wir Immobilien in
            unterschiedlichsten Zuständen und aus allen Baujahrklassen präzise
            bewerten und verborgene Potenziale
            <br />
            erkennen. Unser Ankaufsprofil umfasst sowohl sanierte
            Mehrfamilienhäuser als auch entwicklungsbedürftige Bestandsobjekte
            mit hohem Aufwertungspotential.
          </>
        </p>
        <p className=" font-semibold mb-10">Unser Fokus:</p>
        <p className=" mb-10">
          Immobilien im Wohnbereich, einschließlich Mehrfamilienhäuser, Wohn-
          und Geschäftshäuser, Wohnanlagen sowie Grundstücke.
        </p>
        <p className=" mb-10">
          Bestandsobjekte mit Entwicklungspotenzial, z. B. durch Leerstand oder
          Sanierungsbedarf.
        </p>
        <p className=" mb-10">
          Wir versprechen diskrete, transparente und zügige Abwicklungsprozesse.
        </p>
        <p className=" mb-10">
          Besuchen Sie gerne unser Ankaufsprofil, um weitere Details zu
          erfahren. Wir freuen uns auf die mögliche Zusammenarbeit.
        </p>

        {addButton && (
          <Link
            href="/Ankaufsprofil"
            className="text-white w-[174px] h-[48px] flex justify-center items-center font-semibold bg-[#1B944A]"
          >
            Ankaufsprofil
          </Link>
        )}
      </div>
    </section>
  );
};

export default InfoSection;
