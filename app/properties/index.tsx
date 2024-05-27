"use client";
import React from "react";
import { ClassType } from "../types/types";
import Card from "../components/Card";
import img1 from "@/public/images/design/img1.jpg";
import img2 from "@/public/images/design/img2.jpg";
import img3 from "@/public/images/Maisonettes3/CM 1.jpg";  
import img4 from "@/public/images/Maisonettes3/CM 2.jpg";  
import img5 from "@/public/images/Maisonettes3/CM 3.jpg";  
import img6 from "@/public/images/Maisonettes3/CM 4.jpg";  
import img7 from "@/public/images/Maisonettes3/FIRST FLOOR_page-0001.jpg";  
import img8 from "@/public/images/Maisonettes3/Roof plan_page-0001.jpg";  
import Link from "next/link";
import img9 from "@/public/images/Maisonettes5/Flat Roof 1.jpg"; 
import img10 from "@/public/images/Maisonettes5/Utawala 1.jpg"; 
import img11 from "@/public/images/Maisonette4/12 X 35 Flat Roof 3D.jpg"; 
import img12 from "@/public/images/Maisonette4/4 bedroom flat roof 40 x 80_page-0001.jpg";

// Define properties
export const properties: Array<ClassType> = [
  {
    id: 1,
    name: "BLACK SPLIT",
    price: 6200,
    image: [img1.src],
    shortDescription: "BLACK SPLIT.",
    longDescription:
      "Natural Stone Wall Cladding. Prices are exclusive of VAT. For orders above 50 Sqm, please call our helpline or email at info@stoneartskenya.com for delivery timelines. Fixing and polishing charges extra as applicable. While ordering please consider the box packing and wastage of around 10% of the total estimated area.",
    propertyType: "B. CLADDINGS COLLECTION",
    location: "City A",
    landSize: "500 sq. ft",
    selections: 1,
  },
  {
    id: 2,
    name: "BLACK STACKING",
    price: 7200,
    image: [img3.src],
    shortDescription: "BLACK STACKING. Natural Stone Wall Cladding. Prices are exclusive of VAT.",
    longDescription: "Fixing and polishing charges extra as applicable.",
    propertyType: "B. CLADDINGS COLLECTION",
    location: "City B",
    landSize: "N/A",
    selections: 2,
  },
  {
    id: 3,
    name: "Caribbean Gold Plank Pattern",
    price: 8800,
    image: [img3.src, img9.src, img10.src],
    shortDescription: "Caribbean Gold Travertine. Classic Travertine. Natural stone.",
    longDescription: "French Pattern (12mm Thickness) Plank Pattern 203 x 406 mm (12mm Thickness)",
    propertyType: "B. CLADDINGS COLLECTION",
    location: "City B",
    landSize: "50FT * 100FT",
    selections: 1,
  },
  {
    id: 4,
    name: "Classic Travertine Plank Pattern",
    price: 8800,
    image: [img3.src, img9.src, img10.src],
    shortDescription: "Classic Travertine Plank Pattern. Available in Plank Pattern 12mm Thickness. Natural Stone Wall Cladding.",
    longDescription: "French Pattern (12mm Thickness) Plank Pattern 203 x 406 mm (12mm Thickness)",
    propertyType: "B. CLADDINGS COLLECTION",
    location: "City B",
    landSize: "50FT * 100FT",
    selections: 1,
  },
];

const Property = () => {
  const [selectedNumber, setSelectedNumber] = React.useState<number | null>(null);

  // Implement search logic here
  const filterProperties = () => {
    return properties.filter((property) => {
      return selectedNumber === null || property.selections === selectedNumber;
    });
  };

  return (
    <div id="properties" className="mx-auto w-5/6 pt-28">
      {/* Filter */}
      <div className="filter-container flex justify-between items-center">
        {/* Number of Selections Filter */}
        <div className="filter-type mb-4">
          <label>Selections:</label>
          <div className="flex ml-2 space-x-2">
            <button
              className={`${
                selectedNumber === 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              } px-3 py-1 rounded-full`}
              onClick={() => setSelectedNumber(1)}
            >
              Cladding
            </button>
            <button
              className={`${
                selectedNumber === 2
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              } px-3 py-1 rounded-full`}
              onClick={() => setSelectedNumber(2)}
            >
              Stone
            </button>
          </div>
        </div>
      </div>
      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filterProperties().map(
          ({
            id,
            name,
            price,
            image,
            shortDescription,
          }: ClassType) => (
            <div key={id}>
              <Link href={`/properties/${id}`}>
                <Card
                  id={id}
                  name={name}
                  price={price}
                  image={image}
                  shortDescription={shortDescription}
                />
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Property;
