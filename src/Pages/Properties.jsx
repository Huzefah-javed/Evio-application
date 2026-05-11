import { Link } from "react-router-dom";
import { HeroSection } from "../Sections/HeroSection";
import { HeroSearch } from "../Components/HeroSearch";
import { ContactSection } from "../Sections/ContactSection";
import { AvailableForRent } from "../Sections/AvaiableForRent";
import { PropertiesForSale } from "../Sections/PropertiseForSale";
import { TopProperties } from "../Sections/TopProperties";

export const Properties = () => {
  return (
    <>
      <HeroSection
        Heading={<HeroSearch />}
        height={"min-h-[80vh]"}
        bgLink="/properties.webp"
      />

      <TopProperties />
      <PropertiesForSale />
      <AvailableForRent />

      <ContactSection />
    </>
  );
};
