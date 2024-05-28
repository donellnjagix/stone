"use client";
import React, { useState } from "react";
import { ClassType } from "../types/types";
import Card from "../components/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "@/public/images/properties/christian-mackie-cc0Gg3BegjE-unsplash.jpg";
import img2 from "@/public/images/properties/douglas-sheppard-9rYfG8sWRVo-unsplash.jpg";
import img3 from "@/public/images/properties/marcus-lenk-wKO0rx50VWo-unsplash.jpg";
import img4 from "@/public/images/properties/r-architecture-2gDwlIim3Uw-unsplash.jpg";
import img5 from "@/public/images/properties/r-architecture-CCjAPxoQWgQ-unsplash.jpg";
import Link from "next/link";

// Define property types (modify as needed)
const propertyTypeOptions = ["All", "House", "Apartment", "Condo", "Villa"];

type Props = {};



const Design: React.FC<Props> = (props) => {
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Sample designs data (modify as needed)
  const designs: Array<ClassType> = [
    {
      id: 1,
      name: "French Pattern Granite",
      price: 6800,
      image: ["img1.src"],
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
      image: ["img2.src"],
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
      image: ["img3.src"],
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
      image: ["img4.src"],
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
      image: ["img5.src"],
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
      image: ["img5.src"],
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
      image: ["img5.src"],
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
      image: ["img5.src"],
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
      image: ["img5.src"],
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
      image: ["img5.src"],
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
      image: ["img5.src"],
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
      image: ["img5.src"],
      shortDescription: "Grey granite cobble stone with a 50mm thickness, ideal for pathways and driveways.",
      longDescription: "Grey granite cobble stone, available in 100x100mm size and 50mm thickness. Ideal for pathways and driveways.",
      propertyType: "Cobble",
      location: "Outdoor",
      landSize: "100x100 mm, 50 mm Thick",
      selections: 2
    }
    // Add more design entries with relevant details, including 'selections' and 'landSizeOptions'
  ];
  

  const filterDesigns = () => {
    return designs.filter((design) => {
      // Apply filters here based on selected criteria
      if (
        (selectedPropertyType === "All" ||
          design.propertyType === selectedPropertyType) &&
        (design.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          design.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()))
      ) {
        return true;
      }
      return false;
    });
  };

  const handlePropertyTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedPropertyType(event.target.value);
  };

  const handleSearch = () => {
    // Implement search logic here, filtering designs based on searchQuery
    // For example, you can set the state or modify the filterDesigns function.
  };

  return (
    <div id="design" className="mx-auto w-5/6 mt-4 pt-20">
      {/* Heading */}
      <div className="flex flex-col justify-center mb-4 items-center">
        <p className="font-bold text-accent-black text-lg">How we design</p>
        <h1 className="text-3xl font-bold text-accent-orange">Our Designs</h1>
        <p className="text-accent-black w-full md:w-3/4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est eius quo,
          similique doloribus expedita quasi soluta pariatur accusantium
          obcaecati iure quam officiis necessitatibus repellendus modi dicta
          temporibus eos facere numquam.
        </p>
      </div>
      {/* end */}
      {/* Filter */}
      <div className="filter-container">
        {/* Property Type Filter */}
        <div className="filter-type">
          <label>Property Type:</label>
          <select
            value={selectedPropertyType}
            onChange={handlePropertyTypeChange}
          >
            {propertyTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      {/* Designs Carousel */}
      <Carousel responsive={responsive}>
        {filterDesigns().map(
          ({ id, name, price, shortDescription, image }: ClassType) => (
            <div key={id} className="ml-4">
              <Link href={`/designs/${id}`}>
                <Card
                  id={id}
                  name={name}
                  price={price}
                  shortDescription={shortDescription}
                  image={image}
                />
              </Link>
            </div>
          )
        )}
      </Carousel>
    </div>
  );
};

export default Design;