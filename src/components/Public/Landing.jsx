import React from "react";
import PublicLayout from "./PublicLayout";
import ellipse from "../../assets/icons/Ellipse.png";
import ellipse2 from "../../assets/icons/Ellipse2.png";
import ellipse3 from "../../assets/icons/Ellipse3.png";
import ellipse4 from "../../assets/icons/Ellipse4.png";
import curve from "../../assets/icons/curve.png";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";

const Landing = () => {
  return (
    <PublicLayout>
      {/* landing page */}
      <section className="h-[100vh] justify-end pt-16 w-full bg-white ">
        {/* top right orange */}
        <div className="relative">
          <div className="justify-end items-end flex">
            {/* Other elements can be placed here */}
          </div>
          <img
            src={ellipse4}
            alt=""
            className="justify-end items-end h-96 absolute -top-12 right-0"
          />
        </div>

        {/* hero */}
        <div className="w-full grid grid-cols-5">
          {/* span 3/5 */}
          <div className="col-span-3 md:px-12 md:pt-12 lg:pt-16 justify-center">
            <h1 className="text-5xl font-darumadrop relative leading-[55px]">
              Get set to rock UNLIMITED <br /> TRIVIA with{" "}
              <span className="text-[#E36B08] relative">
                Nimblish
                <img
                  src={curve}
                  className="absolute left-0 right-0 h-3 w-full bottom-[-2px] rounded-full transform -skew-x-12"
                />
              </span>
            </h1>
            <p className="pt-7">
              Lorem ipsum dolor sit amet consectetur. Dictumst interdum mauris
              at risus faucibus a at. Nullam tortor ultrices blandit eu
              elementum massa faucibus nisi tortor. Viverra. Lorem ipsum dolor
              sit amet consectetur. Dictumst interdum mauris at risus faucibus a
              at. Nullam tortor ultrices blandit eu elementum massa faucibus
              nisi tortor. Viverra.
            </p>
            <button className="bg-[#E36B08] border-2 border-transparent px-12 py-2 text-lg rounded-full mt-6 text-white hover:bg-white hover:border-[#e36b08] hover:text-[#e36b08] transition-colors duration-300">
              Learn more
            </button>
          </div>
          {/* span 2/5 */}
          <div className="col-span-2 z-10">
            <div className="w-full flex items-baseline justify-evenly">
              <img src={ellipse} alt="" className="md:h-48    lg:h-72 mt-6" />
              <img src={ellipse2} alt="" className=" md:h-28 lg:h-44 " />
            </div>
            <div className="flex justify-center">
              <img src={ellipse3} alt="" className=" md:h-36 lg:h-44 " />
            </div>
          </div>
        </div>
      </section>

      {/* who we are */}

      <section className="w-full bg-[#FEFAF7] h-[95vh] flex items-center">
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center">
          {/* cols 1/2 */}
          <div className="relative items-center">
            <p className="font-darumadrop text-[#E36B08] text-4xl text-center relative z-10">
              <span className="justify-start h-1.5 -mt-3 w-12 bg-[#E36B08] absolute top-0 ml-8 transform -translate-x-1/2"></span>
              who we are
            </p>
          </div>
          {/* cols 2/2 */}
          <div>
            <div className="bg-white w-[80%] lg:w-[70%] inline-block px-10 py-12 rounded-md justify-center shadow-sm border border-gray-100">
              <p className="text-center text-[22px] font-poppins">
                OUR MISSION
              </p>
              <p className="text-center mt-3 text-[16.5px] leading-snug font-poppins">
                To provide a platform where users can simultaneously learn and
                earn.
              </p>
              <p className="text-center text-[22px] mt-12 font-poppins">
                OUR VISION
              </p>
              <p className="text-center mt-3 text-[16.5px] leading-snug font-poppins">
                To provide a platform where users can simultaneously learn and
                earn.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About Nimblish */}
      <section className="bg-[#0D1F37] w-full py-10">
        <div className="grid grid-cols-5">
          {/* col 2/5 */}
          <div className="col-span-2">
            <img src={ellipse} alt="" className="h-[420px] w-[420px] ml-16" />
          </div>
          {/* col 3/5 */}
          <div className="col-span-3 pl-12 pr-8 justify-center">
            <p className="font-darumadrop text-5xl text-[#E36B08] ">
              ABOUT NIMBLISH
            </p>
            <p className="font-poppins text-white mt-6 text-[15px]">
              Nimblish is a trivia quiz app for everyone to enjoy, learn, test
              their knowledge and earn rewards on a random variety of topics.
              Join our various sections to accumulate and earn rewards all day
              long. Each section runs for 10mins and contains 10 questions of
              varying topics. Every Nimblish quiz question is expected to run
              for 1 minute after which it automatically switches to the next
              question. Try out our Trivia quizzes and earn some reward.
            </p>

            <p className="text-white mt-7">Get started in 4 simple steps:</p>
            <ul className="text-white list-disc">
              <li className="text-xs">
                <span className="text-base">create an account </span>{" "}
              </li>
              <li className="text-xs">
                <span className="text-base"> load Wallet </span>{" "}
              </li>
              <li className="text-xs">
                <span className="text-base"> answer trivia quizzes </span>{" "}
              </li>
              <li className="text-xs">
                <span className="text-base"> earn fantastic rewards </span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* how does nimblish work */}
      <section className="w-full bg-[#fffffff7] h-[80vh]">
        <p className="font-darumadrop md:text-3xl lg:text-5xl text-center text-[#0D1F37] mt-12">
          How does Nimblish work?
        </p>
        <div className="grid grid-cols-3  md:px-14 lg:px-16 mt-7">
          <div className="col-span-1 h-64 w-5/6 border border-[#d1aea453] shadow-lg shadow-[#ed8a6c53] rounded-lg   ">
            <div className="w-full h-0 border border-red-100 mt-24"></div>
          </div>
          <div className="col-span-1 h-64 w-5/6 border border-[#ed8a6c53] shadow-lg shadow-[#ed8a6c53] rounded-lg "></div>
          <div className="col-span-1 h-64 w-5/6 border border-[#ed8a6c53] shadow-lg shadow-[#ed8a6c53] rounded-lg "></div>
        </div>
      </section>
      {/* what people say about us */}
      <section className="py-14 bg-[#FEF7F1]">
        <div className="relative items-center">
          <div className="relative pt-1 pl-32 pb-5">
            <p className="font-darumadrop text-[#E36B08] text-4xl relative z-10 ml-12">
              <span className="justify-start h-1 w-20 bg-[#E36B08] absolute top-4 -ml-14 transform -translate-x-1/2"></span>
              What People Say About Us
            </p>
          </div>
          {/* carousels */}
          <Carousel />
          <Carousel2 />
        </div>
      </section>

      {/* sign up */}
      <section className="bg-[#ABABAB1A] py-20">
        <div className="w-[70%] pt-10 shadow-lg mt-10 py-7 mx-auto border-t border-gray-150 rounded-lg px-10 flex">
          <div className="w-1/2">
            <p className="font-poppins leading-8 w-full text-2xl">
              Sign up for free. <br /> Play Trivia <br /> Start earning today.
            </p>
            <button className="bg-[#E36B08] text-white py-2.5 text-lg font-poppins px-9 rounded-md mt-8">
              Get Started
            </button>
          </div>
          <div>
            <div className="flex justify-center items ">
              <div className=" border-b-0 border-[1.5px] border-[#FADACD] w-[390px] h-48 rounded-t-full flex justify-center items-baseline overflow-hidden">
                <div className="border-b-0 w-[80%] h-[85%] rounded-t-full border-[1.5px] border-[#FADACD] flex justify-center mt-auto overflow-hidden">
                  <div className="border-b-0 w-[75%] h-[85%] rounded-t-full border-[1.5px] border-[#FADACD] flex justify-center mt-auto">
                    {/* Content inside the innermost semi-circle */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Landing;
