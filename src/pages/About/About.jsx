import React from 'react'

export default function About() {
  return (
  <>
   <section className="bg-teal-500 text-white py-36">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold uppercase">About Component</h2>
        <div className="flex justify-center items-center mt-4">
          <span className="block w-12 h-1 bg-white"></span>
          <i className="fas fa-star mx-4 text-2xl"></i>
          <span className="block w-12 h-1 bg-white"></span>
        </div>
        <div className="mt-8 w-[950px] mx-auto grid md:grid-cols-2 gap-8 text-sm md:text-base">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </section>
  </>
  )
}
