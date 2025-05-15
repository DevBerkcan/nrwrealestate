import Image from "next/image";
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  title: string;
  content: string[];
  imageSrc: string;
  titleFont?: string;
  textFont?: string;
  textColor?: string;
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  content,
  imageSrc,
  className,
}) => {
  return (
    <section
      className={cn(
        "flex flex-col [@media(min-width:1350px)]:flex-row gap-20 text-[#1a1a1a]",
        className
      )}
    >
      {/* Text Section */}
      <div className="w-full [@media(min-width:1350px)]:w-[729px] h-auto text-left pt-10">
        <h2 className="text-[40px] font-merriweather font-normal leading-normal text-center lg:text-left mb-20">
          {title}
        </h2>
        <div className="flex flex-col font-gothic gap-10 md:gap-12">
          {content.map((para, ind) => (
            <p
              key={ind}
              className="text-[18px] text-[#1a1a1a] font-normal subpixel-antialiased tracking-wide leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full [@media(min-width:1350px)]:w-[726px] max-w-[726px]">
        <Image
          className="w-full h-auto object-cover"
          alt="About Section Image"
          src={imageSrc}
          width={726}
          height={696}
          layout="intrinsic"
          priority
        />
      </div>
    </section>
  );
};

export default AboutSection;
