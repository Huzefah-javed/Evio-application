import { Users } from "lucide-react"; // Standard icon library

export const CTA = () => {
  return (
    <div className="w-full p-4">
      <div className="CardBg rounded-2xl p-4 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="linearGrd p-4 rounded-full shadow-sm flex items-center justify-center">
            <Users size={24} className="text-white" />
          </div>
          <h2 className="text-xl md:text-2xl font-medium text-white">
            Didn't find what you looking?
          </h2>
        </div>

       <button className="hover:linearGrdRev rounded-full px-10 py-3 linearGrd text-white hover:scale-[105%] transition-all">
            Contact us
        </button>
      </div>
    </div>
  );
};
