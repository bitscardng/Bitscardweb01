import React from "react";
import { Link } from "react-router-dom";
import { iPhone_13_Pro } from "../assests";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* Hero section*/}

      <section className="py-10  justify-between items-center">
        <div className="min-h-screen bg-bg-white relative px-4">
          <div className=" flex-row-reverse ">
            <div className="relative top-40">
              <div className="absolute w-[420px] right-6 bg-[#885DF5] z-10 h-[380px] border border-bg-black">
                <img
                  src={iPhone_13_Pro}
                  alt="phones"
                  className="max-w-sm absolute -top-32 right-2"
                />
              </div>
              <div className="absolute w-[420px] -right-0 top-4 bg-[#000] h-[380px] border border-bg-black"></div>
            </div>

            <div>
              <div className="text-left w-[509px] lg:w-[609] pt-4">
                <h1 className="text-5xl font-bold">
                  Do more send, spend, bank, and trade gift cards or crypto
                </h1>
                <p className="py-4 font-semibold">
                  Neo banking built for you -USD Account, Virtual cards, Virtual
                  account, gift cards and crypto trading...
                </p>
              </div>
              <div className=" relative">
                <div className="absolute w-[360px] p-0 bg-[#D9D9D9] z-10 h-[320px] border border-bg-black text-center items-center justify-center font-semibold">
                  <p className="p-2 bg-[#219DFC] font-bold">EXCHANGE RATE</p>
                  <div className="py-8">
                    <div className="flex justify-between p-2 border border-bg-black m-2">
                      <div>NGN</div>
                      <p>74,000</p>
                    </div>
                    Rate {"740"}/$
                    <div className="flex justify-between p-2 border border-bg-black m-2">
                      <div>USD</div>
                      <p>100.43</p>
                    </div>
                    <button className="border p-2 border-bg-black bg-[#47A348] mt-2">
                      Get started
                    </button>
                  </div>
                </div>
                <div className="absolute w-[360px] left-4 top-4 bg-[#000] h-[320px] border border-bg-black"></div>
              </div>
            </div>
          </div>

          <div className="flex justify-between px-6 mt-96">
            <div className="flex gap-4">
              <p className="font-semibold bg-[#767DFF] p-2 px-6 shadow-black">
                <div></div> 730/$
              </p>
              <p className="font-semibold bg-[#767DFF] p-2 px-6 shadow-black">
                <div></div> 728/$
              </p>
            </div>
            <div className="text-bg-white flex gap-4 ">
              <Link className="bg-bg-black flex text-center items-center gap-2 p-1">
                <IoLogoGooglePlaystore />
                Google play
              </Link>
              <Link className="bg-bg-black flex text-center items-center gap-2 p-1">
                <FaApple />
                App store
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-bg-black p-2 font-semibold flex justify-around mt-6">
          <div className="bg-bg-white p-2">blackthron</div>
          <div className="bg-bg-white p-2">master card</div>
          <div className="bg-bg-white p-2">bitnob</div>
        </div>
      </section>

      <section className="py-10">
        <p className="text-center pt-6 pb-2 text-[50px]">
          One platform <span className="font-bold">for all transaction</span>
        </p>

        <div className="hero bg-[#D1D0D0]">
          <div className="hero-content flex-col">
            <div>
              <h1 className="text-3xl font-bold">
                Open global accounts <div></div>
              </h1>
              <p className="py-2 font-semibold">
                Open a US Dollar, Nigerian Naira, Canadian Dollar, UK Pounds
                account in less than 5 minutes.
              </p>
              <button className="border p-2 border-bg-black bg-[#767dff] mt-2">
                Open a free account
              </button>
            </div>
            <img src="" alt="phones" className="max-w-sm " />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
