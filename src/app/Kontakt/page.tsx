import ContactUS from "@/components/ContactUs";
import HeroSection2 from "@/components/HeroSection2";

const page = () => {
  return (
    <div className=" space-y-20">
      <HeroSection2 title="Kontakt" backgroundImage="/public/bg-2.png" />
      <div className=" px-10 md:px-20">
        <ContactUS
          subTitle={`Haben Sie Fragen oder möchten Sie einen Beratungstermin vereinbaren? Wir sind für Sie da! Kontaktieren Sie uns telefonisch, per E-Mail oder über das Kontaktformular. Unser erfahrenes Team berät Sie gerne persönlich und findet die passende Lösungen für Ihre individuellen Wünsche. 
          Wir freuen uns darauf, von Ihnen zu hören.`}
          // imageSrc="/public/person.png"
          imageHeight={714}
          imageWidth={501}
          alignCenter
        />
      </div>
    </div>
  );
};

export default page;
