import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CraftItemCard from "../CraftItemCard/CraftItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  EffectCoverflow,
  Autoplay,
  Navigation,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CraftItem.css";

const CraftItem = () => {
  const [loading, setLoading] = useState(true);
  const loadeItems = useLoaderData();

  useEffect(() => {
    if (loadeItems) {
      setLoading(false);
    }
  }, [loadeItems]);

  return (
    <div className="p-5 ">
      <h2 className="font-bold text-3xl text-center mb-4">Our Craft Items</h2>

      <div className="text-center md:flex md:justify-center md:items-center">
        <div className="md:w-8/12 mb-4">
          Craft items include woodworking, needlework, and digital design,
          created with tools like needles, paper, or software. These handmade
          pieces, such as knitted scarves or wooden sculptures, reflect the
          maker's skill and creativity, adding a personal touch to homes.
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <Swiper
          autoplay={{
            delay: 3000, // 1000 milliseconds = 1 second
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={"true"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="mySwiper"
        >
          {loadeItems &&
            loadeItems.map((item) => (
              <SwiperSlide>
                <CraftItemCard
                  key={item._id}
                  item={item}
                  items={loadeItems}
                  setItems={() => {}}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

export default CraftItem;
