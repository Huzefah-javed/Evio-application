export const SkeletonLoader = () => {
  return (
    <div className="w-full flex flex-col justify-center gap-3 rounded-[5%]  shadow overflow-hidden">
      <div className="h-52 bg-gray-800 animate-pulse rounded-t-[5%]"></div>
      
      <div className="space-y-4 p-6">
        <div className="w-full h-5 bg-gray-800 animate-pulse rounded-2xl"></div>
        <div className="w-3/4 h-5 bg-gray-800 animate-pulse rounded-2xl"></div>
        <div className="w-6/12 h-5 bg-gray-800 animate-pulse rounded-2xl"></div>
      </div>

      <div className="flex space-x-4 p-4 border-t border-gray-200">
        <div className="w-full h-5 bg-gray-800 animate-pulse rounded-full"></div>
        <div className="w-full h-5 bg-gray-800 animate-pulse rounded-full"></div>
        <div className="w-full h-5 bg-gray-800 animate-pulse rounded-full"></div>
      </div>
    </div>
  )
}