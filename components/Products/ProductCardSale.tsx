import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";

interface CardProps {
  image: string;
}

const ProductCardSale: React.FC<CardProps> = ({ image }) => {
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
        <div className="px- py-2 w-14 text-center left-5 top-5 bg-[#F5813F] absolute text-xs font-medium text-white rounded ">
          sale
        </div>
      </div>

      <div className="flex items-center justify-between mt-5">
        <div className="flex flex-col ">
          <h2 className="text-primary text-[16px]">Library Stool Chair</h2>
          <h2 className="text-accentBlack text-[18px] font-semibold">
            $20 <span className="text-sm text-[#9A9CAA] line-through">$30</span>
          </h2>
        </div>
        <div className="w-11 h-11 bg-light cursor-pointer rounded flex items-center justify-center hover:bg-primary hover:text-white text-accentBlack">
          <Link href="/singleproduct">
            <LuShoppingCart className=" w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSale;
