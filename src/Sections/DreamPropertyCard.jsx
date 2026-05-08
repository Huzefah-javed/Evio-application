export const DreamPropertyCard = () => {
  return (
    <section class="py-10 md:py-16  CardBg">
      <div class="text-center  text-white p-2">
        <h2 class="sm:text-4xl md:text-6xl text-3xl font-bold mb-6">
          Find Your <span class="textLinearGrd"> Dream <br /> Property</span> with Evio
        </h2>
        <p class="mt-4 max-w-screen-lg mx-auto">
          Browse premium houses, luxury apartments, family homes, and commercial
          spaces in prime locations worldwide. Start your real estate journey
          with Evio’s trusted experts and exclusive listings.
        </p>
        <div class="mt-8">
          <a href="/properties" data-discover="true">
            <button className="rounded-full px-10 py-3 linearGrd text-white">Start Your Search</button>
          </a>
        </div>
      </div>
    </section>
  );
};
