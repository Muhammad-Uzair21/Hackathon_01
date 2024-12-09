import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-screen border border-t flex flex-col gap-8 bottom-0 pt-14">
      <div className="w-[90%] m-auto">
        <div className="w-full grid gap-y-12 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {/*first column*/}
          <div className="flex flex-col items-center md:items-start gap-5 col-span-2">
            <div className="flex items-center gap-2">
              <span className="relative md:h-10 md:w-10 h-8 w-8">
                <Image
                  src="/images/Logo.png"
                  alt="Logo"
                  fill
                  objectFit="contain"
                ></Image>
              </span>
              <span className="text-secondary md:text-[26px] text-[20px] font-semibold">
                Comforty
              </span>
            </div>

            <div className="w-[75%]">
              <p className="text-sm text-secondary text-opacity-60">
                Vivamus tristique odio sit amet velit semper, eu posuere turpis
                interdum. Cras egestas purus{" "}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-[38px] h-[38px] rounded-full border-2 border-transparent flex items-center justify-center hover:border-primary">
                <FaFacebook className="w-4 h-4 text-dark hover:text-primary" />
              </span>
              <span className="w-[38px] h-[38px] rounded-full border-2 border-transparent flex items-center justify-center hover:border-primary">
                <FaTwitter className="w-4 h-4 text-dark hover:text-primary" />
              </span>
              <span className="w-[38px] h-[38px] rounded-full border-2 border-transparent flex items-center justify-center hover:border-primary">
                <FaInstagram className="w-4 h-4 text-dark hover:text-primary" />
              </span>
              <span className="w-[38px] h-[38px] rounded-full border-2 border-transparent flex items-center justify-center hover:border-primary">
                <FaYoutube className="w-4 h-4 text-dark hover:text-primary" />
              </span>
            </div>
          </div>

          {/*2nd column*/}
          <div className="flex flex-col gap-3 col-span-1">
            <h2 className="text-[14px] font-medium text-[#9a9caa]">CATEGORY</h2>
            <div className="flex flex-col gap-2 text-black text-sm">
              <span className="underline underline-offset-2 cursor-pointer decoration-transparent hover:decoration-primary hover:text-primary">
                Sofa
              </span>
              <span className="underline underline-offset-2 cursor-pointer decoration-transparent hover:decoration-primary hover:text-primary">
                Arm Chair
              </span>
              <span className="underline underline-offset-2 cursor-pointer decoration-transparent hover:decoration-primary hover:text-primary">
                Wind Chair
              </span>
              <span className="underline underline-offset-2 cursor-pointer decoration-transparent hover:decoration-primary hover:text-primary">
                Desk Chair
              </span>
              <span className="underline underline-offset-2 cursor-pointer decoration-transparent hover:decoration-primary hover:text-primary">
                wooden Chair
              </span>
              <span className="underline underline-offset-2 cursor-pointer decoration-transparent hover:decoration-primary hover:text-primary">
                Park Bench
              </span>
            </div>
          </div>

          {/*3rd column*/}
          <div className="flex flex-col  gap-3 col-span-1">
            <h2 className="text-[14px] font-medium text-[#9a9caa]">SUPPORT</h2>
            <div className="flex flex-col gap-2 text-black text-sm">
              <span className="underline underline-offset-2 cursor-pointer decoration-transparent hover:decoration-primary hover:text-primary">
                Help & Support
              </span>
              <span className="underline underline-offset-2 cursor-pointer decoration-transparent hover:decoration-primary hover:text-primary">
                Terms & Conditions
              </span>
              <span className="underline underline-offset-2 cursor-pointer decoration-transparent hover:decoration-primary hover:text-primary">
                Privacy Policy
              </span>
              <span className="underline underline-offset-2 cursor-pointer decoration-transparent hover:decoration-primary hover:text-primary">
                Help
              </span>
            </div>
          </div>

          {/*4th column*/}
          <div className="flex flex-col gap-3 col-span-2 items-center md:items-start">
            <h2 className="text-[14px] font-medium text-[#9a9caa]">
              NEWSLETTER
            </h2>
            <span className="w-full h-[46px] flex items-center gap-5">
              <span className="w-full border h-full rounded-md">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="text-sm text-[#9a9caa] w-full h-full px-2"
                />
              </span>
              <span className="bg-primary text-white h-full flex items-center justify-center rounded-md">
                <button className="px-6 rounded-md bg-none text-semibold text-sm">
                  Subscribe
                </button>
              </span>
            </span>
            <p className="text-sm text-secondary text-opacity-60">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>

      <div className="border border-t w-full">
        <div className="py-6 m-auto w-[90%] flex md:flex-row flex-col gap-y-5 items-center justify-between">
          <div>
            <h2 className="md:text-sm text-xs text-[#9a9caa]">
              @ 2021 - Blogy - Designed & Develop by{" "}
              <span className="text-accentBlack">Zakirsoft</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 opacity-65">
            <span className="relative h-[36px] w-[23px]">
              <Image
                src="/images/mastercard.png"
                alt="/"
                fill
                objectFit="contain"
                objectPosition="center"
              ></Image>
            </span>
            <span className="relative h-[14px] w-[56px]">
              <Image
                src="/images/paypal.png"
                alt="/"
                fill
                objectFit="contain"
                objectPosition="center"
              ></Image>
            </span>
            <span className="relative h-[27px] w-[50px]">
              <Image
                src="/images/american.png"
                alt="/"
                fill
                objectFit="contain"
                objectPosition="center"
              ></Image>
            </span>
            <span className="relative h-[18px] w-[55px]">
              <Image
                src="/images/visa.png"
                alt="/"
                fill
                objectFit="contain"
                objectPosition="center"
              ></Image>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
