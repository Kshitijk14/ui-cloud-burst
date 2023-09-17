import React from "react";
import { useState } from "react";

import { close, logoby, menu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full flex py-6 justify-between items-center navbar`}>

      {/* Navbar Img */}
      <img src={logoby} alt="Cloudy" className="w-[124px] h-[32px]" />
      {/* Navbar Img */}

      {/* Desktop View */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li
          key="home"
          className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${
            active === 'Home' ? 'text-white' : 'text-dimWhite'
          }`}
          onClick={() => setActive('Home')}
        >
          <a href="#home">Home</a>
        </li>
        <li
          key="about"
          className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${
            active === 'About' ? 'text-white' : 'text-dimWhite'
          }`}
          onClick={() => setActive('About')}
        >
          <a href="#about">About</a>
        </li>
        <li
          key="product"
          className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${
            active === 'Product' ? 'text-white' : 'text-dimWhite'
          }`}
          onClick={() => setActive('Product')}
        >
          <a href="#product">Product</a>
        </li>
        <li
          key="pre-save"
          className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 ${
            active === 'Pre-Save' ? 'text-white' : 'text-dimWhite'
          }`}
          onClick={() => setActive('Pre-Save')}
        >
          <a href="pre-save">Pre-Save</a>
        </li>
      </ul>
      {/* Desktop View */}

      {/* Mobile View */}
      <div className="sm:hidden flex flex-1 justify-end items-center">

        {/* ... Mobile menu button */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        {/* ... Mobile menu button */}

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li
              key="home"
              className={`font-poppins font-medium cursor-pointer text-[16px] mb-4 ${
                active === 'Home' ? 'text-white' : 'text-dimWhite'
              }`}
              onClick={() => setActive('Home')}
            >
              <a href="#home">Home</a>
            </li>
            <li
              key="about"
              className={`font-poppins font-medium cursor-pointer text-[16px] mb-4 ${
                active === 'About' ? 'text-white' : 'text-dimWhite'
              }`}
              onClick={() => setActive('About')}
            >
              <a href="#about">About</a>
            </li>
            <li
              key="product"
              className={`font-poppins font-medium cursor-pointer text-[16px] mb-4 ${
                active === 'Product' ? 'text-white' : 'text-dimWhite'
              }`}
              onClick={() => setActive('Product')}
            >
              <a href="#product">Product</a>
            </li>
            <li
              key="pre-save"
              className={`font-poppins font-medium cursor-pointer text-[16px] mb-4 ${
                active === 'Pre-Save' ? 'text-white' : 'text-dimWhite'
              }`}
              onClick={() => setActive('Pre-Save')}
            >
              <a href="pre-save">Pre-Save</a>
            </li>
          </ul>
        </div>

      </div>
      {/* Mobile View */}

    </nav>
  );
};

export default Navbar;
