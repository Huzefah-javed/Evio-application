import { Link } from "react-router-dom"

export const Contacts=()=>{

    return(
        <div class="flex flex-col justify-center items-center w-full mt-24">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="textLinearGrd">Coming Soon</span>
        </h1>
        <h2 class="mt-4 md:max-w-[70%] text-center mb-6">
          We’re working hard to bring you something amazing. Stay tuned — it won’t take long!
        </h2>
        <Link to="/" className="rounded-full px-10 py-3 linearGrd text-white">
          Back to Home
        </Link>
      </div>
    )
}