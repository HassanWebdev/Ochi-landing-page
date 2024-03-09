import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Animate() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.4"
      className="w-full h-[60vh] bg-[#004D43] mt-[4vh]  text-white font-[NeueMontreal,roboto,sans-serif] flex justify-centert items-center py-[40vh] rounded-t-3xl"
    >
      <div className="w-full flex whitespace-nowrap  border-t-[1px] border-gray-400 border-b-[1px] overflow-hidden  ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className=" text-[19vw] font-bold tracking-tight uppercase pr-20 "
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className=" text-[19vw] font-bold tracking-tight uppercase  pr-20"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Animate;
