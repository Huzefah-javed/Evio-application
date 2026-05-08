import { SkeletonLoader } from "../Components/skeletonLoader";

export const PropertiesForSale = () => {
  return (
    <div>
      <div class="flex flex-col justify-center items-center w-full p-2">
        <h1 class="sm:text-4xl md:text-6xl text-3xl font-bold mb-6">
          Properties <span class="textLinearGrd">For Sale</span>
        </h1>
        <h2 class="mt-4 md:max-w-[70%] text-center mb-6">
          Discover a wide selection of houses, luxury apartments, and commercial
          properties for sale in prime locations. Find your ideal home or
          investment opportunity with Evio’s trusted listings.
        </h2>
         <button className="rounded-full px-10 py-3 linearGrd text-white">
        View All
      </button>

      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-8 p-8 mt-6 mb-6">
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
      </div>
    </div>
  );
};
