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
        "py-10 flex flex-col-reverse [@media(min-width:1350px)]:flex-row gap-20 lg:gap-20",
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
        className={`w-full flex-1 flex flex-col pt-4 `}
      >
        {title && (
          <h2 className="font-merriweather font-[400] text-center md:text-left text-[#1a1a1a] text-[40px] leading-[32px] mb-5">
            {title}
          </h2>
        )}
        {subtitle && (
          <h2 className="font-gothic font-bold text-center md:text-left text-[#1a1a1a] leading-[52px] mb-10">
            {subtitle}
          </h2>
        )}
        <p className="font-gothic mb-10">
          Wir sind kontinuierlich auf der Suche nach attraktiven Immobilien in
          Wuppertal und Umgebung.
        </p>
        <p className="font-gothic mb-10">
          <>
            Dank unserer langjährigen Expertise können wir Immobilien
            inunterschiedlichsten <br />
            Zuständen und aus allen Baujahrklassen präzise bewerten und
            verborgene
            <br /> Potenziale erkennen.
            <br />
            <br />
            Unser Ankaufsprofil umfasst sowohl sanierte Mehrfamilienhäuser als
            <br />
            auch entwicklungsbedürftige Bestandsobjekte mit hohem
            Aufwertungspotenzial.
          </>
        </p>
        <p className="font-gothic font-bold mb-10"><br />Unser Fokus:</p>
        <p className="font-gothic mb-10">
          Immobilien im Wohnbereich, einschließlich Mehrfamilienhäuser,
          <br />
          Wohn- und Geschäftshäuser, Wohnanlagen sowie Grundstücke.
        </p>
        <p className="font-gothic mb-10">
          Bestandsobjekte mit Entwicklungspotenzial - etwa durch Leerstand oder
          <br />
          Sanierungsbedarf.
        </p>
        <p className="font-gothic mb-10">
          Wir garantieren eine diskrete, transparente und zügige Abwicklung.
        </p>
        <p className="font-gothic mb-10">
          Besuchen Sie gerne unser Ankaufsprofil, um mehr über unsere Kriterien
          zu erfahren.
          <br /> Wir freuen uns auf eine mögliche Zusammenarbeit.
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
