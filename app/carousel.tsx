import React from "react";
import Slider from "react-slick";
import Card from "./components/Card";
import { ClassType } from "./types/types";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselProps = {
  properties: ClassType[];
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

const Carousel = ({ properties }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', color: 'black', background: 'white', padding: '10px', fontSize: '2rem', fontWeight: 'bold' }}>Our Products</h2>
      <Slider {...settings}>
        {properties.map(({ id, name, price, image, shortDescription }: ClassType) => (
          <div key={id} className="px-2"> {/* Add padding for white gap */}
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
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
