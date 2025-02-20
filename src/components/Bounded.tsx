import clsx from "clsx";
import React from "react";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  backgroundImage?: string;
  width?: string | number;
  height?: string | number;
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  backgroundImage,
  width = "100%",
  height = "auto",
  ...restProp
}: BoundedProps) {
  const style: React.CSSProperties = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width,
    height,
  };

  return (
    <Comp className={clsx("md:py-14", className)} style={style} {...restProp}>
      {children}
    </Comp>
  );
}
