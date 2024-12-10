import React from 'react'
import image1 from "../../imgs/avataaars.svg"
export default function Home() {
  return (
   <>
    <div className="w-full py-20 flex flex-col justify-center items-center text-center  bg-[--main-color]">
   
    <div className="w-[250px] h-[250px] rounded-full bg-white ">
      <img
        src={image1} // Replace with your avatar URL
        alt="Avatar"
        className="w-full rounded-full"
      />
    </div>
 
    <h2 className="text-4xl font-bold text-white mt-4">START FRAMEWORK</h2>
    <p className="text-sm text-white mt-2">
      Graphic Artist • Web Designer • Illustrator
    </p>
    <div className="flex items-center justify-center mt-4">
      <div className="w-20 h-1 bg-white mx-1"></div>
      <span className="text-white font-bold text-2xl">*</span>
      <div className="w-20 h-1 bg-white mx-1"></div>
    </div>
  </div>

</>)
}
