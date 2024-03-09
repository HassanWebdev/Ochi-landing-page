import React from 'react'

function Footer() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.4' className='w-full h-screen bg-[#CDEA68] rounded-t-3xl flex justify-center items-center'>
       <div className='text-center leading-none'>
       {
            ['READY','TO START','THE PROJECT?'].map((item,index)=>{
              return   <h1 className={`text-black text-[10vw] tracking-tight font-bold `} key={index}>{item}</h1>
            })
        }
       </div>
    </div>
  )
}

export default Footer
