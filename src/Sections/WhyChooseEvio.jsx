import { Check, Headset, House, Search } from "lucide-react";
import { StyledCard } from "../Components/StyledCard";

export const WhyChooseEvio = () => {
  return (
    <div className="pt-16 px-8">
      <div class="flex flex-col justify-center items-center w-full">
         <div className="linearGrd hover:linearGrdRev py-2 px-6 text-white font-medium rounded-full myAnimatePulse mb-3">
            Property Made Simple
          </div>
        <h1 class="sm:text-4xl md:text-6xl text-3xl font-bold mb-6">
          Why Choose <span class="textLinearGrd">Evio</span>
        </h1>
        <h2 class="mt-4 md:max-w-[70%] text-center mb-6">
          We simplify your property journey with verified property listings,
          expert real estate guidance, and personalized housing solutions
          tailored to your needs — whether you’re looking to buy, sell, or rent
          houses, apartments, or investment properties.
        </h2>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mt-12">
        <StyledCard
            color="bg-blue-500"
            fadedColor="bg-blue-100"
            icon={<Check  className="text-blue-500 font-bold"/>}
            title="Verified Listings"
            para="Only trusted and up-to-date properties carefully vetted for you."
        />
        <StyledCard
            color="bg-green-500"
            fadedColor="bg-green-100"
            icon={<Headset  className="font-bold text-green-500"/>}
            title="Expert Support"
            para="Real estate professionals ready to guide you at every step."
        />
        <StyledCard
            color="bg-amber-500"
            fadedColor="bg-amber-100"
            icon={<Search   className="font-bold text-amber-500"/>}
            title="Easy Search"
            para="Smart filters and tools to help you find the right home faster."
        />
        <StyledCard
            color="bg-purple-500"
            fadedColor="bg-purple-100"
            icon={<House  className="font-bold text-purple-500"/>}
            title="Tailored Solutions"
            para="Homes and investments designed to perfectly match your needs."
        />
      </div>
    </div>
  );
};
