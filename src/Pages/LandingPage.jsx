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
      <HeroSection
        Heading={
          <h1 className="md:text-[4rem] sm:text-4xl text-3xl font-bold md:mb-6 mb-3 text-white text-center md:leading-16 leading-10">
            Smart <span class="textLinearGrd"> Real Estate </span> Solutions
            <br /> for Your <span class="textLinearGrd"> Dream Home</span>
          </h1>
        }
        para="Buy, sell, or rent properties with ease. Evio connects you to trusted real estate listings, modern homes, and top investment opportunities."
        buttonText="Browse Properties"
        blinkerText="Smart. Reliable. Future-Ready"
        bgLink="/hero.webp"
      />
      <WhoWeAre />
      <TopProperties />
      <PropertiesForSale />
      <AvailableForRent />
      <DreamPropertyCard />
      <WhyChooseEvio />
    </>
  );
};
