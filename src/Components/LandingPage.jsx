import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import img from './logo003.png'

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.4"
      className="w-full"
    >
      <div id="Text-hero " className="mt-[6%] px-6 whitespace-nowrap ">
        {["We Create", "Eye Opening", "Presentations"].map((text, index) => {
          return (
            <div key={index} className={`${index == 1 && "flex items-center "}`}>
              {index == 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "6vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay:1.9 }}
                  className="square w-[6vw] h-[3.4vw] "
                ><img className="w-full h-full object-contain" src={img} alt="" /> </motion.div>
              )}
              <h1
                key={index}
                className={` text-[5vw] whitespace-nowrap  font-[Founder] font-bold text-black uppercase tracking-tighter leading-none`}
              >
                {text}
              </h1>
            </div>
          );
        })}
      </div>
      <div
        id="last-Div"
        className=" mt-[14%] w-full  border solid border-t-gray-400 pt-3 px-3"
      >
        <div className="flex justify-between items-center">
          {[
            "For public and private compines",
            "From the first Pitch to IPO",
          ].map((text, index) => {
            return (
              <p
                key={index}
                className="text-black font-[NeueMontreal,Roboto,sans-serif] uppercase text-[1.7vw]"
              >
                {text}
              </p>
            );
          })}
          <button className=" text-[1.4vw] uppercase rounded-full px-2 trasntion duration-300 ease-in-out outline hover:bg-black hover:text-white">
            Start the Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
