"use client";
import Image from "next/image";
import aboutImage from "@/public/images/construction3.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/app/types/types";
import Button from '../Button';

type Props = {};

const About = (props: Props) => {
  return (
    <div id="aboutus" className="bg-white py-8">
      <div className="flex justify-center py-6">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">WELCOME TO AFRISTONE</h1>
          <p className="underline underline-offset-8">
            Learn more about AfriStone 
          </p>
        </div>
      </div>
      {/* <!--About us section--> */}

      <section className="md:h-full py-10 md:pb-0">
        <div className="mx-auto w-5/6 md:h-5/6 md:flex items-center justify-center">
          {/* image */}
          <div className="flex md:basis-2/5 justify-center md:mr-40 md:mt-12 md:justify-items-start h-[350px]">
            <Image
              src={aboutImage}
              alt="about-image"
              width={700}
              height={150}
              className="object-cover rounded-md"
            />
          </div>
          {/* description */}
          <div className="md:basis-3/5 items-center mt-8 md:mt-0 md:ml-8">
            <p className="text-sm text-right">
              Stone Arts could be traced to ancient civilizations of Rome,
              India as well as Athens in Greece where they made historical
              statements that couldn&apos;t really be matched. Fast forward to the
              21<sup>st</sup> century, and you will be surprised to see how
              this has evolved.
              <br />
              <br />
              Today, ancient times are awake again but with modern imitations
              of what existed then in unrefined forms.
              <br />
              <br />
              We specialize in Mechanical fixing of claddings, Travertine, wall
              claddings, Marble, Sintered stone, paving, custom-made
              architectural elements, indoor and outdoor fountains, fireplace
              and much more.
              <br />
              <br />
              We follow no political boundaries in the case of execution and
              art.
            </p>
            <div className="my-8 flex justify-center">
              <Button />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
