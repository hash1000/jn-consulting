"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Bounded from "@/components/Bounded";
import dynamic from "next/dynamic";
import { montserrat } from "@/app/font";
import SingleImageMask from "@/components/SingleImageMask";
import Image from "next/image";
const ImageMask = dynamic(() => import("@/components/ImageMask"), {
  ssr: false,
});

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  // console.log("slice", slice.primary);

  return (
    <Bounded
      className="min-h-screen flex justify-center items-center h-screen"
      backgroundImage={slice.primary.backgroung_image?.url || ""}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={`flex justify-center ${slice.primary.hexa_grid?.length > 0 && "items-baseline"} w-full pt-20 relative max-w-[1920px] mx-auto`}
        data-aos="fade-right"
        data-aos-offset="200"
      >
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-offset="200"
          className="flex-1 grid gap-3 px-9 ps-20 pr-9"
        >
          {/* Subheading */}
          <PrismicRichText
            field={slice.primary.sub_headeing}
            components={{
              heading1: ({ children }) => (
                <h1 className={`${montserrat.className} text-5xl font-normal`}>
                  {children}
                </h1>
              ),
            }}
          />

          {/* Main Heading */}
          <PrismicRichText
            field={slice.primary.heading}
            components={{
              heading1: ({ children }) => (
                <h1
                  className={`${montserrat.className} text-7xl text-[#5AB7B5] font-bold`}
                >
                  {children}
                </h1>
              ),
            }}
          />

          {/* Content */}
          <PrismicRichText
            field={slice.primary.contant}
            components={{
              paragraph: ({ children }) => (
                <p
                  className={`${montserrat.className} font-normal text-lg text-left`}
                >
                  {children}
                </p>
              ),
            }}
          />

          {/* Button */}
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-offset="100"
            className="mt-5"
          >
            <PrismicNextLink
              field={slice.primary.button}
              className="text-[#214955] bg-[#6FDCD6] py-3 px-5 rounded-md"
            />
          </div>
        </div>

        <div className="flex-1 h-full relative max-w-[672px] min-w-[672px] mx-auto">
        {slice.primary.hexa_grid?.length > 0 ? (
                slice.primary.hexa_grid.map((item, index) => {
                  let positionClass = "";
                  let size = 0;

                  // Setting positions and sizes dynamically
                  if (index === 0) {
                    positionClass = "absolute left-0";
                    size = 250;
                  } else if (index === 1) {
                    positionClass = "absolute right-[10px]";
                    size = 250;
                  } else if (index === 2) {
                    positionClass = "absolute -top-[93px] left-[30%]";
                    size = 220;
                  } else if (index === 3) {
                    positionClass = "absolute top-[122px] left-[30%]";
                    size = 220;
                  }

                  return (
                    <div
                      key={index}
                      className={`w-full max-w-[260px] ${positionClass}`}
                    >
                      <SingleImageMask
                        size={size}
                        imgSrc={item.hexa_image?.url || ""}
                        zoom={2}
                      />
                    </div>
                  );
                })
              ) : (
                <div className="flex items-center justify-center">
                  <SingleImageMask
                    size={400}
                    imgSrc={slice.primary.header_image?.url || ""}
                    zoom={2}
                  />
                </div>
              )}
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
