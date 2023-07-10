import Link from "next/link";
import React from "react";

const Navbar = () => {
  
  return (
    <div className="mt-5">
      <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
        <div>
          <Link href="/" className="font-bold text-2xl">Raojan Groceries</Link>
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            class="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
        <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul className="flex pt-4 text-base text-gray-700 md:justify-between md:pt-0">
            {/* Commented out the original list items */}
            {/* <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                Customers
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                Blog
              </a>
            </li> */}
            {/* New list items */}
            <li className="md:p-4 py-2">
              <Link
                className="block hover:text-purple-400 text-purple-500"
                href="/about"
              >
                About
              </Link>
            </li>
            <li className="md:p-4 py-2">
              <Link
                className="block hover:text-purple-400 text-purple-500"
                href="/review"
              >
                Review
              </Link>
            </li>
            <li className="md:p-4 py-2">
              <Link
                className="block hover:text-purple-400 text-purple-500"
                href="/signup"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
