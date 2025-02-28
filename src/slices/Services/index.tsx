"use client";
import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Bounded from "@/components/Bounded";
import Image from "next/image";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services: FC<ServicesProps> = ({ slice }) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <>
<div className="text-center w-full">
  
  <h1 className="text-#06263E text-4xl font-bold mb-4 bg-[#51B0AB] rounded-md py-5 px-3">We Are Certified <span className="text-[#06263F]">ISO/IEC 27001:2022</span></h1>
  </div>
    
    <Bounded
    id="services"
      className="pt-[100px] mx-auto w-full 
      "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >


      <div className="text-center">
        

        {/* Render the label */}
        <PrismicRichText
          field={slice.primary.lable}
          components={{
            heading1: ({ children }) => (
              <h2 className="text-4xl font-bold mb-4">
                {children}
                <span className="text-primary ml-3 text-[#6FDCD6]">
                  {slice.primary.span_lable}
                </span>
              </h2>
            ),
          }}
        />

        {/* Render the description */}
        <div data-aos="fade-right" data-aos-delay="50" data-aos-offset="200">
          <PrismicRichText
            field={slice.primary.description}
            components={{
              paragraph: ({ children }) => (
                <p className="text-white mb-8">{children}</p>
              ),
            }}
          />
        </div>

        {/* Render the cards */}
        <div
          className="grid md:grid-cols-[repeat(2,minmax(300px,350px))] xl:grid-cols-4 justify-center gap-4 place-items-center max-w-[1140px] mx-auto"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-offset="200"
        >
          {slice.primary.card.map((item, index) => {
            return(
<PrismicNextLink
            key={index}
            // href={item.card_link?.text || ""}
              field={item.card_link}
              className="md:p-3 xl:p-6 rounded-lg shadow-lg text-white transition-colors duration-300 flex flex-col h-full"
              style={{
                background: isHovered===index
                  ? "#51B0AB"
                  : "radial-gradient(at top center, #235683 0%, #0D2F4B 100%)",
              }}
              onMouseEnter={()=>handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Card Image */}
              {item.card_image && (
                <div className="mb-4 max-w-[270px]">
                  <Image
                    src={item.card_image.url || ""}
                    alt={item.card_image.alt || "Card Image"}
                    width={270}
                    height={180}
                    className="w-full h-auto"
                  />
                </div>
              )}

              {/* Card Content */}
              <div className="flex-grow">
                {item.card_heading && (
                  <div className="text-2xl font-bold mb-2">
                    <PrismicRichText field={item.card_heading} />
                  </div>
                )}
                {item.card_sub_heading && (
                  <div className="text-2xl font-bold mb-2">
                    <PrismicRichText field={item.card_sub_heading} />
                  </div>
                )}
              </div>
            </PrismicNextLink>
            )
          }
            
        )}
        </div>
      </div>
    </Bounded>
    </>
  );
};

export default Services;
