import Home from "../../pages/Home/Home"
import { NavLink } from "react-router-dom"
export default function Navbar(){
    return (
        <>


<nav className="w-full bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="/" className="text-lg font-bold">
          START FRAMEWORK
            </a>
          <div className="space-x-4">
           <ul className="flex  justify-between items-center px-9">
            <li className="px-5"> <NavLink to="about" className="hover:text-teal-300">
              About
            </NavLink></li>
            <li className="px-5"> <NavLink to="portfolio" className="hover:text-teal-300">
              Portfolio
            </NavLink></li>
            <li className="px-5"><NavLink to="contact" className="hover:text-teal-300">
              Contact
            </NavLink></li>
           
           
            
           </ul>
          </div>
        </div>
      </nav>
        </>
    )
}