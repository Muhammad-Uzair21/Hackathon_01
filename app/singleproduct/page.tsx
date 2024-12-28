import React from "react";
import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";
const page = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] m-auto lg:py-28 py-16 mb-10">
        <div className="w-full flex flex-col items-center lg:flex-row lg:gap-10 gap-5 h-[610px]">
          <div className="relative lg:w-[50%] lg:h-full w-full h-[50%] ">
            <Image src="/images/pinkchair.png" alt="/" fill objectFit="cover" />
          </div>

          <div className="flex flex-col lg:gap-12 gap-7 lg:w-[50%] w-full h-[50%]">
            <div className="flex flex-col lg:gap-7 gap-4">
              <h2 className="text-accentBlack font-bold lg:text-6xl text-3xl">
                Library Stool Chair
              </h2>
              <span className="bg-primary text-white font-semibold lg:text-xl text-sm lg:py-1 py-2 text-center  rounded-full w-[30%] lg:w-[25%]">
                $20.00 USD
              </span>
            </div>

            <hr className="text-[#D9D9D9]" />

            <div className="flex flex-col lg:gap-7 gap-4 w-[95%]">
              <p className="lg:text-[22px] text-sm text-accentBlack/60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
                adipiscing
              </p>
              <button className="bg-primary flex items-center justify-center gap-2 text-white font-semibold text-sm lg:text-xl lg:py-3 py-2 text-center  rounded w-[35%]">
                <span><LuShoppingCart /></span>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
