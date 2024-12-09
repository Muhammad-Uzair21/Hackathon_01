import React from "react";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import Companies from "./Companies";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="md:w-[90%] w-full m-auto bg-light rounded-bl-[100px] overflow-hidden">
        <div className="w-[90%] m-auto py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-16">
            <div className="flex flex-col text-accentBlack gap-8">
              <p className="uppercase text-sm">Welcome to Chairy</p>
              <h2 className="md:text-6xl text-4xl font-bold">
                Best Furniture Collection for your interior.
              </h2>
              <Link href="#shop">
                <button className=" rounded overflow-hidden flex items-center justify-around gap-3 bg-primary text-sm text-white w-[171px] h-[52px]">
                  Shop Now
                  <span>
                    <HiArrowNarrowRight className="w-5 h-5" />
                  </span>
                </button>
              </Link>
            </div>

            <div className="w-auto h-[434px] relative">
              <Image
                src="/images/HeroChair.png"
                alt="hero"
                fill
                objectFit="contain"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <Companies />
    </div>
  );
};

export default Hero;
