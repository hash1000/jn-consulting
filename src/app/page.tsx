// "use client";
// app/page.tsx
// import { Metadata } from "next";
// import { useRouter } from "next/router";
// import { isFilled, asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Tsparticles from "../components/Tsparticles";
// import Link from "next/link";


export default async function Home() {
  // const router = useRouter();
  const client = createClient();
  const page = await client.getSingle("homepage");

  //  const { locales,locale: acitveLocals, defaultLocals } = router;

  return (
    <div style={{ position: "relative" }}>
      {/* {
        locales?.map((locale) => {
          const {pathname, query, asPath}=router;
          return (
            <li key={locale}>
              <Link
              href={{pathname, query}}
              as={asPath}
              locale={locale}
              legacyBehavior>
                {locale}
              </Link>
            </li>
          )
        })
      } */}
      <Tsparticles />
      <div style={{ position: "relative", zIndex: 1 }}>
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </div>
  );
}
