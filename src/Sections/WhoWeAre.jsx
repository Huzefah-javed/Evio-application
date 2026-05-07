export const WhoWeAre = () => {
  return (
    <div className="min-h-lvh w-full flex justify-center items-center md:p-10 p-5 gap-16 md:flex-row flex-col-reverse">
      <div className="flex-1 w-full h-full flex items-center justify-center">
        <img
          src="/whoweare.jpg"
          alt=""
          className="lg:aspect-[4/3.2] aspect-square rounded-[20%] w-full"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-evenly">
        <button className="linearGrd rounded-full text-white py-2 px-6 myAnimatePulse mb-6">
          Trusted Property Partner
        </button>
        <h2 class="text-3xl md:text-5xl font-bold mb-6">
          Who <span class="textLinearGrd"> We </span> Are
        </h2>
        <p className="text-gray-800 mb-3 md:text-[1.1rem]">
          At Evio Real Estate, we make buying, selling, and renting property
          simple, smart, and stress-free. Whether you’re a first-time homebuyer
          searching for your dream home, an investor exploring profitable real
          estate opportunities, or a family looking to rent a modern apartment,
          we provide personalized property solutions tailored to your needs.
        </p>
        <p className="text-gray-800 mb-6 md:text-[1.1rem]">
          Our platform provides verified listings, transparent pricing, and
          expert guidance to help you make confident real estate decisions. From
          luxury homes and apartments to commercial properties and rental
          spaces, Evio connects you with the best opportunities in prime
          locations—built on trust, innovation, and customer satisfaction.
        </p>
        <button className="hover:linearGrdRev rounded-full px-10 py-3 linearGrd text-white">
          Want to know more
        </button>
      </div>
    </div>
  );
};
