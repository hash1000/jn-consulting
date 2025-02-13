"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Bounded from "@/app/components/Bounded";
import dynamic from "next/dynamic";
import { montserrat } from "@/app/font";
import SingleImageMask from "@/app/components/SingleImageMask";
const ImageMask = dynamic(() => import("@/app/components/ImageMask"), {
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
  return (
    <Bounded
      className="min-h-screen flex justify-center items-center h-screen"
      backgroundImage={slice.primary.backgroung_image.url || ""}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className="flex justify-center w-full pt-20 relative max-w-[80%] mx-auto"
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
                  className={`${montserrat.className} font-normal text-2xl text-left`}
                >
                  {children}
                </p>
              ),
            }}
          />

          {/* Button */}
          <div data-aos="fade-up" data-aos-delay="50" data-aos-offset="100">
            <PrismicNextLink
              field={slice.primary.button}
              className="text-[#214955] bg-[#6FDCD6] uppercase py-3 px-5 rounded-md"
            />
          </div>
        </div>

        <div className="flex-1 h-full relative">
          {slice.primary.hexa_grid.map((item, index) => {
            let positionClass = "";
            let imgwidth = 0;
            let imgheight = 0;

            if (index === 0) {
              positionClass = "absolute left-0";
              imgwidth = 260;
              imgheight = 260;
            } else if (index === 1) {
              positionClass = "absolute right-[50px]";
              imgwidth = 260;
              imgheight = 260;
            } else if (index === 2) {
              positionClass = "absolute -top-[90px] left-[30%]";
              imgwidth = 230;
              imgheight = 230;
            } else if (index === 3) {
              positionClass = "absolute top-[120px] left-[30%]";
              imgwidth = 230;
              imgheight = 230;
            }

            return (
              <div
                key={index}
                className={`w-full max-w-[260px] ${positionClass}`}
              >
                <SingleImageMask
                  imgWidth={imgwidth}
                  imgHeight={imgheight}
                  imgUrl={item.hexa_image.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
