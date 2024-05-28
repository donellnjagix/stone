import React from "react";
import { Attribute } from "../types/types";
import Image from "next/image";

type Props = {
  id: number;
  name: string;
  price: number;
  image: string[]; // This is an array of image strings
  shortDescription: string;
  longDescription?: string;
};

const Card = ({
  id,
  name,
  price,
  image, // image is still an array of strings
  shortDescription,
  longDescription,
}: Props) => {
  return (
    <div className="bg-[#f0d9b3] shadow-md p-4 flex flex-col items-center justify-between text-center h-96"> {/* Set a fixed height */}
      <div className="relative h-60 w-full flex-shrink-0"> {/* Ensure image container has a fixed height */}
        {/* Map over the array of image strings and render each image */}
        {image.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={name} // You can use the same alt text for all images or customize it
            fill
            sizes="(max-width: 480px) 100vw,
                    (max-width: 768px) 75vw,
                    (max-width: 1060px) 50vw,
                    33vw"
            className="object-cover rounded-md transition-transform duration-300 transform hover:scale-105"
          />
        ))}
      </div>
      <div className="font-bold text-lg text-accent-black flex-grow">{name}</div> {/* Allow text to take available space */}
      <div className="flex-grow">{shortDescription}</div> {/* Allow text to take available space */}
      {/* <p className="border bg-[#dde6f5] border-accent-orange py-1 px-6 rounded-md">${price}</p> */}
    </div>
  );
};

export default Card;
