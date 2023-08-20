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
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
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
        setSlidesPerView(6);
      } else if (windowWidth >= 1366 &&  windowWidth >= 1000) {
        setSlidesPerView(5);
      } else if (windowWidth < 1000 && windowWidth >=700) {
        setSlidesPerView(4);
      }
      else if (windowWidth < 700 && windowWidth >=580) {
        setSlidesPerView(3);
      }    
        else if (windowWidth < 540) {
          setSlidesPerView(2);
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
    <>
      <div className="flex justify-around w-full align-center mt-10 mb-3">
        <div className="w-full ml-10">
          <div className=" text-[11px] tracking-2px">MEDICINE FOR YOU</div>
          <div className=" text-[26px] text-[#0065AB] my-3">Explore our product range</div>
          <div className=" text-[12px] tracking-[2px] underline">VIEW ALL PRODUCTS</div>
        </div>

        <div className=" flex justify-end mr-10">
          <div className="w-20 ">
            <img src="/assets/Section1/Left.png" alt="" className="swiper-button-prev1" />
          </div>
          <div className="w-20">
          <img src="/assets/Section1/Right.png" alt="" className="swiper-button-next1" />
          </div>
        </div>
      </div>
      <Swiper {...params}>
        {children.map((child, i) => (
          <SwiperSlide key={i}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
