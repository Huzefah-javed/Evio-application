import { SkeletonLoader } from "../Components/skeletonLoader";

export const AvailableForRent = () => {
  return (
    <div>
      <div class="flex flex-col justify-center items-center w-full">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="textLinearGrd">Available</span> For Rent
        </h1>
        <h2 class="mt-4 md:max-w-[70%] text-center mb-6">
          Explore premium houses, luxury apartments, family homes, and
          commercial properties in prime locations. Evio connects you with
          trusted real estate listings to find your perfect home or investment.
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
