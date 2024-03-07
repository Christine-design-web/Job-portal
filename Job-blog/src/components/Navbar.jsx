import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
 
  };
  const navItems = [
    {path: "/", title: "Start a search"},
    {path: "/my-Job", title: "My-Jobs"},
    {path: "/salary", title: "Salary Estimated"},
    {path: "/post-job", title: "Post A Job"},
  ]
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className='flex justify-between items-center'>
        <a href="/" className="flex items-center gap-0 text-2xl text-black">
         <img src="./images/job logo.jpg" alt="Logo of my website" className="size-20"></img>
          <span>Portal</span>
        
        </a>
        {/* nav items for large devices */}
        <ul className="md:flex gap-12 hidden">
          {
            navItems.map(({path, title}) => (
              <li key={path} className="text-base text-primary">
                <NavLink
                    to={path}
                    className={({ isActive }) => 
                      isActive ? "active" : ""
                    }
                  >
                    {title}
                  </NavLink>
              </li>
            ) )
          }
        </ul>

{/* sign up and login button */}
        <div className="text-base text-primary font-medium space-x-2 lg:block">
          <NavLink to="/login"className="py-2 px-5 border rounded   text-black">Log in</NavLink> {/* Corrected: Use NavLink for navigation */}
          <NavLink to="/signup" className="py-2 px-5 border rounded  bg-blue text-white">Sign Up</NavLink> {/* Corrected: Use NavLink for navigation */}
          
        </div>
        {/* mobile menu */}
        <div className='md:hidden block'>
          <button onClick={handleMenuToggler}>
            {
              isMenuOpen ? <FaXmark className="w-5 h-5 text-primary"/> : <FaBarsStaggered className="w-5 h-5 text-primary"/>
            }
          </button>
        </div>
      </nav>

      {/* navitems for mobile */}
      {isMenuOpen && (
  <div className="px-5 bg-black rounded-sm">
    <ul>
      {navItems.map(({ path, title }) => (
        <li key={path} className="text-base text-white first:text-white py-2">
          <NavLink
            to={path}
            className={({ isActive }) => (isActive ? "active" : "text-white")}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
)}

    </header>
  )
}

export default Navbar