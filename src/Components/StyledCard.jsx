import { Check } from "lucide-react";

export const StyledCard = ({fadedColor, color, icon, title, para}) => {
  return (
    <div class={`${fadedColor} relative shadow-md hover:shadow-xl transition rounded-3xl p-10 text-center flex flex-col items-center`}>
      <div class="w-24 h-24 flex justify-center rounded-full items-center bg-white absolute -top-12 left-1/2 -translate-x-1/2">
        <div class=" w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 shadow-md mx-auto ">
         {icon}
        </div>
      </div>
      <h3 class="text-lg font-semibold mt-6">{title}</h3>
      <p class="mt-2 text-sm font-medium leading-tight">
        {para}
      </p>
    </div>
  );
};
