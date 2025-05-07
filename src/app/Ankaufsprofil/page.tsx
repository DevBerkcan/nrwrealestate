import Ankaufsprofilcomp1 from "@/components/Ankaufsprofil/comp1";
import Ankaufsprofilcomp2 from "@/components/Ankaufsprofil/comp2";
import HeroSection2 from "@/components/HeroSection2";

export default function Main() {
  return (
    <div className="relative w-full  mx-auto bg-white space-y-20 ">
      <HeroSection2
        title="Ankaufsprofil"
        subtitle="für Wohn- & Geschäftsimmobilien"
        backgroundImage="/public/bg-2.png"
      />

      <Ankaufsprofilcomp1 />

      <Ankaufsprofilcomp2 />
    </div>
  );
}
