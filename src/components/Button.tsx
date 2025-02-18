import clsx from "clsx";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
   


export default function Button({
    className,
    ...restProps
}:PrismicNextLinkProps){
    return(
        <PrismicNextLink className="py-3 px-12 text-white bg-cyan-400" {...restProps}/>

    )
}