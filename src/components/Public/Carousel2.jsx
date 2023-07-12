import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import profile1 from "../../assets/icons/profile1.png";
import profile2 from "../../assets/icons/profile2.png";
import profile3 from "../../assets/icons/profile3.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Slider2 = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      // pagination={false}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      // className=""
      className="px-12 mt-6 mySwiper"
    >
      <SwiperSlide className="bg-[#0E185F] text-white mx-auto flex rounded-xl">
        <div className="bg-inherit w-full rounded-xl border-[1.4px] border-gray-300 py-6 mx-auto font-poppins">
          <div className="flex  h-full px-4">
            <img src={profile3} className="h-16" alt="" />
            <div className="pl-4 h-full">
              <p>Sarah Leah</p>
              <p className="text-gray-400 text-[13px]">@SarahLeah</p>
              <p className="mt-5 leading-6 text-[14px]">
                Nimblish is one of the best place to safely get reward for your
                knowledge.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[#1F7996] rounded-xl">
        {/* <SwiperCard /> */}
        <div className="bg-inherit w-full rounded-xl border-[1.4px] border-gray-300 py-6 mx-auto font-poppins">
          <div className="flex  h-full px-4">
            <img src={profile2} className="h-16" alt="" />
            <div className="pl-4 h-full text-white">
              <p>Jessica Joe</p>
              <p className="text-gray-100 text-[13px]">@JJessica__</p>
              <p className="mt-5 leading-6 text-[14px]">
                Nimblish is one of the best place to safely get reward for your
                knowledge.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[#6F451F] rounded-xl">
        {/* <SwiperCard /> */}
        <div className="bg-inherit w-full rounded-xl border-[1.4px] border-gray-300 py-6 mx-auto font-poppins">
          <div className="flex  h-full px-4">
            <img src={profile1} className="h-16" alt="" />
            <div className="pl-4 h-full text-white">
              <p>Jessica Joe</p>
              <p className="text-gray-100 text-[13px]">@JJessica__</p>
              <p className="mt-5 leading-6 text-[14px]">
                Nimblish is one of the best place to safely get reward for your
                knowledge.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>{" "}
      <SwiperSlide className="bg-white mx-auto flex rounded-xl">
        <div className="bg-inherit w-full rounded-xl border-[1.4px] border-gray-300 py-6 mx-auto font-poppins">
          <div className="flex  h-full px-4">
            <img src={profile3} className="h-16" alt="" />
            <div className="pl-4 h-full">
              <p>Sarah Leah</p>
              <p className="text-gray-400 text-[13px]">@SarahLeah</p>
              <p className="mt-5 leading-6 text-[14px]">
                Nimblish is one of the best place to safely get reward for your
                knowledge.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider2;
