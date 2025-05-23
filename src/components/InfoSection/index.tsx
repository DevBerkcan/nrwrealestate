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
      <div className={`w-full flex-1 flex flex-col pt-4 `}>
        {title && (
          <h2 className="font-merriweather font-[400] text-center md:text-left text-[#1a1a1a] text-[40px] leading-[32px] mb-5">
            {title}
          </h2>
        )}
        {subtitle && (
          <h2 className="font-gothic font-bold text-center md:text-left text-[#1a1a1a] leading-[52px] mb-10 text-[18px]">
            {subtitle}
          </h2>
        )}
        <p className="font-gothic mb-10 text-[18px]">
          Wir suchen kontinuierlich nach attraktiven Immobilien in Wuppertal und
          Umgebung.
        </p>
        <p className="font-gothic mb-10 text-[18px]">
          <>
            Dank unserer langjährigen Expertise können wir Immobilien in
            unterschiedlichen Zuständen und aus allen Baujahrklassen bewerten
            und Potentiale erkennen. Dazu gehören sanierte Mehrfamilienhäuser
            ebenso wie entwicklungsbedürftige Bestandsobjekte.
          </>
        </p>
        <p className="font-gothic font-bold mb-10 text-[18px]">
          <br />
          Unser Fokus:
        </p>
        <p className="font-gothic mb-10 text-[18px]">
          Immobilien im Wohnbereich, einschließlich Mehrfamilienhäuser, Wohn-
          und Geschäftshäuser, Wohnanlagen sowie Grundstücke.
        </p>
        <p className="font-gothic mb-10 text-[18px]">
        Bestandsobjekte mit Entwicklungspotenzial, zum Beispiel durch Leerstand oder Sanierungsbedarf.
        </p>
        <p className="font-gothic mb-10 text-[18px]">
          Wir garantieren eine diskrete Prüfung sowie eine zügige und
          transparente Abwicklung.
        </p>
        <p className="font-gothic mb-10 text-[18px]">
          Besuchen Sie gerne unser Ankaufsprofil, um weitere Details zu unserer
          Immobiliensuche zu erfahren.
          <br /> <br /> Wir freuen uns auf eine mögliche Zusammenarbeit.
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
