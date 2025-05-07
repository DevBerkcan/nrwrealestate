import Logo from "../Logo";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "Ankaufsprofil", href: "/Ankaufsprofil" },
  { title: "Kontakt", href: "/Kontakt" },
  { title: "Impressum", href: "/Impressum" },
];

const QuickLinks = () => (
  <div className="mb-8">
    <h3 className="font-['Gothic_A1',Helvetica] text-center text-[19px] font-medium text-[#1a1a1a] tracking-[0] leading-[22.8px] mb-6">
      Quick Links
    </h3>
    <ul className="space-y-1">
      {quickLinks.map(({ title, href }) => (
        <li key={title}>
          <a
            href={href}
            className="font-['Gothic_A1',Helvetica] text-[18px] gap-2 flex flex-col items-center text-[#1f4b43] tracking-[0] leading-[28.5px]"
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const ContactInfo = () => (
  <div className="mb-8">
    <h3 className="font-['Gothic_A1',Helvetica] text-center font-medium text-[#1a1a1a] text-[19px] tracking-[0] leading-[19px] mb-6">
      Kontakt
    </h3>
    <div className="font-['Gothic_A1',Helvetica] flex flex-col gap-2 items-center text-[18px] text-[#1f4b43] tracking-[0] leading-[28.5px]">
      <p>www.nrwrealestate.de</p>
      <p>mail@nrwrealestate.de</p>
      <p>+49 173 272 57 20</p>
    </div>
  </div>
);

const AddressInfo = () => (
  <div className="mb-8">
    <h3 className="font-['Gothic_A1',Helvetica] text-center font-medium text-[#1a1a1a] text-[19px] tracking-[0] leading-[19px] mb-6">
      Unsere Adresse
    </h3>
    <div className="font-['Gothic_A1',Helvetica]  flex flex-col gap-2 text-[18px] items-center text-[#1f4b43] tracking-[0] leading-[28.5px]">
      <p>Herderstr. 4</p>
      <p>42327 Wuppertal</p>
      <p>Deutschland</p>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="w-full border-t-2 border-[#FF0000] pt-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Logo zentriert */}
          <div className="mb-12">
            <Logo />
          </div>

          {/* Drei Spalten nebeneinander und zentriert */}
          <div className="w-full flex justify-center mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <QuickLinks />
              <ContactInfo />
              <AddressInfo />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
