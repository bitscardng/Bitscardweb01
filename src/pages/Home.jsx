import React from "react";
import { iPhone_13_Pro } from "../assests";

const Home = () => {
  return (
    <div>
      <section>
        <div className="hero bg-bg-white min-h-screen">
          <div className="hero-content flex-row-reverse">
            <div className="relative mt-8">
              <div className="absolute w-[420px] right-28 bg-[#885DF5] z-10 h-[320px] border border-bg-black"></div>
              <div className="absolute w-[420px] right-24 top-4 bg-[#000] h-[320px] border border-bg-black"></div>
              <img
                src={iPhone_13_Pro}
                alt="phones"
                className="max-w-sm absolute right-28 z-20 -top-32"
              />
            </div>

            <div className="">
              <h1 className="text-[60px] font-bold">
                Do more send, spend, bank, and trade gift cards or crypto
              </h1>
              <p className="py-2 font-semibold">
                Neo banking built for you -USD Account, Virtual cards, Virtual
                account, gift cards and crypto trading...
              </p>
              <div className="w-[350px]">
                <div className="realtive m-2 p-0 bg-[#D9D9D9]  w-[350px] text-center items-center justify-center font-semibold">
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
                <div className="flex justify-evenly pt-6">
                  <p className="font-semibold bg-[#767DFF] p-2 px-6 shadow-black">
                    <div></div> 730/$
                  </p>
                  <p className="font-semibold bg-[#767DFF] p-2 px-6 shadow-black">
                    <div></div> 728/$
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-bg-black p-2 font-semibold flex justify-around mt-20">
          <div className="bg-bg-white p-2">blackthron</div>
          <div className="bg-bg-white p-2">master card</div>
          <div className="bg-bg-white p-2">bitnob</div>
        </div>
      </section>
      <section>
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
