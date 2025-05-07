import Image from "next/image";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={className}>
      <Image
        src="/public/logo.jpg" // No need for "public/" prefix
        alt="Logo"
        width={150} // Adjust width based on your needs
        height={150} // Adjust height based on your needs
        priority // Ensures faster loading for critical images
      />
    </div>
  );
};

export default Logo;
