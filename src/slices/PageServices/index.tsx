"use client";
import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Bounded from "@/components/Bounded";
import Image from "next/image";
import { Modal } from "@/components/Modal";

/**
 * Props for `AutomotiveServices`.
 */
export type AutomotiveServicesProps =
  SliceComponentProps<Content.AutomotiveServicesSlice>;

/**
 * Component for "AutomotiveServices" Slices.
 */
const AutomotiveServices: FC<AutomotiveServicesProps> = ({ slice }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<any>(null);
  console.log("selected card", slice.primary.card);
  return (
    <>
      <Bounded
        className="py-[100px] mx-auto w-full"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        backgroundImage={slice.primary.backgroung_image?.url || ""}
      >
        {/* Modal */}
        <Modal
          shouldShow={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <div
            className="max-w-[900px] h-[600px] grid place-items-end p-6 rounded-md"
            style={{
              backgroundImage: `url(${selectedCard?.card_popup_background?.url || ""})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              {/* Render the label */}
              <PrismicRichText
                field={selectedCard?.card_popup_heading}
                components={{
                  heading1: ({ children }) => (
                    <h2 className="text-4xl font-bold mb-4 text-[#6FDCD6]">
                      {children}
                    </h2>
                  ),
                }}
              />

              {/* Render the description */}
              <div
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-offset="200"
              >
                <PrismicRichText
                  field={selectedCard?.card_popup_detail}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-left mb-8">{children}</p>
                    ),
                  }}
                />

                {selectedCard?.card_popup_link.text && (
                  <PrismicNextLink field={selectedCard.card_popup_link}>
                    <p className="text-white bg-[#6FDCD6] py-3 px-5 rounded-lg inline-block">
                      {selectedCard?.card_popup_link.text}
                    </p>
                  </PrismicNextLink>
                )}
              </div>
            </div>
          </div>
        </Modal>

        {/* Main Section */}
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
              field={slice.primary.content}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-white mb-8">{children}</p>
                ),
              }}
            />
          </div>

          {/* Render the cards */}
          <div
            className={` 
    ${
      slice.primary.card.length === 2
        ? "flex justify-center"
          : slice.primary.card.length === 4
            ? "flex"
            : slice.primary.card.length > 5
              ? " grid grid-cols-1 md:grid-cols-3"
              : "md:grid-cols-4"
    } 
    gap-6 place-items-center max-w-[1370px] mx-auto`}
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-offset="200"
          >
           {slice.primary.card.map((item, index) => (
  <div
    key={index}
    onClick={() => {
      if (!item.card_popup_link?.text) {
        setSelectedCard(item);
        setShowModal(true);
      }
    }}
    className="py-9 rounded-lg shadow-lg hover:cursor-pointer text-white transition-colors duration-300 flex flex-col h-full w-[435px] max-h-[310px]"
    style={{
      background:
        "radial-gradient(at top center, #235683 0%, #0D2F4B 100%)",
    }}
  >
    {/* Card Link */}
    {item.card_popup_link?.text ? (
      <PrismicNextLink href={item.card_popup_link.text}>
        {/* Card Content */}
        <div className="flex flex-col h-full w-full">
          {/* Card Image */}
          {item.card_image?.url ? (
            <div className="mb-4 mx-auto max-w-[435px] h-[180px]">
              <Image
                src={item.card_image.url}
                alt={item.card_image.alt || "Card Image"}
                width={180}
                height={180}
                layout="intrinsic"
                className="object-cover rounded-md max-w-[435px] h-[180px]"
              />
            </div>
          ) : (
            <div className="w-full h-[180px] bg-gray-700 rounded-md flex items-center justify-center">
              <span className="text-gray-300">No Image Available</span>
            </div>
          )}

          {/* Card Text */}
          <div className="flex-grow text-center">
            {item.card_heading && (
              <div className="text-xl font-bold mb-2 hover:text-[#51B0AB]">
                <PrismicRichText field={item.card_heading} />
              </div>
            )}

            {item.card_sub_heading && (
              <div className="text-xl font-semibold mb-2 hover:text-[#51B0AB]">
                <PrismicRichText field={item.card_sub_heading} />
              </div>
            )}
          </div>
        </div>
      </PrismicNextLink>
    ) : (
      <>
        {/* Card Image */}
        {item.card_image?.url ? (
          <div className="mb-4 mx-auto max-w-[435px] h-[180px]">
            <Image
              src={item.card_image.url}
              alt={item.card_image.alt || "Card Image"}
              width={180}
              height={180}
              layout="intrinsic"
              className="object-cover rounded-md max-w-[435px] h-[180px]"
            />
          </div>
        ) : (
          <div className="w-full h-[180px] bg-gray-700 rounded-md flex items-center justify-center">
            <span className="text-gray-300">No Image Available</span>
          </div>
        )}

        {/* Card Text */}
        <div className="flex-grow text-center">
          {item.card_heading && (
            <div className="text-xl font-bold mb-2 hover:text-[#51B0AB]">
              <PrismicRichText field={item.card_heading} />
            </div>
          )}

          {item.card_sub_heading && (
            <div className="text-xl font-semibold mb-2 hover:text-[#51B0AB]">
              <PrismicRichText field={item.card_sub_heading} />
            </div>
          )}
        </div>
      </>
    )}
  </div>
))}

          </div>
        </div>
      </Bounded>
      <div className="border-b-4 border-white"></div>
    </>
  );
};

export default AutomotiveServices;
