export const NewsLetter = () => {
  return (
    <section class="p-8 items-center mt-6">
      <div className="CardBg flex flex-col md:flex-row items-center justify-between rounded-4xl p-10">
        <div className="flex-1 flex flex-col w-full gap-5 p-4">
          <div className="mb-6 w-full">
            <img src="/logo.png" alt="" className="lg:w-24 md:w-20 w-16" />
          </div>
          <h2 className="text-white w-full mb-6">
            Evio connects you with verified property listings, transparent
            pricing, and expert guidance for smarter real estate decisions.
          </h2>
          <div className="border w-full border-t-amber-500 border-b-amber-500 border-l-0 border-r-0 flex flex-wrap p-3 justify-start md:gap-12 gap-6 items-center">
            <button className="w-10 h-10 rounded-full p-2 linearGrd flex justify-center items-center">
              <svg
                stroke="white"
                fill="white"
                stroke-width="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full p-2 linearGrd flex justify-center items-center">
              <svg
                stroke="white"
                fill="white"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full p-2 linearGrd flex justify-center items-center">
              <svg
                stroke="white"
                fill="white"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full p-2 linearGrd flex justify-center items-center">
              <svg
                stroke="currentColor"
                fill="white"
                stroke-width="0"
                viewBox="0 0 576 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </button>
          </div>
          <h2 className="text-amber-500 font-bold my-6">Quick Links</h2>
          <div className="text-white w-full flex flex-wrap justify-start items-center md:gap-12 gap-8">
            <a href="/" className="hover:text-amber-500 transition-all">
              Home
            </a>
            <a href="/" className="hover:text-amber-500 transition-all">
              About
            </a>
            <a href="/" className="hover:text-amber-500 transition-all">
              Properties
            </a>
            <a href="/" className="hover:text-amber-500 transition-all">
              Services
            </a>
            <a href="/" className="hover:text-amber-500 transition-all">
              Blogs
            </a>
            <a href="/" className="hover:text-amber-500 transition-all">
              Contacts
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="overflow-hidden  borderAnimation p-8">
            <div className="md:p-8 p-3 w-full h-full flex flex-col justify-evenly items-start">
              <h1 className="textLinearGrd font-bold sm:text-4xl text-2xl relative z-10">
                Subscribe to Our Newsletter
              </h1>
              <p className="text-white text-[0.75rem] sm:text-[1rem] relative z-10 mt-6">
                Stay updated with the latest property listings, market insights,
                and expert tips. Get valuable real estate knowledge delivered
                straight to your inbox.
              </p>
              <form className="relative z-10 w-full flex justify-center items-center gap-5 mt-6">
                <input
                  className="relative z-10 bg-white sm:p-3 p-1 rounded-full flex-3 outline-none"
                  placeholder="Enter Your Email"
                  type="text"
                />
                <button className="relative z-10 py-3 px-4 text-white flex-1 rounded-full linearGrd">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
