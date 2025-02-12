import { createClient } from "@/prismicio";
import Image from "next/image";
import React from "react";
import { CiPhone, CiMail } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import Link from "next/link";
import { IconType } from "react-icons";
import { PrismicNextLink } from "@prismicio/next";

// Define the icon mapping
const iconComponents: Record<string, IconType> = {
  phone: CiPhone,
  linkdine: TiSocialLinkedinCircular, // Corrected key from 'Linkdine'
  mail: CiMail,
};

export default async function Footer() {
  const client = createClient();
  const data = await client.getSingle("settings");

  return (
    <div className="flex justify-between items-center">
      <div
        className="py-5"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-offset="100"
      >
        <Image
          src={data?.data?.logo?.url ?? "/fallback-image.jpg"}
          alt="logo"
          width={168}
          height={83}
        />
      </div>

      <div
        // data-aos="fade-right"
        // data-aos-delay="50"
        // data-aos-offset="100"
        className="flex gap-2"
      >
        {data.data.footer_link.map((item: any, index: number) => (
          <PrismicNextLink key={index} href={item.link.url ?? "#"}>
            {item.lable}{" "}
            {index !== data.data.footer_link.length - 1 && (
              <span className="px-2">|</span>
            )}
          </PrismicNextLink>
        ))}
      </div>

      <div
        className="flex  gap-2 p-5"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-offset="100"
      >
        {data.data.footer_icon.map((item: any, index: number) => {
          const IconComponent = iconComponents[item.icon.toLowerCase()]; // Ensure case matching
          return (
            <PrismicNextLink
              key={index}
              href={item.link.url ?? "#"}
              className="rounded-full bg-[#6FDCD6] p-2"
            >
              {IconComponent && <IconComponent />}
            </PrismicNextLink>
          );
        })}
      </div>
    </div>
  );
}
