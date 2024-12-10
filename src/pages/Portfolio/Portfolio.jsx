import React, { useState } from 'react'
import img1 from "../../imgs/poert1.png"
import img2 from "../../imgs/port2.png"
import img3 from "../../imgs/port3.png"
import { Modal } from "flowbite-react";

export default function Portfolio() {
  const [openModal, setOpenModal] = useState(true);
  
  let [images,setImages]=useState([
    { id: 1, path:img1, alt: "Project 1" },
    { id: 2, path:img2, alt: "Project 1" },
    { id: 3, path:img3, alt: "Project 1" },
    { id: 4, path:img1, alt: "Project 1" },
    { id: 5, path:img2, alt: "Project 1" },
    { id: 6, path:img3, alt: "Project 1" },
  ])
  return (
    <>
<section className="bg-gray-100  min-h-screen">
      <div className="container mx-auto px-4 text-center pb-9">
        <h2 className="text-4xl font-bold uppercase pt-10">Portfolio Component</h2>
        <div className="flex justify-center items-center mt-4">
          <span className="block w-12 h-1 bg-gray-800"></span>
          <i className="fas fa-star mx-4 text-2xl text-gray-800"></i>
          <span className="block w-12 h-1 bg-gray-800"></span>
        </div>


       <div className="container  mx-auto  mt-10">
        <div className="card flex flex-wrap gap-10 justify-center">
       
          {images.map((item) => (
            <div key={item.id} className="w-[30%] relative cursor-pointer" >
              <img
                src={item.path}
                alt={item.alt}
                className=" rounded-md mx-auto"
              />
              <div 
              onClick={() => setOpenModal(item.id)}
              className=" rounded-md absolute w-full h-full inset-0 bg-[#1abc9ce6] flex justify-center items-center opacity-0
               hover:opacity-100 transition-all duration-700">
               <i className="fa-solid fa-plus text-6xl text-white"></i>

              </div>
            </div>
          ))}
        

        </div>

       </div>
      </div>

      {images.map((item)=>{
        return(
          <Modal dismissible show={openModal  === item.id} onClose={() => setOpenModal(null)}>
       
      <img src={item.path} alt={item.alt} className="w-full h-auto" />
   
      </Modal>
        )
      })}
    </section>

    </>
  )
}
