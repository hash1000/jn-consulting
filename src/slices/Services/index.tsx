import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Bounded from "@/app/components/Bounded";
import Image from "next/image";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services: FC<ServicesProps> = ({ slice }) => {
  return (
    <Bounded
      className="pt-[100px] mx-auto w-full max-w-6xl"
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
                <p className="text-gray-600 mb-8">{children}</p>
              ),
            }}
          />
        </div>

        {/* Render the cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-offset="200"
        >
          {slice.primary.card.map((item, index) => (
            <PrismicNextLink
              key={index}
              field={item.card_link}
              className="p-6 rounded-lg shadow-lg text-white hover:!bg-[#51B0AB] transition-colors duration-300"
              style={{
                background:
                  "radial-gradient(at top center, #235683 0%, #0D2F4B 100%)",
              }}
            >
              {/* Card Image */}
              {item.card_image && (
                <div className="mb-4 max-w-[270px]">
                  <Image
                    src={item.card_image.url || ""} // Use the URL from Prismic
                    alt={item.card_image.alt || "Card Image"} // Provide a fallback alt text
                    width={270} // Set a fixed width
                    height={180} // Set a fixed height
                    className="w-full h-auto" // Ensure the image is responsive
                  />
                </div>
              )}

              {/* Card Heading */}
              <PrismicRichText
                field={item.card_heading}
                components={{
                  heading1: ({ children }) => (
                    <h1 className="text-4xl font-bold mb-2">{children}</h1>
                  ),
                }}
              />

              {/* Card Subheading */}
              <PrismicRichText
                field={item.card_sub_heading}
                components={{
                  heading1: ({ children }) => (
                    <h1 className="text-4xl font-bold ">{children}</h1> // Adjust text color for readability
                  ),
                }}
              />
            </PrismicNextLink>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Services;
