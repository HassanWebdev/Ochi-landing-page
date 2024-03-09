import React, { useState } from "react";
import img from "./Fyde_Illustration_Crypto_2-1326x1101.png";
import img2 from "./Vise_front2-1326x1101.jpg";

function Featured() {
  const[ishover,sethover]=useState(false)
  const[ishover1,sethover1]=useState(false)
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="w-full bg-white overflow-hidden"
    >
      <div className="text-[4vw] px-8 tracking-tighter pt-10  pb-10 border-b-[1px] border-gray-500">
        <h1>Featured Projects</h1>
      </div>
      <div className="boxes  w-full h-[80vh] mt-10 flex gap-5 px-7 justify-center items-center ">
        <div onMouseEnter={()=>sethover(true)} onMouseLeave={()=>sethover(false)} className="Left w-1/2 h-[71vh]    relative  ">
          <div className={`absolute flex left-full top-1/2 -translate-x-1/2 -translate-y-1/2 text-[4vw] z-[99] text-[#97ad46] font-bold tracking-tighter opacity-0 transition duration-700 ${ishover && 'opacity-100'}`}>
            {
              "FYDE".split('').map((item,index)=>{
                return (
                  <h1 key={index}>{item}</h1>
                )
              })
            }
          </div>
          <img
            src={img}
            alt=""
            className="rounded-xl  w-full h-[70vh] object-cover hover:scale-90  transition duration-300"
          />
        </div>
        <div onMouseEnter={()=>sethover1(true)} onMouseLeave={()=>sethover1(false)} className=" Right w-1/2 h-[71vh]  relative ">
          <h1 className={`absolute flex right-full top-1/2 translate-x-1/2 -translate-y-1/2 text-[4vw] z-[99] text-[#97ad46] font-bold tracking-tighter opacity-0 transition duration-700 ${ishover1 && 'opacity-100'} `}>
            {
              "VISE".split('').map((item,index)=>{
                return (
                  <h1 key={index}>{item}</h1>
                )
              })
            }
          </h1>
          <img
            src={img2}
            alt=""
            className=" w-full h-[71vh] object-cover hover:scale-90 rounded-xl transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default Featured;
