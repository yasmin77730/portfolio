import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
          {/* Location Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold">LOCATION</h2>
            <p className="mt-2">
              2215 John Daniel Drive
              <br />
              Clark, MO 65243
            </p>
          </div>

          {/* Social Media Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold">AROUND THE WEB</h2>
            <div className="flex justify-center md:justify-start mt-2 space-x-4">
              <a href="#" className="hover:text-teal-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-teal-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-teal-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-teal-300">
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold">ABOUT FREELANCER</h2>
            <p className="mt-2">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route.
            </p>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="mt-6 text-center text-sm border-t border-gray-700 pt-4">
          Copyright &copy; Your Website 2021
        </div>
      </div>
    </footer>
    </>
  )
}
