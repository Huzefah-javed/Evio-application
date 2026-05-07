import { Footer } from "../Components/Footer";
import { NavbarComponent } from "../Components/NavBarComponent";
import { SkeletonLoader } from "../Components/skeletonLoader";
import { AvailableForRent } from "../Sections/AvaiableForRent";
import { DreamPropertyCard } from "../Sections/DreamPropertyCard";
import { HeroSection } from "../Sections/HeroSection";
import { NewsLetter } from "../Sections/NewsLetter";
import { PropertiesForSale } from "../Sections/PropertiseForSale";
import { TopProperties } from "../Sections/TopProperties";
import { WhoWeAre } from "../Sections/WhoWeAre";
import { WhyChooseEvio } from "../Sections/WhyChooseEvio";

export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      < TopProperties/>
      < PropertiesForSale/>
      <AvailableForRent/>
      <DreamPropertyCard />
      <WhyChooseEvio />
      </>
  );
};
