import { useState } from "react";
import PhoneInputPkg from "react-phone-input-2";
const PhoneInput = PhoneInputPkg.default
  ? PhoneInputPkg.default
  : PhoneInputPkg;
import "react-phone-input-2/lib/style.css";

export const ContactSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#001F3F] from-50%  to-white min-h-[600px] flex items-center py-16 md:px-6 px-3">
      <div className="w-full flex md:flex-row flex-col justify-between md:items-start md:gap-16 gap-6">
        <div className="text-white space-y-4 flex-1">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="textLinearGrd">EVIO</span>
          </h1>
          <p className="text-3xl md:text-5xl font-light opacity-90 leading-tight">
            Where Real Estate <br /> Meets Trust
          </p>
        </div>

        <div className="flex-1">
          <div className="overflow-hidden  borderAnimation">
            <div className=" relative z-20 p-6">
              <h2 className="text-2xl textLinearGrd font-bold text-center text-white mb-8">
                Have Questions?
              </h2>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white  px-4 py-3 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-1">
                      Phone Number
                    </label>
                    <div>
                      <PhoneInput
                        country={"pk"}
                        inputClass="!w-full !bg-white !px-4 !py-3 !h-auto !rounded-lg !border-none !text-base !pl-12"
                        buttonClass="!bg-white !border-none !rounded-l-lg hover:!bg-gray-50"
                        dropdownClass="!rounded-lg !shadow-xl !border-none !w-[16rem]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Country
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white">
                    <option>Select Country</option>
                    <option>Pakistan</option>
                    <option>Turkey</option>
                    <option>United Kingdom</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Enter your query here"
                    className="w-full px-4 py-3 bg-white rounded-lg"
                  ></textarea>
                </div>

                <button className="w-full linearGrd text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-[0.98]">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
