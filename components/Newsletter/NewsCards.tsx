import React from "react";
import Image from "next/image";

interface CardProps {
  image: string;
}

const NewsCards: React.FC<CardProps> = ({ image }) => {
  return (
    <div>
      <div className="relative w-[186px] h-[186px] rounded overflow-hidden shadow-lg">
        <Image
          src={image}
          alt="chair"
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </div>

    </div>
  );
};
export default NewsCards
