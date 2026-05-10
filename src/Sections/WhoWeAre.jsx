export const WhoWeAre = ({glitterText, title, para1, para2,imgLink, imgHeight, buttonText , reverse, height, className, flexImg, flexText}) => {
  return (
    <div className={`${height? height:'min-h-lvh' } w-full flex ${reverse? 'md:flex-row-reverse' : 'md:flex-row'} flex-col-reverse ${className} justify-center items-center md:gap-14 gap-5`}>
      <div className={`${flexImg} w-full h-full flex items-center justify-center`}>
        <img
          src={imgLink}
          alt=""
          className={`rounded-[10%] ${imgHeight? imgHeight : 'lg:aspect-[4/3.2] aspect-square w-full'}`}
        />
      </div>
      <div className={`${flexText} flex flex-col items-start justify-evenly`}>
        {
          glitterText &&
          <button className="linearGrd rounded-full text-white py-2 px-6 myAnimatePulse mb-3">
          {glitterText}
        </button>
        }
        {title}
        <p className="text-gray-800 mb-3 md:text-[1rem]">
          {para1}
        </p>
        <p className="text-gray-800 mb-3 md:text-[1rem] mt-0.5">
          {para2}
        </p>
        {
          buttonText &&
          <button className="hover:linearGrdRev rounded-full px-10 py-3 linearGrd text-white">
          {buttonText}
        </button>
        }
      </div>
    </div>
  );
};
