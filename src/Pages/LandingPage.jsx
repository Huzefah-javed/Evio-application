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
      <WhoWeAre
        title={
          <h2 class="text-3xl md:text-5xl font-bold mb-6">
            Who <span class="textLinearGrd"> We </span> Are
          </h2>
        }
        glitterText={"Trusted Property Partner"}
        para1={`At Evio Real Estate, we make buying, selling, and renting property
          simple, smart, and stress-free. Whether you’re a first-time homebuyer
          searching for your dream home, an investor exploring profitable real
          estate opportunities, or a family looking to rent a modern apartment,
          we provide personalized property solutions tailored to your needs.`}
          para2="Our platform provides verified listings, transparent pricing, and
          expert guidance to help you make confident real estate decisions. From
          luxury homes and apartments to commercial properties and rental
          spaces, Evio connects you with the best opportunities in prime
          locations—built on trust, innovation, and customer satisfaction."
          buttonText={"Want to know more"}
          imgLink={"/whoweare.jpg"}
          className={"md:p-8 p-5"}
          flexImg={"flex-1"}
          flexText={"flex-1"}
      />
      <TopProperties />
      <PropertiesForSale />
      <AvailableForRent />
      <DreamPropertyCard />
      <WhyChooseEvio />
    </>
  );
};
