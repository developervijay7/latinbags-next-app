import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Free Shipping",
    description: "On all orders above ₹500",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Easy Returns",
    description: "Return within 7 days",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "Secure Payments",
    description: "100% safe & encrypted",
  },
  {
    img: "/images/icons/icon-04.svg",
    title: "24/7 Customer Support",
    description: "We are here for you",
  },
];

const HeroFeature = () => {
  return (
      <div className="max-w-[1060px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap items-center gap-7.5 xl:gap-12.5 mt-10">
          {featureData.map((item, key) => (
              <div className="flex items-center gap-4" key={key}>
                <Image src={item.img} alt={item.title} width={40} height={41} />

                <div>
                  <h3 className="font-medium text-lg text-dark">{item.title}</h3>
                  <p className="text-sm text-dark-4">{item.description}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default HeroFeature;