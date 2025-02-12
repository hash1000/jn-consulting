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
  const style = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};

  return (
    <Comp 
      className={clsx("md:py-14", className)} 
      style={style} // Apply the style here
      {...restProp}
    >
      <div className="w-full">{children}</div>
    </Comp>
  );
}