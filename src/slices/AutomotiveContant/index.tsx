import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AutomotiveContant`.
 */
export type AutomotiveContantProps =
  SliceComponentProps<Content.AutomotiveContantSlice>;

/**
 * Component for "AutomotiveContant" Slices.
 */
const AutomotiveContant: FC<AutomotiveContantProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for automotive_contant (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default AutomotiveContant;
