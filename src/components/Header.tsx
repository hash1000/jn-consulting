import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { montserrat } from "../app/font";

export default async function Header() {
  const client = createClient();
  const data = await client.getSingle("settings");
  
  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row justify-between items-center absolute top-0 w-full z-10">
        {/* Logo */}
        <div className="self-start">
        <Image
          data-aos="fade-down"
          data-aos-offset="200"
          src={data.data.logo.url ?? "/fallback-image.jpg"}
          alt={data.data.logo.alt ?? "Logo"}
          width={275}
          height={150}
        />
        </div>
        

        {/* Navbar */}
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          className="flex gap-4 p-5"
        >
          {data.data.slices[0]?.primary.navbar.map(
            (item: any, index: number) => (
              <div key={index} className="relative group">
                {/* Main Menu Item */}
                <PrismicNextLink
                  field={item.link}
                  href={`/${item.link?.text}`}
                  className={`${montserrat.className} flex items-center gap-1 uppercase font-[600] hover:text-[#6FDCD6] hover:border-b-2 hover:border-[#6FDCD6]`}
                >
                  {item.lable}
                  {item.lable === "Services" &&
                    data.data.slices[0]?.primary.service_sub_menu.length >
                      0 && <TiArrowSortedDown />}
                </PrismicNextLink>

                {/* Submenu for "Services" */}
                {item.lable === "Services" &&
                  data.data.slices[0]?.primary.service_sub_menu?.length > 0 && (
                    <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md  opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {data.data.slices[0]?.primary.service_sub_menu.map(
                        (subItem: any, subIndex: number) => (
                          <PrismicNextLink
                            key={subIndex}
                            field={subItem.link}
                            href={subItem.link?.text ?? "#"}
                            className="block px-4 py-2 text-black hover:bg-[#06263E] hover:text-[#6FDCD6] hover:rounded-md"
                          >
                            {subItem.lable}
                          </PrismicNextLink>
                        )
                      )}
                    </div>
                  )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
