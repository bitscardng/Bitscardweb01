import React from "react";
import { Link } from "react-router-dom";
import {
  iPhone_13_Pro,
  hero1,
  bitcionCard,
  upwork,
  freelancer,
  xchange1,
  usdt,
  blackthorn,
  mastercard,
  bitnob,
  globalacc,
  vmastercard,
  mastercardlogo,
  tbitcoin,
  tradecrypto,
  phones,
} from "../assests";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple, FaBitcoin, FaChevronCircleDown } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* Hero section*/}
      <section className="relative items-center justify-between py-10">
        <div className="px-4 pt-10 hero bg-bg-white">
          <div className="flex flex-col max-w-full p-1 lg:gap-10 hero-content lg:flex-row-reverse">
            <img src={hero1} alt="phones" className="max-w-sm" />

            <div className="flex flex-col">
              <h1 className="text-3xl font-bold lg:text-5xl">
                Do more send, spend, bank, and trade gift cards or crypto
              </h1>
              <p className="py-4">
                Neo banking built for you -USD Account, Virtual cards, Virtual
                account, gift cards and crypto trading...
              </p>

              {/* <div className="relative">
                <div className="absolute w-[360px] p-0 bg-[#D9D9D9] z-10 h-[320px] border border-bg-black text-center items-center justify-center font-semibold">
                  <p className="p-2 bg-[#219DFC] font-bold">EXCHANGE RATE</p>
                  <div className="py-8">
                    <div className="flex justify-between p-2 m-2 border border-bg-black">
                      <div>NGN</div>
                      <p>74,000</p>
                    </div>
                    Rate {"740"}/$
                    <div className="flex justify-between p-2 m-2 border border-bg-black">
                      <div>USD</div>
                      <p>100.43</p>
                    </div>
                    <button className="border p-2 border-bg-black bg-[#47A348] mt-2">
                      Get started
                    </button>
                  </div>
                </div>
                <div className="absolute w-[360px] left-4 top-4 bg-[#000] h-[320px] border border-bg-black"></div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between px-2 py-4 lg:px-6">
          <div className="flex gap-1 lg:gap-4">
            <div className="shadow-2xl bg-[#767DFF] flex items-center p-1 px-2 gap-2">
              <img src={usdt} />
              {"730/$"}
            </div>
            <div className="shadow-2xl bg-[#767DFF] flex items-center p-1 px-2 gap-2">
              <FaBitcoin size={26} />
              {"728.$"}
            </div>
          </div>

          <div className="flex gap-1 lg:gap-4 text-bg-white ">
            <Link className="flex items-center gap-2 p-1 text-center bg-bg-black">
              <IoLogoGooglePlaystore />
              Google play
            </Link>
            <Link className="flex items-center gap-2 p-1 text-center bg-bg-black">
              <FaApple />
              App store
            </Link>
          </div>
        </div>

        <div className="flex justify-around p-2 mt-6 bg-bg-black">
          <img src={blackthorn} alt="trade" className="h-10" />
          <img src={mastercard} alt="trade" className="h-10" />
          <img src={bitnob} alt="trade" className="h-10" />
        </div>
      </section>

      {/* Global account section*/}
      <section className="py-10">
        <p className="pt-6 pb-2 text-5xl text-center">
          One platform
          <span className="pl-2 font-extrabold">for all transaction</span>
        </p>

        <div className="bg-[#D1D0D0] px-12 hero pb-16">
          <div className="flex-col hero-content lg:flex-row">
            <img src={globalacc} alt="gloacc" className="max-w-sm" />
            <div className="">
              <h1 className="text-3xl font-bold">
                Open global accounts <div></div>
              </h1>
              <p className="py-2">
                Open a US Dollar, Nigerian Naira, Canadian Dollar, UK Pounds
                account in less than 5 minutes.
              </p>
              <div className="relative">
                <Link
                  to="/product/global-account"
                  className="absolute text-center border p-2 w-[11pc] border-bg-black h-[3pc] z-10 bg-[#767dff] mt-2"
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
      <section className="py-10">
        <div className="px-12 hero">
          <div className="flex-col hero-content lg:flex-row-reverse">
            <img src={vmastercard} alt="vm" className="max-w-sm" />
            <div className="">
              <h1 className="flex items-center gap-2 text-3xl font-bold">
                Virtual master card <img src={mastercardlogo} alt="mastcard" />
              </h1>
              <p className="py-2 font-semibold">
                Open Create a virtual master card for free today and shop online
                without limit. Find new ways to spend & save.
              </p>
              <div className="relative">
                <Link
                  to="/product/virtual-account"
                  className="absolute text-center border p-2 w-[10pc] border-bg-black h-[3pc] z-10 bg-[#F7931A]  mt-2"
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
        <div className="bg-[#D1D0D0] px-12 hero pb-16">
          <div className="flex-col hero-content lg:flex-row">
            <img src={tradecrypto} alt="gloacc" className="max-w-sm" />
            <div className="">
              <h1 className="flex items-center gap-2 text-3xl font-bold">
                Trade crypto <img src={tbitcoin} alt="mastcard" />
              </h1>
              <p className="py-2">
                Buy, sell, send and receive crypto , you can also buy or sell
                your favorite gift card with us today
              </p>
              <div className="relative">
                <Link
                  to="/product/gift-card"
                  className="absolute text-center border p-2 w-[8pc] border-bg-black h-[3pc] z-10 bg-[#47A348] mt-2"
                >
                  Start trading
                </Link>
                <div className="absolute w-[8pc] bg-[#000] h-[3pc] top-4 left-2 border border-bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create bitcoin card section*/}
      {/* <section className="relative h-screen py-2 mt-12">
        <div className="px-12 ">
          <div className="flex flex-row-reverse h-[540px] justify-between">
            <div className="flex flex-col items-center gap-8">
              <div className="flex gap-1 lg:gap-4 text-bg-white ">
                <Link className="flex items-center gap-2 p-1 text-center bg-bg-black">
                  <IoLogoGooglePlaystore />
                  Google play
                </Link>
                <Link className="flex items-center gap-2 p-1 text-center bg-bg-black">
                  <FaApple />
                  App store
                </Link>
              </div>

              <div className="relative -left-[15rem]">
                <div className="absolute w-[360px] p-0 bg-[#D9D9D9] z-10 h-[520px] border border-bg-black text-center items-center justify-center">
                  <div className="flex w-full">
                    <p className="p-2 bg-[#F7931A] w-full border border-bg-black py-4 font-bold">
                      EXCHANGE RATE
                    </p>
                    <p className="p-2 bg-[#767DFF] w-full border border-bg-black py-4 font-bold">
                      CRYPTO RATE
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <p className="p-2 bg-[#EB6A98] px-8 border border-bg-black py-2 font-bold">
                      BUY
                    </p>
                    <p className="p-2 bg-[#18BBFE] px-8 border border-bg-black py-2 font-bold">
                      SELL
                    </p>
                  </div>
                  <div className="py-8">
                    <div className="flex justify-between p-2 m-2 border border-bg-black bg-bg-white">
                      <div className="flex items-center gap-2">
                        <FaBitcoin className="text-[#F7931A] text-2xl" />
                        <p>BTC</p>
                        <FaChevronCircleDown className="text-[#F7931A] cursor-pointer" />
                      </div>
                      <p>100.43</p>
                    </div>
                    Rate {"740"}/$
                    <div className="flex justify-between p-2 m-2 border border-bg-black bg-bg-white">
                      <div className="flex items-center gap-2">
                        <FaBitcoin className="text-[#F7931A] text-2xl" />
                        <p>NGN</p>
                        <FaChevronCircleDown className="text-[#F7931A] cursor-pointer" />
                      </div>
                      <p>{"NGN 63,433.43"}</p>
                    </div>
                    <p className="items-center p-2 mx-2 my-4 text-justify border border-bg-black bg-bg-white">
                      Exchange rates are volatile right now, so we can't
                      guarantee this rate. We'll use the rate that's live when
                      we receive your money.
                    </p>
                    <button className="border p-2 border-bg-black bg-[#47A348] mt-2">
                      Get started
                    </button>
                  </div>
                </div>
                <div className="absolute w-[360px] left-4 top-4 bg-[#000] h-[520px] border border-bg-black"></div>
              </div>
            </div>

            <div className="text-left w-[409px] lg:w-[609] flex flex-col gap-8">
              <div className="relative border border-bg-black p-2 pl-4 pt-14 mt-8 bg-[#5FC88F]">
                <img
                  src={bitcionCard}
                  alt="coin"
                  className="absolute -top-24 right-2 max-w-[340px]"
                />
                <h5 className="pt-4 text-2xl font-bold">
                  Virtual card funding
                </h5>
                <p className="my-2 font-semibold text-left">
                  You can now create and fund your virtual mastercard with
                  crypto at zero cost.
                </p>
              </div>
              <div>
                <div className="relative border border-bg-black p-2 pl-4 pt-14 mt-8 bg-[#F7931A]">
                  <img
                    src={upwork}
                    alt="coin"
                    className="absolute w-32 -top-10 left-8"
                  />
                  <img
                    src={freelancer}
                    alt="coin"
                    className="absolute w-40 -top-0 right-8"
                  />
                  <h5 className="text-2xl font-bold">
                    Receive payment from foreign employers
                  </h5>
                  <p className="my-2 font-semibold text-left">
                    Freelancer, remote worker or corporate employee? Get paid
                    fast and securely!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* three phone section*/}
      <section className="py-2 pb-20">
        <div className="flex flex-col items-center justify-center px-12">
          <img src={phones} alt="phone" />

          <div className="flex flex-row gap-10">
            <div className="font-semibold md:text-justify">
              <h2 className="text-2xl text-center">Spend</h2>
              With our virtual master card you have no spend limit.
            </div>
            <div className="font-semibold md:text-justify">
              <h2 className="text-2xl text-center">Bank</h2>
              Send and receive payment anywhere in the world with your USD, GBP
              & EURO account.
            </div>
            <div className="font-semibold md:text-justify">
              <h2 className="text-2xl text-center">Trade</h2>
              Buy, sell and receive crypto also buy and sell your giftcards.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
