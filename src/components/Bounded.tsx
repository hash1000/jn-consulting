import clsx from "clsx";
import React from "react";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  backgroundImage?: string; // New prop for background image
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  backgroundImage,
  ...restProp
}: BoundedProps) {
  // Inline style for background image
  const style = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat"
      }
    : {};

  return (
    <Comp
      className={clsx("md:py-14", className)}
      style={style} // Apply the style here
      {...restProp}
    >
      {children}
    </Comp>
  );
}
