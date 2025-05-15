import AboutSection from "@/components/AboutUs";
import ContactUS from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";

export default function Main() {
  return (
    <div className="relative w-full mx-auto bg-white">
      <HeroSection
        title="Willkommen bei NRW Real Estate GmbH"
        subtitle={
          <span style={{ letterSpacing: "0.07em", fontWeight: 600 }}>
            Ihr Immobilieninvestor aus Wuppertal
          </span>
        }
        overlayImage="/public/rectangle-13.svg"
        backgroundImage="/public/bg-1.png"
      />
      <div className="px-10 md:px-20">
        <AboutSection
          title="Über uns"
          content={[
            `Wir sind eine familiengeführte GmbH mit Sitz in Wuppertal. Seit 2018 konzentrieren wir uns auf den Ankauf und die Entwicklung von Wohnimmobilien in Wuppertal, dem Bergischen Land und darüber hinaus.`,

            `Unser Fokus liegt auf langfristigen Anlagekäufen, die den Wert der Immobilien nicht nur erhalten, sondern auch neue Potenziale erschließen. Mit unserer langjährigen Erfahrung auf dem Wuppertaler Immobilienmarkt sind wir stets darum bemüht, Bestandsobjekte zu erhalten und neue Werte
zu schaffen.`,

            `Besonderen Wert legen wir auf Diskretion und Professionalität in der Abwicklung sowie auf eine persönliche und vertrauensvolle Zusammenarbeit.`,
          ]}
          imageSrc="/public/Frame 4.png"
        />

        {/* Purchase Profile Section */}
        <InfoSection
          title="Ankaufsprofil"
          subtitle="Für Wohn- und Geschäftsimmobilien"
          imageSrc="/public/Frame 5.jpg"
          addButton
        />

        {/* Contact Section */}
        <ContactUS
          imageSrc="/public/rectangle-12.png"
          imageWidth={629}
          imageHeight={536}
        />
      </div>
    </div>
  );
}
