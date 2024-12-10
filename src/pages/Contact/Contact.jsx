import React from 'react'

export default function Contact() {
  return (
    <>

<section id="contact" className="py-10 bg-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold uppercase pt-10">conatct section</h2>
        <div className="flex justify-center items-center mt-4">
          <span className="block w-12 h-1 bg-gray-800"></span>
          <i className="fas fa-star mx-4 text-2xl text-gray-800"></i>
          <span className="block w-12 h-1 bg-gray-800"></span>
        </div>
        <form className=" p-6  rounded-md">
          <div className="mb-4">
            <input
              type="text"
              name="userName"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="userName"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              name="userAge"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="userAge"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="userEmail"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="userEmail"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="userPassword"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="userPassword"
            />
          </div>
          <button
            type="submit"
            className=" bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
          >
            send Message
          </button>
        </form>
      </div>
    </section>
    </>
  )
}
