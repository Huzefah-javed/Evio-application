import { SkeletonLoader } from "../Components/skeletonLoader";

export const TopProperties = () => {
  return (<div>
        <div class="text-center p-2">
    <h1 class="sm:text-4xl md:text-6xl text-3xl font-bold mb-6">
    
      <span class="textLinearGrd">Top </span> Properties
    </h1>
    <h2 class="mt-4 max-w-screen-lg mx-auto">
      Discover handpicked homes and investment properties in prime locations.
      From luxury apartments to family houses and commercial spaces, Evio has
      something for everyone.
    </h2>
  </div>


    <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-8 p-8 mt-6 mb-6">

      <SkeletonLoader/>
      <SkeletonLoader/>
      <SkeletonLoader/>
    </div>
        </div>)
};
