"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Bounded from "@/app/components/Bounded";
import dynamic from "next/dynamic";
const ImageMask = dynamic(() => import("@/app/components/ImageMask"), { ssr: false });


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
      className="h-[800px] flex justify-center items-center pt-[100px]"
      backgroundImage={slice.primary.backgroung_image.url || ""}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex justify-center max-w-6xl mx-auto w-full " 
            data-aos="fade-right"
            data-aos-offset="200" >
        <div
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-offset="200">
          {/* Subheading */}
          <PrismicRichText
            field={slice.primary.sub_headeing}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-7xl">{children}</h1>
              ),
            }}
          />

          {/* Main Heading */}
          <PrismicRichText
            field={slice.primary.heading}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-8xl text-[#5AB7B5] font-bold mb-5">
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
                <p className="text-[20px] text-left mb-10">{children}</p>
              ),
            }}
          />

          {/* Button */}
          <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-offset="200" >
          <PrismicNextLink
            field={slice.primary.button}
            className="text-[#214955] bg-[#6FDCD6] uppercase py-2 px-3 rounded-md"
          />
          </div>

          
        </div>

        <div>
          <ImageMask/>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;