import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="hero  bg-bg-white min-h-screen">
        <div className="hero-content flex-col">
          <img src="" alt="phones" className="max-w-sm " />
          <div>
            <h1 className="text-3xl font-bold">
              Do more send, spend, bank, and trade gift cards or crypto
            </h1>
            <p className="py-2 font-semibold">
              Neo banking built for you -USD Account, Virtual cards, Virtual
              account, gift cards and crypto trading...
            </p>
            <div className="w-[350px] ">
              <div className="m-2 p-0 bg-[#D9D9D9] w-[350px] border-b-4 border-r-4 border-bg-black text-center items-center justify-center font-semibold">
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
              <div className="flex justify-evenly">
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
        <div className="bg-bg-white text-bgblack p-2">blackthron</div>
        <div className="bg-bg-white text-bgblack p-2">master card</div>
        <div className="bg-bg-white text-bgblack p-2">bitnob</div>
      </div>
    </div>
  );
};

export default Home;
