
import Navbar from './components/Navbar/Navbar'
import  { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'

 function App() {
 
let x= createBrowserRouter([
  {path:'' ,element:<Layout/>, children: [{index:true , element:<Home/>},
    {path:'about' , element:<About/>},
    {path:'portfolio' , element:<Portfolio/>},
  {path:'contact' , element:<Contact/>}
  
  ]},])

  return (
  <RouterProvider router={x}></RouterProvider>

    
  )
}

export default App
