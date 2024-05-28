"use client";
import React from "react";
import { ClassType } from "../types/types";
import Card from "../components/Card";
import img1 from "@/public/images/granite/frenchpaver.jpg";
import img2 from "@/public/images/granite/552Rhombus-Paver-(Royal-Brown-patterns).jpg";
import img3 from "@/public/images/granite/Simpolo-Paver.jpg";  
import img4 from "@/public/images/granite/royal-brown-granite-tile-3764-1B.jpg";  
import img5 from "@/public/images/granite/224Romantic-Grey.jpg";  
import img6 from "@/public/images/granite/559CURB-STONE-&-CHANNEL-(Royal-Brown).jpg";  
import img7 from "@/public/images/granite/560GRATING-(Royal-Brown).jpg";  
import img8 from "@/public/images/granite/222Black-Galaxy-Granite.jpg";  
import Link from "next/link";
import img9 from "@/public/images/Maisonettes5/Flat Roof 1.jpg"; 
import img10 from "@/public/images/granite/558Grey-Rustic-Granite.jpg"; 
import img11 from "@/public/images/granite/557Romantic-Rustic-Granite.jpg"; 
import img12 from "@/public/images/granite/97Granite Cobble.jpg";

// Define properties
export const properties: Array<ClassType> = [
  
   {
      id: 1,
      name: "French Pattern Granite",
      price: 6800,
      image: [img1.src],
      shortDescription: "French pattern granite paver with a 40mm thickness, ideal for pathways, driveways, and outdoor floors.",
      longDescription: "French pattern granite paver, available in Royal Brown and Grey patterns. Ideal for modern landscaping designs.",
      propertyType: "Paver",
      location: "Outdoor",
      landSize: "40 mm Pattern",
      selections: 2
    },
    {
      id: 2,
      name: "Rombus Paver Granite",
      price: 5800,
      image: [img2.src],
      shortDescription: "Rombus pattern granite paver with a 40mm thickness, suitable for various outdoor applications.",
      longDescription: "Rombus pattern granite paver, available in Royal Brown patterns. Commonly used for pathways, driveways, and outdoor floors.",
      propertyType: "Paver",
      location: "Outdoor",
      landSize: "40 mm Pattern",
      selections: 2
    },
    {
      id: 3,
      name: "Haring Bone Paver Granite",
      price: 5800,
      image: [img3.src],
      shortDescription: "Haring Bone pattern granite paver with a 40mm thickness, suitable for various outdoor applications.",
      longDescription: "Haring Bone pattern granite paver, available in Royal Brown patterns. Commonly used for pathways, driveways, and outdoor floors.",
      propertyType: "Paver",
      location: "Outdoor",
      landSize: "40 mm Pattern",
      selections: 2
    },
    {
      id: 4,
      name: "Royal Brown Granite",
      price: 5800,
      image: [img4.src],
      shortDescription: "Royal Brown granite available in both polished and non-polished pieces, ideal for various outdoor applications.",
      longDescription: "Royal Brown granite, available in 40mm thickness, ideal for pathways, driveways, and outdoor floors. Comes in individual pieces.",
      propertyType: "Granite",
      location: "Outdoor",
      landSize: "40 mm Pattern",
      selections: 2
    },
    {
      id: 5,
      name: "Romantic Grey Granite",
      price: 6800,
      image: [img5.src],
      shortDescription: "Romantic Grey granite available in both polished and non-polished pieces, suitable for outdoor applications.",
      longDescription: "Romantic Grey granite, available in 20mm thickness, suitable for pathways, driveways, and outdoor floors. Comes in individual pieces.",
      propertyType: "Granite",
      location: "Outdoor",
      landSize: "20 mm Pattern",
      selections: 2
    },
    {
      id: 6,
      name: "Curb Stone & Channel",
      price: 3600,
      image: [img6.src],
      shortDescription: "Curb Stone & Channel in Royal Brown, available in various thicknesses.",
      longDescription: "Curb Stone & Channel in Royal Brown, available in 100x100mm (Curbe Stone) and 40mm (Channel). Ideal for pathways, driveways, outdoor floors, and pool areas.",
      propertyType: "Stone",
      location: "Outdoor",
      landSize: "100x100 mm (Curbe Stone), 40 mm (Channel)",
      selections: 2
    },
    {
      id: 7,
      name: "Grating",
      price: 8600,
      image: [img7.src],
      shortDescription: "Grating in Royal Brown, suitable for pathways, driveways, outdoor floors, and pool areas.",
      longDescription: "Grating in Royal Brown, available in 300x600mm size and 40mm thickness. Ideal for pathways, driveways, outdoor floors, and pool areas.",
      propertyType: "Stone",
      location: "Outdoor",
      landSize: "300x600 mm, 40 mm Thick",
      selections: 2
    },
    {
      id: 8,
      name: "Galaxy Black Granite",
      price: 21500,
      image: [img8.src],
      shortDescription: "Galaxy Black granite, custom cut to 20mm thickness, ideal for various interior and exterior applications.",
      longDescription: "Galaxy Black granite, custom cut to 20mm thickness. Ideal for kitchen countertops, shelves, door/window frames, dining tables, table tops, vanity tops, shower bases, staircases, floors, and walls.",
      propertyType: "Granite",
      location: "Indoor/Outdoor",
      landSize: "20 mm Thick",
      selections: 2
    },
    {
      id: 9,
      name: "Steel Grey Leather Finish Granite",
      price: 15850,
      image: [img9.src],
      shortDescription: "Steel Grey Leather Finish granite, custom cut to 20mm thickness, ideal for various interior and exterior applications.",
      longDescription: "Steel Grey Leather Finish granite, custom cut to 20mm thickness. Ideal for kitchen countertops, shelves, door/window frames, dining tables, table tops, vanity tops, shower bases, staircases, floors, walls, and pool areas.",
      propertyType: "Granite",
      location: "Indoor/Outdoor",
      landSize: "20 mm Thick",
      selections: 2
    },
    {
      id: 10,
      name: "Grey Rustic Granite",
      price: 5800,
      image: [img10.src],
      shortDescription: "Grey Rustic granite, custom cut to 20mm thickness, suitable for various interior and exterior applications.",
      longDescription: "Grey Rustic granite, custom cut to 20mm thickness. Ideal for walkways, driveways, parking areas, shower bases, staircases, floors, walls, and pool areas.",
      propertyType: "Granite",
      location: "Indoor/Outdoor",
      landSize: "20 mm Thick",
      selections: 2
    },
    {
      id: 11,
      name: "Romantic Rustic Granite",
      price: 5800,
      image: [img11.src],
      shortDescription: "Romantic Rustic granite, custom cut to 20mm thickness, suitable for various interior and exterior applications.",
      longDescription: "Romantic Rustic granite, custom cut to 20mm thickness. Ideal for walkways, driveways, parking areas, shower bases, staircases, floors, walls, and pool areas.",
      propertyType: "Granite",
      location: "Indoor/Outdoor",
      landSize: "20 mm Thick",
      selections: 2
    },
    {
      id: 12,
      name: "Grey Granite Cobble",
      price: 9500,
      image: [img12.src],
      shortDescription: "Grey granite cobble stone with a 50mm thickness, ideal for pathways and driveways.",
      longDescription: "Grey granite cobble stone, available in 100x100mm size and 50mm thickness. Ideal for pathways and driveways.",
      propertyType: "Cobble",
      location: "Outdoor",
      landSize: "100x100 mm, 50 mm Thick",
      selections: 2
    }
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
