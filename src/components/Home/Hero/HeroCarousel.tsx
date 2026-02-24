"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";

const HeroCarousel = () => {
  return (
      <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="hero-carousel"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
            <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
              <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                25%
              </span>
                <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Off
              </span>
              </div>

              <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
                <a href="#">Premium Leather Backpack</a>
              </h1>

              <p className="text-dark text-sm sm:text-base">
                Stylish and durable leather backpacks perfect for work, travel, and daily use. Prices starting at ₹2,499.
              </p>

              <a
                  href="#"
                  className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
              >
                Shop Now
              </a>
            </div>

            <div>
              <Image
                  src="/images/hero/backpack-01.png"
                  alt="Premium Leather Backpack"
                  width={351}
                  height={358}
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
            <div className="max-w-[394px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
              <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                30%
              </span>
                <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Off
              </span>
              </div>

              <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
                <a href="#">Classic Tote Bag</a>
              </h1>

              <p className="text-dark text-sm sm:text-base">
                Elegant and spacious tote bags for everyday essentials. Starting at ₹1,799 only.
              </p>

              <a
                  href="#"
                  className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
              >
                Shop Now
              </a>
            </div>

            <div>
              <Image
                  src="/images/hero/tote-01.png"
                  alt="Classic Tote Bag"
                  width={351}
                  height={358}
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
            <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
              <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                20%
              </span>
                <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Off
              </span>
              </div>

              <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
                <a href="#">Trendy Sling Bag</a>
              </h1>

              <p className="text-dark text-sm sm:text-base">
                Compact and stylish sling bags for city life. Prices start from ₹999.
              </p>

              <a
                  href="#"
                  className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
              >
                Shop Now
              </a>
            </div>

            <div>
              <Image
                  src="/images/hero/sling-01.png"
                  alt="Trendy Sling Bag"
                  width={351}
                  height={358}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  );
};

export default HeroCarousel;