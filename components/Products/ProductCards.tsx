import React from "react";
import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";

interface CardProps {
  image: string;
  tag?: string;
}

const ProductCards: React.FC<CardProps> = ({ image, tag }) => {
  return (
    <div>
      <div className="relative w-auto h-[312px] rounded-xl overflow-hidden hover:shadow-lg">
        <Image
          src={image}
          alt="chair"
          fill
          objectFit="cover"
          objectPosition="center"
        />
        {tag && (
          <div className="px-4 py-2 w-14 text-center left-5 top-5 bg-[#01AD5A] absolute text-xs font-medium text-white rounded">
            {tag}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-5">
        <div className="flex flex-col ">
          <h2 className="text-primary text-[16px]">Library Stool Chair</h2>
          <h2 className="text-accentBlack text-[18px] font-semibold">$20</h2>
        </div>
        <div className="w-11 h-11 bg-light cursor-pointer overflow-hidden rounded flex items-center justify-center hover:bg-primary hover:text-white text-accentBlack">
          <Link href="/singleproduct">
            <LuShoppingCart className=" w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
