import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SliderStyle.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const Slider = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="max-[450px]:p-3 md:p-3"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper lg:max-w-full  md:max-w-screen-md sm:max-w-screen-sm  
                rounded-xl"
      >
        <SwiperSlide>
          <img
            className="z-[1]"
            src="https://i.ibb.co/pQY8gVF/banner01.webp"
            alt=""
          />
          {/* <div className="z-[2] absolute  max-w-xs rounded-md shadow-md bg-gradient-to-r from-purple-500 to-pink-500">
                        <div className="flex flex-col justify-between p-6 space-y-8 text-white">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Want To Explore?</h2>
                            </div>
                            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Log in</button>
                        </div>
                        
                    </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src=" https://i.ibb.co/ZG3RxGb/time-traveler-drawing-ideas.jpg"
            alt=""
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/0Y8Nqnx/banner05.webp" alt="" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/1b1d2KC/original.jpg" alt="" />{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
