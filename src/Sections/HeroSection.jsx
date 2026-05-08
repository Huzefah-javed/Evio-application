export const HeroSection = () => {
  return (
    <div className="min-h-dvh bg-[url(/hero.jpg)] bg-cover">
      <div className="w-full min-h-dvh  bg-black/80 flex justify-center items-center">
        <div className="flex flex-col items-center justify-evenly sm:mt-12 mt-24 md:p-0 p-4">
          <div className="linearGrd hover:linearGrdRev py-2 px-6 text-white font-medium rounded-full myAnimatePulse mb-6">
            Smart. Reliable. Future-Ready.
          </div>
          <h1 className="md:text-[4rem] sm:text-4xl text-3xl font-bold md:mb-6 mb-3 text-white text-center md:leading-16 leading-10">
            Smart <span class="textLinearGrd"> Real Estate </span> Solutions
            <br /> for Your <span class="textLinearGrd"> Dream Home</span>
          </h1>
          <p className="mb-6 text-white text-center max-w-2xl font-medium">
            Buy, sell, or rent properties with ease. Evio connects you to
            trusted real estate listings, modern homes, and top investment
            opportunities.
          </p>
          <button className="hover:linearGrdRev rounded-full px-10 py-3 linearGrd text-white hover:scale-[105%] transition-all">
            Browse Properties
          </button>
        </div>
      </div>
    </div>
  );
};
