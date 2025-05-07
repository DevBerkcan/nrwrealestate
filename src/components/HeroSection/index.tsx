import { merriweather } from "@/fonts";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  overlayImage?: string;
  titleFont?: string;
  subtitleFont?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  overlayImage,
}) => {
  return (
    <section className="relative z-10 w-full h-[762px] bg-contain bg-no-repeat flex items-center justify-center">
      <div className="absolute inset-0 -top-[142px] w-full h-full">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          style={{ objectFit: "cover" }}
          priority
        />
        {overlayImage && (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                to right,
                rgba(90, 90, 90, 0.7) 0%,
                rgba(136, 136, 136, 0.6) 39%,
                rgba(147, 147, 147, 0.5) 43%,
                rgba(90, 90, 90, 0.77) 100%
              )`,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="absolute top-[170px] left-1/2 transform -translate-x-1/2 text-center flex flex-col items-center gap-14">
        <h1
          className={`font-bold text-white text-wrap text-[4.8vw] lg:text-[4.16vw] [@media(min-width:1640px)]:text-[80px] whitespace-nowrap leading-[19.2px] ${merriweather.className}`}
        >
          {title}
        </h1>
        <p className="text-white tracking-wide text-[4vw] md:text-[3vw] lg:text-[2.08vw] leading-[47.2px] whitespace-nowrap font-gothic">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
