import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Image from "next/image";

/**
 * Props for `Vacencies`.
 */
export type VacenciesProps = SliceComponentProps<Content.VacenciesSlice>;

/**
 * Component for "Vacencies" Slices.
 */
const Vacencies: FC<VacenciesProps> = ({ slice }) => {
  return (
    <Bounded
      className="pt-[100px] w-full"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="text-center">
        {/* Heading and Subheading */}
        <div
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-offset="300"
        >
<PrismicRichText
          field={slice.primary.heading}
          components={{
            heading1: ({ children }) => (
              <h2 className="text-4xl font-bold mb-4 flex justify-center items-center">
                {children}
                <span className="text-primary ml-3 text-[#6FDCD6]">
                  <PrismicRichText field={slice.primary.sub_headeing} />
                </span>
              </h2>
            ),
          }}
        />

        </div>
        
        {/* Description */}
        <PrismicRichText
          field={slice.primary.conatct}
          components={{
            paragraph: ({ children }) => (
              <p className="text-gray-600 mb-8">{children}</p>
            ),
          }}
        />

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-[1200px] mx-auto"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-offset="300"
        >
          {slice.primary.vacency_card.map((item, index) => (
            <div
              key={index}
              className=" p-5 rounded-lg shadow-lg bg-white text-black flex flex-col items-center text-center"
              style={{
                background:
                  "radial-gradient(at top center, #235683 0%, #0D2F4B 100%)",
              }}
            >
              {item.card_image && (
                                <div className="mb-4 w-full max-w-[270px]">
                                  <Image
                                    src={item.card_image.url || ""}
                                    alt="person image"
                                    width={203}
                                    height={203}
                                  />
                                </div>
                              )}
              <PrismicRichText
                field={item.card_heading}
                components={{
                  heading1: ({ children }) => (
                    <h1 className="text-4xl font-bold mb-2 text-[#6FDCD6]">
                      {children}
                    </h1>
                  ),
                }}
              />
              {item.card_button && (
                <PrismicNextLink
                  field={item.card_button}
                  className="inline-block text-start bg-[#6FDCD6] text-black px-4 py-2 mt-4 rounded-lg font-medium hover:bg-[#5AC1B9]"
                >
                  Read More
                </PrismicNextLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Vacencies;
