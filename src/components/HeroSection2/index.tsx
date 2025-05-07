import Image from "next/image";
import { cn } from "@/lib/utils";
import { gothic } from "@/fonts";

interface HeroSection2Props {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  overlayImage?: string;
  className?: string;
}

const HeroSection2: React.FC<HeroSection2Props> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <section
      className={cn(
        "relative w-full h-[500px] flex items-center justify-center",
        className
      )}
    >
      <div className="absolute inset-0">
        <Image
          src="/public/bg-2.png"
          alt="Overlay"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Overlay Verlauf wie im Figma-Design */}

      {/* Text-Inhalt */}
      <div className="relative z-20 text-center px-4">
        <h1
          className={cn(
            "text-white  font-merriweather leading-[1.1] text-[50px] sm:text-[70px] md:text-[100px] lg:text-[128px] whitespace-nowrap"
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              "text-white font-semibold mt-4 text-[20px] sm:text-[20px] md:text-[30px] lg:text-[40px] leading-[47.2px] tracking-tight",
              gothic.className
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroSection2;
