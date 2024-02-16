import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="shadow sticky z-10 top-0" style={{ backgroundColor: "red" }}>
      <nav className="bg-slate-100 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            
            <img
              src="https://ik.imagekit.io/gupta/logo2_O3AnU9JXX?updatedAt=1704709820354"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div
            className={`lg:hidden ${
              mobileMenuOpen ? "block" : "hidden"
            } fixed top-0 left-0 w-full h-full bg-white`}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={toggleMobileMenu}
            >
              &times;
            </button>
            {/* Mobile menu content */}
            <ul className="flex flex-col mt-4 font-medium">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pr-4 pl-3 duration-200 text-gray-700 hover:bg-gray-50 border-b border-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 pr-4 pl-3 duration-200 text-gray-700 hover:bg-gray-50 border-b border-gray-100"
                  onClick={toggleMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project"
                  className="block py-2 pr-4 pl-3 duration-200 text-gray-700 hover:bg-gray-50 border-b border-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Project
                </NavLink>
              </li>
            
              <li>
                <NavLink
                  to="/resume"
                  className="block py-2 pr-4 pl-3 duration-200 text-gray-700 hover:bg-gray-50 border-b border-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="block py-2 pr-4 pl-3 duration-200 text-gray-700 hover:bg-gray-50 border-b border-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className="block py-2 pr-4 pl-3 duration-200 text-gray-700 hover:bg-gray-50 border-b border-gray-100"
                  onClick={toggleMobileMenu}
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Hamburger button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            &#9776;
          </button>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Project
                </NavLink>
                
              </li>
              <li>
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
