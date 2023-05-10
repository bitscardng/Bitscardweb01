import React from "react";
import { Link } from "react-router-dom";
import { iPhone_13_Pro, earth, iPhone13 } from "../assests";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* Hero section*/}
      <section className="py-10  justify-between items-center relative">
        <div className="max-h-screen bg-bg-white relative px-4 pt-6">
          <div className="flex-row-reverse ">
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

          <div className="flex justify-between px-6 mt-96 pb-4">
            <div className="flex gap-36 justify-between">
              <div className="relative">
                <button className="absolute border w-[6pc] border-bg-black h-[3pc] z-10 bg-[#767DFF]">
                  <div></div> 730/$
                </button>
                <div className="absolute w-[6pc] bg-[#000] h-[3pc] top-1 left-1 border border-bg-black"></div>
              </div>
              <div className="relative">
                <button className="absolute border w-[6pc] border-bg-black h-[3pc] z-10 bg-[#767DFF]">
                  <div></div> 728/$
                </button>
                <div className="absolute w-[6pc] bg-[#000] h-[3pc] top-1 left-1 border border-bg-black"></div>
              </div>
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

      {/* Global account section*/}
      <section className="py-10">
        <p className="text-center pt-6 pb-2 text-[50px]">
          One platform <span className="font-bold">for all transaction</span>
        </p>

        <div className="bg-[#D1D0D0] px-12">
          <div className="flex flex-row h-[540px] justify-between items-center">
            <div className="relative">
              <div className="absolute w-[420px] -top-40 bg-[#FF6E91] z-10 h-[380px] border border-bg-black">
                <img
                  src={iPhone_13_Pro}
                  alt="phones"
                  className="max-w-sm absolute -top-32 right-2"
                />
              </div>
              <div className="absolute w-[420px] left-4 -top-36 bg-[#000] h-[380px] border border-bg-black"></div>
            </div>
            <div className="text-left w-[409px] lg:w-[609] pt-4">
              <h1 className="text-3xl font-bold">
                Open global accounts <div></div>
              </h1>
              <p className="py-2 font-semibold">
                Open a US Dollar, Nigerian Naira, Canadian Dollar, UK Pounds
                account in less than 5 minutes.
              </p>
              <div className="relative">
                <Link
                  to="/product/global-account"
                  className="absolute border p-2 w-[11pc] border-bg-black h-[3pc] z-10 bg-[#767dff] mt-2"
                >
                  Open a free account
                </Link>
                <div className="absolute w-[11pc] bg-[#000] h-[3pc] top-4 left-2 border border-bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create virtual card section*/}
      <section className="py-2">
        <div className=" px-12">
          <div className="flex flex-row-reverse h-[540px] justify-between items-center">
            <div className="relative -left-[28rem]">
              <div className="absolute w-[420px] -top-40 bg-[#FF6464] z-10 h-[380px] border border-bg-black">
                <img
                  src={iPhone_13_Pro}
                  alt="phones"
                  className="max-w-sm absolute -top-32 right-2"
                />
              </div>
              <div className="absolute w-[420px] left-4 -top-36 bg-[#000] h-[380px] border border-bg-black"></div>
            </div>
            <div className="text-left w-[409px] lg:w-[609] pt-4">
              <h1 className="text-3xl font-bold">
                Virtual master card <div></div>
              </h1>
              <p className="py-2 font-semibold">
                Open Create a virtual master card for free today and shop online
                without limit. Find new ways to spend & save.
              </p>
              <div className="relative">
                <Link
                  to="/product/virtual-account"
                  className="absolute border p-2 w-[10pc] border-bg-black h-[3pc] z-10 bg-[#F7931A]  mt-2"
                >
                  Create virtual card
                </Link>
                <div className="absolute w-[10pc] bg-[#000] h-[3pc] top-4 left-2 border border-bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading section*/}
      <section className="py-10">
        <div className="bg-[#D1D0D0] px-12">
          <div className="flex flex-row h-[540px] justify-between items-center">
            <div className="relative">
              <div className="absolute w-[420px] -top-40 bg-[#767dff] z-10 h-[380px] border border-bg-black">
                <img
                  src={iPhone_13_Pro}
                  alt="phones"
                  className="max-w-sm absolute -top-32 right-2"
                />
              </div>
              <div className="absolute w-[420px] left-4 -top-36 bg-[#000] h-[380px] border border-bg-black"></div>
            </div>
            <div className="text-left w-[409px] lg:w-[609] pt-4">
              <h1 className="text-3xl font-bold">
                Trade crypto & Gift card <div></div>
              </h1>
              <p className="py-2 font-semibold">
                Buy, sell, send and receive crypto , you can also buy or sell
                your favorite gift card with us today
              </p>
              <div className="relative">
                <Link
                  to="/product/gift-card"
                  className="absolute border p-2 w-[8pc] border-bg-black h-[3pc] z-10 bg-[#47A348] mt-2"
                >
                  Start trading
                </Link>
                <div className="absolute w-[8pc] bg-[#000] h-[3pc] top-4 left-2 border border-bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
