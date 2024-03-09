import React from "react";

function statis() {
  return (
    <div data-scroll data-scroll-speed='-.01' className="w-full  bg-[#CDEA68] overflow-hidden rounded-t-3xl ">
      <div
        id="upper"
        className="w-full  pt-12 px-10 border-b-[1px] border-[#9db83e]"
      >
        <p className="text-[4vw] pb-10 leading-none">
          <span className="text-[4vw] font-bold">O</span>chi is a strategic
          partner for fast-growing tech <br /> businesses that need to raise
          funds, sell products, <br /> explain complex ideas, and hire great
          people.
        </p>
      </div>
      <div id="bottom" className="w-full  pt-10 pb-11 flex">
        <div id="left " className="w-1/2 px-6 overflow-hidden">
          <h1 className="text-[6vw]">Our approach:</h1>
          <button className="text-white bg-black rounded-3xl text-[1.5vw] px-4 py-1 flex gap-4 items-center mt-20">
            {" "}
            READ MORE
            <div className="w-[.5vw] h-[0.5vw] bg-white rounded-full"></div>
          </button>
        </div>
        <div
          id="right"
          className="w-1/2 h-[60vh] bg-[#9db83e] mr-3 rounded-3xl"
        ></div>
      </div>
    </div>
  );
}

export default statis;
