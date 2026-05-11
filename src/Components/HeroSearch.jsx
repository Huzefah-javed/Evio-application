import React, { useState } from "react";
import {
  Search,
  MapPin,
  ChevronDown,
  ClipboardType,
  Building2,
  Fence,
} from "lucide-react";

export const HeroSearch = () => {
  const [mode, setMode] = useState("buy"); 

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <div className="flex justify-center md:items-center bg-white w-fit rounded-t-lg">
        <button
          onClick={() => setMode("buy")}
          className={`px-6 py-2 rounded-t-lg font-medium transition-all ${mode === "buy" ? "linearGrd text-white" : "bg-white text-gray-600"}`}
        >
          Buy
        </button>
        <button
          onClick={() => setMode("rent")}
          className={`px-6 py-2 rounded-t-lg font-medium transition-all ${mode === "rent" ? "linearGrd text-white" : "bg-white text-gray-600"}`}
        >
          Rent
        </button>
      </div>

      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl rounded-tl-none p-4 md:p-6 flex flex-wrap md:flex-nowrap items-center gap-4 border border-white/20">
        <div className="flex-1 min-w-[150px] px-4">
          <div className="flex items-center justify-between">
            <div className=" text-gray-700 font-medium">Country</div>
            <MapPin size={16} className="text-gray-400" />
          </div>
          <select className="flex items-center justify-between w-full cursor-pointer">
            <option value="" className="text-gray-700 font-medium">
              Select Country
            </option>
            <option value="" className="text-gray-700 font-medium">
              Pakistan
            </option>
            <option value="" className="text-gray-700 font-medium">
              England
            </option>
            <option value="" className="text-gray-700 font-medium">
              UAE
            </option>
          </select>
        </div>

        <div className="hidden md:block h-10 border-l border-gray-200"></div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-medium">Select City</span>
            <div className="flex items-center justify-between cursor-pointer">
              <Building2 size={16} className="text-gray-400 " />
            </div>
          </div>

          <select className="flex-1 flex items-center justify-between w-full">
            <option
              value=""
              className="block text-xs text-gray-400 uppercase tracking-wider mb-1"
            >
              City
            </option>
            <option
              value=""
              className="block text-xs text-gray-400 uppercase tracking-wider mb-1"
            >
              Multan
            </option>
            <option
              value=""
              className="block text-xs text-gray-400 uppercase tracking-wider mb-1"
            >
              Islamabad
            </option>
            <option
              value=""
              className="block text-xs text-gray-400 uppercase tracking-wider mb-1"
            >
              Lahore
            </option>
            <option
              value=""
              className="block text-xs text-gray-400 uppercase tracking-wider mb-1"
            >
              Karachi
            </option>
          </select>
        </div>

        <div className="hidden md:block h-10 border-l border-gray-200"></div>

        <div className="flex-1 min-w-[150px] px-4">
          <div className="flex items-center justify-between group cursor-pointer">
            <span className="text-gray-700 font-medium">Select Category</span>
            <Fence size={16} className="text-gray-400" />
          </div>
          <select className="flex items-center justify-between w-full">
            <option value="">Resident</option>
            <option value="">Agriculture</option>
            <option value="">Vineyards</option>
            <option value="">Retail</option>
          </select>
        </div>

        <div className="hidden md:block h-10 border-l border-gray-200"></div>

        <div className="flex-[1.5] min-w-[250px] px-4">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Price</span>
            <span className="font-bold text-gray-800">$10K - $250M</span>
          </div>
          <div className="relative w-full h-1.5 bg-gray-200 rounded-full mb-4">
            <div
              className="absolute h-full bg-white rounded-full"
              style={{ left: "10%", right: "20%" }}
            ></div>
            <div
              className="absolute w-4 h-4 linearGrd  rounded-full -top-1.5 shadow-sm"
              style={{ left: "10%" }}
            ></div>
            <div
              className="absolute w-4 h-4 linearGrd rounded-full -top-1.5 shadow-sm"
              style={{ right: "20%" }}
            ></div>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Min Price"
              className="w-1/2 text-xs p-1 border rounded bg-transparent focus:outline-none focus:border-[#b67c00]"
            />
            <input
              type="text"
              placeholder="Max Price"
              className="w-1/2 text-xs p-1 border rounded bg-transparent focus:outline-none focus:border-[#b67c00]"
            />
          </div>
        </div>

        <button className="linearGrd w-full md:w-fit flex justify-center items-center text-white p-4 rounded-xl transition-all shadow-lg active:scale-95">
          <Search size={24} />
        </button>
      </div>
    </div>
  );
};
