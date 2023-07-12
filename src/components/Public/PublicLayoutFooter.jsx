import React from "react";
import {PiNotepad} from 'react-icons/pi'
import {BsTelephone} from 'react-icons/bs'
import  LinkedIn  from "../../assets/icons/Linkedin.png";
import Instagram from "../../assets/icons/Instagram.png"
import Twitter from "../../assets/icons/Twitter.png"

const PublicLayoutFooter = () => {
  return (
    <div className="bg-[#000719] text-white md:pt-10 lg:pt-12 pb-11 text-start">
      <div className="grid grid-cols-2 md:grid-cols-4 w-full">
        <div className="w-full md:pl-10 lg:pl-16 flex">
          <div className="">
            <p className="text-[16px] font-medium cursor-pointer hover:underline decoration-[#E36B08]">
              Company
            </p>
            <p className="mt-3 cursor-pointer text-left ml-1 hover:text-[#E36B08]">
              Home
            </p>
            <p className="mt-2.5 cursor-pointer text-left ml-1 hover:text-[#E36B08]">
              Pricing
            </p>
            <p className="mt-2.5 cursor-pointer text-left ml-1 hover:text-[#E36B08]">
              Blog
            </p>
          </div>
        </div>
        {/* support */}
        <div className="w-full pl-4 lg:pl-8 flex">
          <div className="">
            <p className="text-[16px] font-medium cursor-pointer hover:underline decoration-[#E36B08] text-left">
              Support
            </p>
            <p className="mt-3 cursor-pointer text-left ml-1 hover:text-[#E36B08]">
              Help Center
            </p>
            <p className="mt-2 cursor-pointer text-left ml-1 hover:text-[#E36B08]">
              FAQS
            </p>
          </div>
        </div>
        {/* legal */}
        <div className="w-full pl-4 lg:pl-8 flex">
          <div className="">
            <p className="text-[16px] font-medium cursor-pointer hover:underline decoration-[#F15A24] text-left">
              Legal
            </p>
            <p className="mt-3 cursor-pointer text-left ml-1 hover:text-[#F15A24]">
              Privacy Policy
            </p>
            <p className="mt-2 cursor-pointer text-left ml-1 hover:text-[#F15A24]">
              Terms of Service
            </p>
          </div>
        </div>
        {/* contact us */}
        <div className="w-full md:pl-4 lg:pl-8 flex">
          <div className="w-full">
            <p className="text-[16px] font-medium cursor-pointer decoration-[#E36B08] text-left">
              Kindly
            </p>
            <div className="md:w-full md:pr-3 lg:p-0 lg:w-[90%]">
              <button className="md:text-sm lg:text-base bg-[#F15A24] border-2 border-transparent justify-center text-white w-full flex py-[9px] items-center transition-colors duration-500 rounded-lg mt-2.5 hover:bg-transparent hover:border-[#f15a24] pr-1">
                <PiNotepad className="text-lg justify-center lg:ml-4 lg:mr-1 " /> SCHEDULE CONSULTATION
              </button>
              <button className="bg-transparent border-2 border-[#F15A24] text-white justify-center w-full flex py-[9px] items-center rounded-lg transition-colors duration-500 mt-3 hover:border-[#fff] md:pr-2">
                <BsTelephone className="text-lg mr-2" />
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="mt-4 flex justify-between">
        <span className="ml-16 cursor-pointer text-[15px]">
          © 2023 Nimblish. All rights reserved
        </span>
        {/* socials */}
        <div className="flex md:mr-5 mt-1">
          <img src={LinkedIn} alt="" className="h-5 mr-5 cursor-pointer" />
          <img src={Instagram} alt="" className="h-5 mr-5 cursor-pointer" />
          <img src={Twitter} alt="" className="h-6 mr-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default PublicLayoutFooter;
