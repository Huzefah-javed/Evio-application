import { Link } from "react-router-dom";
import { HeroSection } from "../Sections/HeroSection";
import { CTA } from "../Components/CTA";
import { InfoCard } from "../Components/InfoCard";
import { ContactSection } from "../Sections/ContactSection";

export const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Sales",
      description:
        "We provide expert guidance in buying and selling premium properties, with solutions tailored to your specific goals.",
      bgLink: "/sales.webp",
    },
    {
      id: 2,
      title: "Lettings",
      description:
        "Our comprehensive letting services ensure seamless experiences for landlords and tenants, prioritizing efficiency and satisfaction.",
      bgLink: "/lettings.webp",
    },
    {
      id: 3,
      title: "Developments / New-builds",
      description:
        "We offer specialist support for new developments, overseeing everything from initial planning to a successful market launch.",
      bgLink: "/specialized.webp",
    },
    {
      id: 4,
      title: "Commercial",
      description:
        "Our strategic commercial real estate services are designed to optimize your investment returns, leveraging market insights and expertise.",
      bgLink: "/sales.webp",
    },
    {
      id: 5,
      title: "Buying agent service",
      description:
        "Navigating the complexities of real estate investment requires expert guidance, strategic insight, and local market knowledge.",
      bgLink: "/expertGuide.webp",
    },
    {
      id: 6,
      title: "Relocation Services",
      description:
        "We offer customized relocation solutions for individuals and businesses, ensuring smooth and efficient transitions across the globe.",
      bgLink: "/Relocation.webp",
    },
    {
      id: 7,
      title: "Management",
      description:
        "Our full-spectrum property management services provide peace of mind, focusing on maximizing long-term value and hassle-free ownership.",
      bgLink: "/managment.webp",
    },
    {
      id: 8,
      title: "Private Office",
      description:
        "We deliver exclusive real estate advisory services for high-net-worth individuals, offering bespoke investment strategies and personalized attention.",
      bgLink: "/resident.webp",
    },
    {
      id: 9,
      title: "Interior Design / Architecture",
      description:
        "Our transformative interior design and architectural services bring spaces to life, combining aesthetics and functionality to create stunning environments.",
      bgLink: "/Interior.webp",
    },
    {
      id: 10,
      title: "Citizenship & Residency Programs",
      description:
        "We guide you through residency and citizenship opportunities through strategic real estate investments, making the process straightforward and effective.",
      bgLink: "/resident.webp",
    },
  ];

  const sectorsData = [
    {
      id: 1,
      title: "Citizenship & Residency Programs",
      description:
        "We guide you through residency and citizenship opportunities through strategic real estate investments, making the process straightforward and effective.",
      bgLink: "/citizenship.webp",
    },
    {
      id: 2,
      title: "Vineyards",
      description:
        "Explore unique investment opportunities in vineyard properties, where we manage everything from the initial acquisition to operational oversight...",
      bgLink: "/vineyards.webp",
    },
    {
      id: 3,
      title: "Land",
      description:
        "Our land services cover strategic investments in undeveloped and partially developed land parcels...",
      bgLink: "/land.webp",
    },
    {
      id: 4,
      title: "Shopping Malls",
      description:
        "We provide tailored investment and management services for shopping mall properties, including tenant mix optimization...",
      bgLink: "/malls.webp",
    },
    {
      id: 5,
      title: "Agriculture",
      description:
        "Invest in high-potential agricultural land with our expert guidance, from acquisition to sustainable farming management...",
      bgLink: "/agriculture.webp",
    },
    {
      id: 6,
      title: "Retail",
      description:
        "Our expertise in retail property investment and management includes market analysis, tenant relations, and asset enhancement.",
      bgLink: "/Retail.webp",
    },
  ];
  return (
    <div>
      <HeroSection
        Heading={
          <h1 className="md:text-[4rem]  sm:text-4xl md:mt-12 text-3xl font-bold md:mb-6 mb-3 text-white text-center md:leading-16 leading-10">
            Our <span class="textLinearGrd"> Services </span>
          </h1>
        }
        para="Our platform offers a seamless experience for buying and renting properties, Weather you are looking for your dream home or wanna rent any existing property"
        bgLink="/service.webp"
        height="h-fit"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 pt-4">
        {servicesData.map((service) => (
           <InfoCard
            id={service.id}
            title={service.title}
            description={service.description}
            bgLink={service.bgLink}
            />
        ))}
      </div>
      <CTA />
      <div className="px-8 py-2">
        <h1 class="sm:text-4xl md:text-6xl text-3xl w-full text-center font-bold mb-6">
          Our <span class="textLinearGrd">Sectors</span> 
        </h1>
        <h2 class="mt-4 max-w-screen-lg mx-auto text-center">
        Our platform offers a wide range of property sectors to suit every need, we provide:
    </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {sectorsData.map((service) => (
            <InfoCard
            id={service.id}
            title={service.title}
            description={service.description}
            bgLink={service.bgLink}
            />
          ))}
        </div>
      </div>
      
      <ContactSection />
    </div>
  );
};
