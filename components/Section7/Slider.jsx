/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
// import "swiper/swiper.css";
import 'swiper/swiper.min.css'
// import "swiper/css/navigation";


SwiperCore.use([Navigation]);

const Slider = ({ children }) => {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [params, setParams] = useState({
    navigation: {
      nextEl: ".swiper-button-next7",
      prevEl: ".swiper-button-prev7",
    },
    slidesPerView: slidesPerView,
    spaceBetween: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1600) {
        setSlidesPerView(2);
      } else if (windowWidth >= 1366 &&  windowWidth >= 930) {
        setSlidesPerView(2);
      } else if (windowWidth < 930 && windowWidth >=540) {
        setSlidesPerView(1);
      }
        else if (windowWidth < 540) {
          setSlidesPerView(1);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // set initial value on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setParams((prevParams) => ({
      ...prevParams,
      slidesPerView,
    }));
  }, [slidesPerView]);

  return (
    <div className="flex py-4 items-start px-8 mt-10">
      <div className="flex flex-col justify-start w-[500px] h-full items-center ">
        <div className="w-full ">
          <div className=" text-[11px] tracking-[3px]">LATEST AT SERVAID</div>
          <div className=" text-[26px] text-[#0065AB] my-3">News and Stories</div>
          <div className=" text-[12px] tracking-[2px] ">Discover the latest from Servaid’s world and beyond. News and stories covering investment and results, sustainability, social impact, innovation, our people and more.

        </div>
        </div>

        <div className=" flex items-center mt-10">
          <div className="w-20 ">
            <img src="/assets/Section1/Left.png" alt="" className="swiper-button-prev7" />
          </div>
          <div className="w-20 ">
          <img src="/assets/Section1/Right.png" alt="" className="swiper-button-next7" />
          </div>
        </div>
      </div>
      <Swiper {...params}>
        {children.map((child, i) => (
          <SwiperSlide key={i}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
