export const InfoCard =({id, title, description, bgLink})=>{

    return(
        <div
              key={id}
              className={`border-gray-300 border group hover:border-none overflow-hidden rounded-xl bg-cover bg-center hover:shadow-black`}
              style={{ backgroundImage: `url(${bgLink})` }}
            >
              <div className="w-full h-full p-6  group-hover:bg-black/50 bg-white transition-all duration-1000">
                <h3 className="text-xl font-bold mb-4 textLinearGrd">
                  {title}
                </h3>
                <p className="text-gray-600 group-hover:text-white transition-all ">
                  {description}
                </p>
              </div>
            </div>
    )
}