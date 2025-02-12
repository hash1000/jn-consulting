import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";

export default async function Header() {
  const client = createClient();
  const data = await client.getSingle("settings");

  return (
    <div className="flex justify-between items-center absolute top-0 w-full">
      <Image
        data-aos="fade-down"
        data-aos-offset="200"
        src={data?.data?.logo?.url ?? "/fallback-image.jpg"}
        alt="logo"
        width={265}
        height={143}
      />

      <div data-aos="fade-up" data-aos-offset="200" className="flex gap-4 p-5">
        {data.data.navbar.map((item: any, index: number) => (
          <PrismicNextLink
            field={item.link}
            key={index}
            href={item.link.url ?? "#"}
            className="flex items-center gap-1"
          >
            {item.lable}
            {/* Show arrow if the label is "Service" or if the item has submenus */}
            {(item.lable.toLowerCase() === "service" || item.submenu) && (
              <TiArrowSortedDown />
            )}
          </PrismicNextLink>
        ))}
      </div>
    </div>
  );
}
