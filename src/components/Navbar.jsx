import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/index";
import { logo, menu, close } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed
    top0 z-20 bg-gradient-to-r from-purple-500 to-black`}
    >
      <div
        className="w-full flex justify-between items-center  
      max-w-7xl mx-auto"
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-[70px] h-[35px] object-contain"
          ></img>
          <p className="text-white text-[20px] font-bold cursor-pointer">
            Ali Murad |
            <span className="sm:block  text-pink-500 text-[15px]">
              MERN Stack Developer
            </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-pink-600" : "text-gray-300"
              } hover:text-white text-[18px]
                font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}> {link.title} </a>
            </li>
          ))}
        </ul>
        <div
          className="sm:hidden flex flex-1
        justify-end items-center"
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain
          cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          {/* div for mobile sidebar toggle */}
          <div
            className={`${!toggle ? "hidden" : "flex"}
          p-6 bg-gradient-to-r from-purple-700 to-black absolute top-20 right-0
          mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            {/* ul code for mobile devices */}
            <ul
              className="list-none flex justify-end items-start flex-col
            gap-4"
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-pink-600 font-extrabold"
                      : "text-gray-200"
                  } font-poppins font-medium cursor-pointer text-[16px] 
                  
                   `}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}> {link.title} </a>
                </li>
              ))}
            </ul>
          </div>
          {/*End of div for mobile sidebar toggle   */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
