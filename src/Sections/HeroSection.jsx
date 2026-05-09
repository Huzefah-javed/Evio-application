export const HeroSection = ({
  blinkerText,
  Heading,
  para,
  buttonText,
  bgLink,
}) => {

  return (
    <div className={`min-h-dvh bg-cover`} style={{ backgroundImage: `url(${bgLink})` }}>
      <div className="w-full min-h-dvh bg-black/80 flex justify-center items-center">
        <div className="flex flex-col items-center justify-evenly sm:mt-12 mt-24 md:p-0 p-4">
          {blinkerText && (
            <div className="linearGrd hover:linearGrdRev py-2 px-6 text-white font-medium rounded-full myAnimatePulse mb-6">
              {blinkerText}
            </div>
          )}
          {Heading}
          {para && (
            <p className="mb-6 text-white text-center max-w-2xl font-medium">
              {para}
            </p>
          )}
          {buttonText && (
            <button className="hover:linearGrdRev rounded-full px-10 py-3 linearGrd text-white hover:scale-[105%] transition-all">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
