import React, { useEffect, useState } from "react";
import img from "./Top-Viewbbcbv-1-scaled.jpg";
function Playfull() {
  const [rotate, setrotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle - 180);
    });
  });
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.4'  className="w-full h-screen relative overflow-hidden ">
      <img
        className="w-[65vw]   absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden "
        src={img}
        alt=""
      />
      <div  className="Eyes  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-[8vw]">
        <div className="Eye1 w-[15vw] h-[14vw] bg-white rounded-full relative">
          <div className="Blackpart w-[10vw] h-[10vw] bg-black rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
              className="line  w-full h-[5vh] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="whitepart w-[2.5vw] h-full rounded-full bg-white flex items-center justify-center">
                <div className="w-[1vw] h-[1vw] bg-black rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="Eye2 w-[15vw] h-[14vw] bg-white rounded-full relative">
          <div className="Blackpart w-[10vw] h-[10vw] bg-black rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
              className="line w-full h-[5vh] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
            >
              <div className="whitepart w-[2.5vw] h-full rounded-full bg-white flex justify-center items-center">
                <div className="w-[1vw] h-[1vw] bg-black rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playfull;
