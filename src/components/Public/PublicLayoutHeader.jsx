import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import { AiFillCaretDown } from "react-icons/ai";

const PublicLayoutHeader = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="fixed flex items-center w-full h-[62px] bg-gradient-to-r from-slate-200  via-slate-100 to-[#e36a08d6] top-0 z-20 inset-0 bg-blur bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="flex ml-8 h-full items-center lg:mr-14">
  <img
    src={logo}
    className="h-1 md:h-9 lg:h-11 z-20 m-3 lg:px-9 cursor-pointer"
    alt=""
  />
</div>

      {/* dropdown */}
      <div
        className="px-3 ml-3 h-7 mt-[1px]"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {/* Dropdown content */}
        <div
          className="px-3 ml-16 h-7 mt-[1px]"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <button className="flex items-center outline-none focus:outline-none mb-1 text-[#4F4F4F] font-semibold">
            Products
            <AiFillCaretDown
              className={`mt-1 ml-1.5 transform text-[#4F4F4F] ${
                isHovered ? "rotate-180" : ""
              } transition-transform duration-200`}
            />
          </button>
          {isHovered && (
            <div
              className="text-center bg-slate-100 w-auto justify-center absolute transform transition-all duration-200"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <ul className="rounded-md px-0 text-left min-w-[95px] pb-1">
                <li className="cursor-pointer hover:bg-slate-300 px-2.5 text-[15px] text-black mb-[2px]">
                  Product 1
                </li>
                <li className="cursor-pointer hover:bg-slate-300 px-2.5 text-[15px] text-black mb-[2px]">
                  Product 2
                </li>
                <li className="cursor-pointer hover:bg-slate-300 px-2.5 text-[15px] text-black mb-[2px]">
                  Product 3
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <button className="bg-transparent px-5 ml-2 text-[#4F4F4F] hover:text-black decoration-[#E36B08] hover:underline font-semibold">
        About
      </button>
      <button className="bg-transparent px-6 text-[#4F4F4F] hover:text-black decoration-[#E36B08] hover:underline font-semibold">
        FAQ
      </button>

      {/* login / sign-up */}
      <div className="ml-auto">
        <div className="md:w-[180px] flex justify-around h-auto md:mr-8 lg:mr-12">
          <button className="text-white bg-transparent text-base decoration-[#E36B08] hover:underline mr-2">
            Login
          </button>
          <button className="px-6 py-[4.8px] flex items-center justify-center text-white rounded-full h-auto bg-[#E36B08] hover:bg-gradient-to-r hover:from-[#E36B08] hover:via-[#c12323] hover:to-[#9c3f17] hover:px-5.5 transition-all duration-400">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicLayoutHeader;
