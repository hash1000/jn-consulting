"use client";
import { FC, useState } from "react";
import { asText, Content } from "@prismicio/client";
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
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [showContant, setShowContant] = useState<number | null>(null);
  const [link, setLink] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    console.log("index", index);
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };
  const normalizeString = (str: string) => str.toLowerCase().replace(/_/g, " ");

  return (
    <>
      <Bounded
        className="py-[100px] mx-auto w-full"
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        backgroundImage={slice.primary.background_image?.url || ""}
      >
        {/* Modal */}
        <Modal
          shouldShow={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <div
            className="max-w-[900px] h-[600px] grid place-items-end p-6 rounded-md"
            style={{
              backgroundImage: `url(${selectedCard?.card_popup_background.url || ""})`,
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
    gap-6 place-items-center max-w-[1140px] mx-auto`}
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-offset="200"
          >
            {slice.primary.card.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  if (item.popup) {
                    if (!item.card_link || !("text" in item.card_link)) {
                      // Ensure 'text' exists in card_link
                      setSelectedCard(item);
                      setShowModal(true);
                    }
                  } else if (
                    !item.popup &&
                    item.card_link &&
                    "text" in item.card_link
                  ) {
                    setLink(item.card_link.text ?? "");
                  } else {
                    setShowContant(index);
                  }
                }}
                className="rounded-lg shadow-lg hover:cursor-pointer text-white transition-colors duration-300 flex flex-col h-full w-[365px] max-h-[310px]"
                style={{
                  background:
                    "radial-gradient(at top center, #235683 0%, #0D2F4B 100%)",
                }}
              >
                {/* Card Link */}
                {item.popup ? (
                  <div className="flex flex-col h-full w-full py-4">
                    {/* Card Image */}
                    {item.card_image?.url ? (
                      <div className="mb-4 mx-auto max-w-[365px] h-[180px]">
                        <Image
                          src={item.card_image.url}
                          alt={item.card_image.alt || "Card Image"}
                          width={180}
                          height={180}
                          layout="intrinsic"
                          className="object-cover rounded-md max-w-[365px] h-[180px]"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-[180px] bg-gray-700 rounded-md flex items-center justify-center">
                        <span className="text-gray-300">
                          No Image Available
                        </span>
                      </div>
                    )}

                    {/* Card Text */}
                    <div
                      className="flex-grow text-center"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.card_heading && (
                        <div
                          className={`text-xl font-bold mb-2 ${isHovered === index ? "text-[#51B0AB]" : "text-white"}`}
                        >
                          <PrismicRichText field={item.card_heading} />
                        </div>
                      )}

                      {item.card_sub_heading && (
                        <div
                          className={`text-xl font-semibold mb-2 ${isHovered === index ? "text-[#51B0AB]" : "text-white"}`}
                        >
                          <PrismicRichText field={item.card_sub_heading} />
                        </div>
                      )}
                    </div>
                  </div>
                ) : link ? (
                  <>
                    <PrismicNextLink
                      field={item.card_link}
                      href={link}
                      className="py-4"
                    >
                      {item.card_image?.url ? (
                        <div className="mb-4 mx-auto max-w-[365px] h-[180px] flex justify-center">
                          <Image
                            src={item.card_image.url}
                            alt={item.card_image.alt || "Card Image"}
                            width={180}
                            height={180}
                            className="object-cover rounded-md max-w-[365px] h-[180px]"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-[180px] bg-gray-700 rounded-md flex items-center justify-center">
                          <span className="text-gray-300">
                            No Image Available
                          </span>
                        </div>
                      )}

                      {/* Card Text */}
                      <div className="flex-grow text-center"
                      
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                     >
                        {item.card_heading && (
                          <div className={`text-xl font-bold mb-2 ${isHovered === index ? "text-[#51B0AB]" : "text-white"}`}>
                            <PrismicRichText field={item.card_heading} />
                          </div>
                        )}

                        {item.card_sub_heading && (
                          <div className={`text-xl font-semibold mb-2 ${isHovered === index ? "text-[#51B0AB]" : "text-white"}`}>
                            <PrismicRichText field={item.card_sub_heading} />
                          </div>
                        )}
                      </div>
                    </PrismicNextLink>
                  </>
                ) : (
                  <div className="flex flex-col h-full w-full py-4">
                    {/* Card Image */}
                    {item.card_image?.url ? (
                      <div className="mb-4 mx-auto max-w-[365px] h-[180px]">
                        <Image
                          src={item.card_image.url}
                          alt={item.card_image.alt || "Card Image"}
                          width={180}
                          height={180}
                          layout="intrinsic"
                          className="object-cover rounded-md max-w-[365px] h-[180px]"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-[180px] bg-gray-700 rounded-md flex items-center justify-center">
                        <span className="text-gray-300">
                          No Image Available
                        </span>
                      </div>
                    )}

                    {/* Card Text */}
                    <div className="flex-grow text-center"
                    
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}>
                      {item.card_heading && (
                        <div className={`text-xl font-bold mb-2 ${isHovered === index ? "text-[#51B0AB]" : "text-white"}`}>
                          <PrismicRichText field={item.card_heading} />
                        </div>
                      )}

                      {item.card_sub_heading && (
                        <div className={`text-xl font-semibold mb-2 ${isHovered === index ? "text-[#51B0AB]" : "text-white"}}`}>
                          <PrismicRichText field={item.card_sub_heading} />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Bounded>
      {showContant === 0 ? (
        <Bounded
          className="py-[100px] mx-auto w-full"
          backgroundImage={slice.primary.contant_background_image?.url || ""}
        >
          <div className="flex flex-col items-center px-4">
            {/* Title */}
            <div className="text-2xl font-bold text-[#5AB7B5] p-4 text-center">
              <PrismicRichText field={slice.primary.cae_content} />
            </div>

            {/* Cards Grid */}
            <div
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-offset="200"
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  place-items-center mx-auto max-w-[1440px] py-12"
            >
              {Array.isArray(slice.primary.cae_card_service) &&
                slice.primary.cae_card_service.map((item) => {
                  const cardHeadingKey = asText(item.card_heading);
                  return (
                    <div
                      key={cardHeadingKey}
                      className=" rounded-lg shadow-lg p-6 w-full max-w-[365px] flex flex-col items-center"
                      style={{
                        background:
                          "radial-gradient(at top center, #235683 0%, #0D2F4B 100%)",
                      }}
                    >
                      {/* Image */}
                      <div className="mb-4 w-full h-[180px] flex justify-center">
                        <Image
                          src={item.card_image.url || ""}
                          alt={item.card_image.alt || "Card Image"}
                          width={180}
                          height={150}
                          className="object-cover rounded-md  h-full shadow-lg"
                        />
                      </div>
                      <PrismicRichText
                        field={item.card_heading}
                        components={{
                          // Use a component from another file.
                          heading1: ({ children }) => (
                            <h1 className="text-[#5AB7B5] font-bold text-2xl">
                              {children}
                            </h1>
                          ),
                          // Use an HTML element with class names.
                        }}
                      />
                      {/* Content */}
                      <div className="flex flex-col flex-grow text-white w-full">
                        <div className="overflow-y-auto min-h-[200px] p-3">
                          {Object.entries(slice.primary).map(
                            ([key, value], i) => {
                              if (
                                normalizeString(key) ===
                                normalizeString(cardHeadingKey)
                              ) {
                                return (
                                  <ul
                                    key={i}
                                    className="list-disc list-inside space-y-2 text-gray-300"
                                  >
                                    {Array.isArray(value) &&
                                      value.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                          {subItem?.label ||
                                            subItem?.lable ||
                                            ""}
                                        </li>
                                      ))}
                                  </ul>
                                );
                              }
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </Bounded>
      ) : showContant === 1 ? (
        <Bounded
          className="py-[100px] mx-auto w-full"
          backgroundImage={slice.primary.contant_background_image?.url || ""}
        >
          <div className="flex flex-col items-center px-4">
            {/* Title */}
            <div className="text-2xl font-bold text-[#5AB7B5] p-4 text-center">
              <PrismicRichText field={slice.primary.cae_content} />
            </div>

            {/* Cards Grid */}
            <div
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-offset="200"
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  place-items-center mx-auto max-w-[1440px] py-12"
            >
              {Array.isArray(slice.primary.cae_card_service) &&
                slice.primary.cae_card_service.map((item) => {
                  const cardHeadingKey = asText(item.card_heading);
                  return (
                    <div
                      key={cardHeadingKey}
                      className=" rounded-lg shadow-lg p-6 w-full max-w-[365px] flex flex-col items-center"
                      style={{
                        background:
                          "radial-gradient(at top center, #235683 0%, #0D2F4B 100%)",
                      }}
                    >
                      {/* Image */}
                      <div className="mb-4 w-full h-[180px] flex justify-center">
                        <Image
                          src={item.card_image.url || ""}
                          alt={item.card_image.alt || "Card Image"}
                          width={180}
                          height={150}
                          className="object-cover rounded-md  h-full shadow-lg"
                        />
                      </div>
                      <PrismicRichText
                        field={item.card_heading}
                        components={{
                          // Use a component from another file.
                          heading1: ({ children }) => (
                            <h1 className="text-[#5AB7B5] font-bold text-2xl">
                              {children}
                            </h1>
                          ),
                          // Use an HTML element with class names.
                        }}
                      />
                      {/* Content */}
                      <div className="flex flex-col flex-grow text-white w-full">
                        <div className="overflow-y-auto min-h-[200px] p-3">
                          {Object.entries(slice.primary).map(
                            ([key, value], i) => {
                              if (
                                normalizeString(key) ===
                                normalizeString(cardHeadingKey)
                              ) {
                                return (
                                  <ul
                                    key={i}
                                    className="list-disc list-inside space-y-2 text-gray-300"
                                  >
                                    {Array.isArray(value) &&
                                      value.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                          {subItem?.label ||
                                            subItem?.lable ||
                                            ""}
                                        </li>
                                      ))}
                                  </ul>
                                );
                              }
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </Bounded>
      ) : null}

      <div className="border-b-4 border-white"></div>
    </>
  );
};

export default AutomotiveServices;
