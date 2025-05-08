import Image from "next/image";
import { cn } from "@/lib/utils";
import { gothic, merriweather } from "@/fonts";

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
  backgroundImage,
  overlayImage,
  className,
}) => {
  return (
    <section
      className={cn(
        "relative w-full h-[540px] flex items-start justify-center pt-[140px] antialiased",
        className
      )}
    >
      {/* Hintergrundbild */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        {/* Overlay falls gesetzt */}
        {overlayImage ? (
          <div className="absolute inset-0">
            <Image
              src={overlayImage}
              alt="Overlay"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        ) : (
          <div className="absolute inset-0 bg-black/30 z-10" />
        )}
      </div>

      {/* Text-Inhalt */}
      <div className="relative z-20 text-center px-4">
        <h1
          className={cn(
            "text-white font-extrabold text-[4.8vw] lg:text-[4.16vw] [@media(min-width:1640px)]:text-[80px] whitespace-nowrap leading-[1.2]",
            merriweather.className
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              "text-white font-[600] mt-[36px] text-[4vw] md:text-[3vw] lg:text-[2.08vw] leading-[47.2px] tracking-[0.08em] whitespace-nowrap",
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
