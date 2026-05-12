import { Link } from "react-router-dom";
import { HeroSection } from "../Sections/HeroSection";
import { WhoWeAre } from "../Sections/WhoWeAre";
import { ContactSection } from "../Sections/ContactSection";

export const About = () => {
  return (
    <div>
      <HeroSection
        Heading={
          <h1 className="md:text-[4rem] sm:text-4xl md:mt-12 text-3xl font-bold md:mb-6 mb-3 text-white text-center md:leading-16 leading-10">
            <span class="textLinearGrd"> About </span> Us
          </h1>
        }
        para="We provide bespoke real estate solutions driven by integrity and deep market expertise. Our mission is to empower clients to navigate the global property landscape with absolute confidence."
        bgLink="/aboutUs.webp"
        height="h-fit"
      />

      <div className="flex flex-col md:gap-14 gap-4 mt-8 p-8">
        <WhoWeAre
          title={
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              For over <span class="textLinearGrd">20 years</span>, the founding
              members of <span class="textLinearGrd"> EVIOHOLD</span>
            </h2>
          }
          para1="For over 20 years, the founding members of EVIOHOLD have been committed to empowering individuals, families, and businesses through exceptional real estate and investment opportunities. From the dynamic property market of Türkiye to the vibrant landscapes of the UK, UAE, and Europe, our founders and experts have cultivated a wealth of experience and an expansive global network, spanning from the United States to the Far East. Whether you’re an investor seeking to enhance your portfolio, a corporation aiming to expand into new territories, or a family searching for your dream home, EVIOHOLD is your trusted partner. We blend deep industry expertise with a global perspective to bring your vision to life."
          imgLink={"/foundingMember.webp"}
          reverse={true}
          height={"h-fit"}
          imgHeight={"w-full"}
          flexImg={"flex-1"}
          flexText={"flex-2"}
        />

        <WhoWeAre
          title={
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              A Reputation Built on <span class="textLinearGrd"> Trust</span>{" "}
              and <span class="textLinearGrd">Integrity</span>
            </h2>
          }
          para1="Our long-standing reputation is grounded in honesty, transparency, and acting in our clients’ best interests. These values are at the heart of everything we do. We believe that trust is the foundation of every successful partnership, which is why we prioritise:"
          imgLink={"/trustAndIntegrity.webp"}
          height={"h-fit"}
          imgHeight={"w-full"}
          flexImg={"flex-1"}
          flexText={"flex-2"}
        />
        <WhoWeAre
          title={
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              <span class="textLinearGrd">Expertise</span> That Spans Borders
            </h2>
          }
          para1="With decades of experience in Turkish real estate, EVIOHOLD partners with top-tier developers to offer exclusive properties at competitive prices—residential, commercial, or investment.Our reach is global, with clients across Turkey, the UAE, the UK, and Europe. Combining local expertise with international insight, we identify high-growth markets, navigate complex regulations, and deliver strategies that maximise returns.."
          imgLink={"/Expertise.webp"}
          reverse={true}
          height={"h-fit"}
          imgHeight={"w-full"}
          flexImg={"flex-1"}
          flexText={"flex-2"}
        />

        <WhoWeAre
          title={
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Financial Insights That
              <span class="textLinearGrd"> Empower Clients</span>
            </h2>
          }
          para1="Our long-standing reputation is grounded in honesty, transparency, and acting in our clients’ best interests. These values are at the heart of everything we do. We believe that trust is the foundation of every successful partnership, which is why we prioritise:"
          imgLink={"/Expense.webp"}
          height={"h-fit"}
          imgHeight={"w-full"}
          flexImg={"flex-1"}
          flexText={"flex-2"}
        />

        <WhoWeAre
          title={
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              A Team That Goes<span class="textLinearGrd"> Above </span> and{" "}
              <span class="textLinearGrd">Beyond</span>
            </h2>
          }
          para1="At EVIOHOLD, we attract and retain the best talent in the industry. Our team is united by a commitment to professionalism, excellence, and an unwavering focus on client success. We pride ourselves on going the extra mile to deliver insights and solutions that exceed expectations. Whether it’s securing a dream property, navigating legal complexities, or managing an investment portfolio, our team brings the expertise, dedication, and innovation you need to achieve your goals."
          imgLink={"/housingGovern.webp"}
          reverse={true}
          height={"h-fit"}
          imgHeight={"w-full"}
          flexImg={"flex-1"}
          flexText={"flex-2"}
        />

        <WhoWeAre
          title={
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Sina <span class="textLinearGrd"> Edmunds </span>H
            </h2>
          }
          glitterText={"Co-Founder & CEO"}
          para1="With a career spanning over a decade – from London’s corporate and investment hub to Istanbul’s dynamic property market, and back to the super-prime sector of Central London – Sina has established a reputation for delivering strategic, cross-border real estate advisory, with a particular focus on high-net-worth clientele.He began his professional journey as a management consultant in central London, advising businesses on growth strategy, operational efficiency, and risk mitigation. As client conversations increasingly turned toward real estate – both commercial and residential – Sina transitioned naturally into property-focused advisory, bringing with him a refined analytical lens and a deep commercial understanding."
          para2="This evolution was supported by a strong academic foundation: a Master’s in International Business and an MSc in Oil & Gas Trade Management, both completed in London. Further strengthening his professional standing, Sina qualified with Propertymark UK in sales, lettings, and property management – formalising a consulting-led approach rooted in precision, discretion, and client-centric service."
          imgLink={"/ceo.png"}
          flexImg={"flex-1"}
          imgHeight={"h-full"}
          flexText={"flex-1"}
        />
      </div>
      <section class="py-4  CardBg">
        <div class="text-center  text-white p-2">
          <h2 class="sm:text-3xl md:text-4xl text-2xl font-bold mb-6">
            A Message From <span class="textLinearGrd">Our CEO</span>
          </h2>
          <p class="mt-2 max-w-screen-lg mx-auto md:text-[1rem] text-[0.8rem]">
            "Throughout my journey, I observed that even the most well-known
            agencies had gaps — whether in operations, support, strategy, or
            client experience. EVIOHOLD was designed to bridge those gaps,
            bringing together the best elements of each model into one
            integrated, scalable platform. It’s an agency for professionals who
            want to lead, not follow — and I’m proud to invite you to be a part
            of it."
          </p>
        </div>
      </section>

      <h2 class="text-4xl w-full text-center md:text-6xl font-bold mt-6">
        Our<span class="textLinearGrd"> Partners</span>
      </h2>
      <div className="flex flex-col justify-center items-center px-8 pb-14 gap-6">
        <div className={`w-full h-full flex items-center justify-center`}>
          <img
            src={"/partner.png"}
            alt=""
            className="rounded-[10%] w-full md:w-[30rem]"
          />
        </div>
        <p className="text-gray-800 md:text-[1rem] md:text-center text-start w-full p-2">
          From Istanbul, Türkiye to Dallas, USA, Ibrahim brings a distinctive
          blend of legal expertise, entrepreneurial insight, and global
          perspective to Ivyhold. As Co-Founder and Head of Legal &
          Administrative Affairs, he oversees the firm’s legal consultancy
          division and administrative governance—ensuring operational excellence
          while guiding clients through complex cross-border transactions,
          strategic structuring, and international relocation planning. With
          hands-on experience across more than 30 countries, Ibrahim has advised
          on U.S.-based startups, fintech ventures, and citizenship pathways for
          globally mobile investors and families. At Ivyhold, he plays a pivotal
          role in enabling clients to navigate international markets with
          confidence—backed by legal precision and a long-term strategic vision.
          Operating at the intersection of law, innovation, and administration,
          Ibrahim helps Ivyhold deliver not just optimised solutions, but
          enduring global foundations.
        </p>
      </div>

      <ContactSection />
    </div>
  );
};
