import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutCard from "@/components/AboutCard/AboutCard";
import AboutGrid from "@/components/AboutGrid/AboutGrid";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] m-auto flex flex-col gap-28 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div className="bg-[#007580] md:h-[478px] h-[387px] flex items-center justify-center text-white">
            <div className="w-[80%] h-[80%] flex flex-col justify-between">
              <div>
                <h2 className="md:text-[32px] text-2xl font-bold">
                  About Us - Comforty
                </h2>
                <p className="md:text-lg text-sm mt-3">
                  At Comforty, we believe that the right chair can transform
                  your space and elevate your comfort. Specializing in ergonomic
                  design, premium materials, and modern aesthetics, we craft
                  chairs that seamlessly blend style with functionality.{" "}
                </p>
              </div>
              <Link href="#shop">
                <button className=" rounded overflow-hidden flex items-center justify-around gap-3 bg-primary text-sm  w-[171px] h-[52px]">
                  View Collection
                </button>
              </Link>
            </div>
          </div>

          <div className="w-auto md:h-[478px] h-[387px] relative">
            <Image
              src="/images/abouthero.png"
              alt="/"
              fill
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <h2 className="text-accentBlack text-[32px] font-semibold">
            What Makes Our Brand different
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <AboutCard
              icon="/images/delivery.png"
              heading="Next day as standard"
              para="Order before 3pm and get your order the next day as standard"
            />
            <AboutCard
              icon="/images/mark.png"
              heading="Made by true artisans"
              para="Handmade crafted goods made with real passion and craftmanship"
            />
            <AboutCard
              icon="/images/card.png"
              heading="Unbeatable prices"
              para="For our materials and quality you will not find better prices anywhere"
            />
            <AboutCard
              icon="/images/sprout.png"
              heading="Recycled packaging"
              para="We use 100% recycled to ensure our footprint is more manageable"
            />
          </div>

          <div className="w-full flex flex-col gap-8 my-20">
            <h2 className="text-accentBlack text-[32px] font-semibold">Our Popular Products</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 ">
                <div className="md:col-span-2"><AboutGrid image="/images/large.png" name="The Poplar suede sofa"/></div>
                <div className="col-span-1"><AboutGrid image="/images/aboutimg2.png" name="The Poplar suede sofa"/></div>
                <div className="col-span-1"><AboutGrid image="/images/aboutimg3.png" name="The Poplar suede sofa"/></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default page;
