import { Interface } from "@/app/page";
import { Montserrat, Archivo, Space_Grotesk, Work_Sans, Raleway, Jost, Nunito_Sans } from 'next/font/google'


const displayFont = Nunito_Sans({
  subsets: ['latin'],
})

const headlineFont = Jost({
  subsets: ['latin'],
})

const bodyFont = Montserrat({
  subsets: ['latin'],
})

const fontSizes = {
  h1: "text-[2rem] md:text-[4.5rem]",
  h2: "text-[1.5rem] md:text-[2.441rem]",
  h3: "text-[1.3rem] md:text-[2rem]",
  h4: "text-[.8rem] md:text-[.95rem]",
  h5: "text-[1rem] md:text-[.95rem]",
  h5Hl: "text-[1rem] md:text-[1.5rem]",
  h6: "text-[.82rem] md:text-[.90rem]",
  h6Hl: "text-[.82rem] md:text-[.90rem]",
  body: "text-[.66rem] md:text-[.80rem]",
  caption: "text-[.66rem] md:text-[.80rem]",
  headerAndFooter: "text-[.66rem] md:text-[.80rem]",
  footnote: "text-[.6rem]",
}

const variants = {
  common: { classNames: `${bodyFont.className}`, style: {} }, // NOTE: shared
  h1: { classNames: `${fontSizes.h1} ${displayFont.className} font-black tracking-tight leading-tight`, style: {} },
  h2: { classNames: `${fontSizes.h2} ${headlineFont.className} font-light tracking-tight leading-tight`, style: {} },
  h3: { classNames: `${fontSizes.h3} ${headlineFont.className} text-primary opacity-50 font-light tracking-tight leading-regular`, style: {} },
  h4: { classNames: `${fontSizes.h4} ${bodyFont.className} opacity-95 font-light tracking-snug leading-snug`, style: {fontStyle: "italic"} },
  h5: { classNames: `${fontSizes.h5} ${headlineFont.className} opacity-75 font-bold tracking-wide leading-regular`, style: {} },
  h5Hl: { classNames: `${fontSizes.h5Hl} ${headlineFont.className} opacity-50 tracking-wide leading-regular`, style: {} },
  h6: { classNames: `${fontSizes.h6} ${headlineFont.className} opacity-75 font-bold tracking-wide leading-regular`, style: {} },
  h6Hl: { classNames: `${fontSizes.h6Hl} ${headlineFont.className} opacity-50 tracking-wide leading-regular`, style: {} },
  body: { classNames: `${fontSizes.body} opacity-75 tracking-wide leading-tight`, style: {} },
  caption: { classNames: `${fontSizes.caption} opacity-50 tracking-wide font-semibold leading-snug`, style: {} },
  headerAndFooter: { classNames: `${fontSizes.headerAndFooter} font-black tracking-widest leading-regular`, style: {} },
  footnote: { classNames: `${fontSizes.footnote} font-light text-center hover:cursor-none text-base-content/30 hover:text-base-content/60 leading-regular`, style: {fontStyle: "italic"} },
}

export const Copy: React.FC<Interface> = ({
  children,
  variant,
  ...props
}) => {
  return (
    variant && variant==="h1"
    ? <h1 {...props} className={`${variants.common.classNames} ${variants.h1.classNames}`} style={{...variants.common.style, ...variants.h1.style}}>{children}</h1>
    : variant && variant==="h2"
    ? <h2 {...props} className={`${variants.common.classNames} ${variants.h2.classNames}`} style={{...variants.common.style, ...variants.h2.style}}>{children}</h2>
    : variant && variant==="h3"
    ? <h3 {...props} className={`${variants.common.classNames} ${variants.h3.classNames}`} style={{...variants.common.style, ...variants.h3.style}}>{children}</h3>
    : variant && variant==="h4"
    ? <h4 {...props} className={`${variants.common.classNames} ${variants.h4.classNames}`} style={{...variants.common.style, ...variants.h4.style}}>{children}</h4>
    : variant && variant==="h5"
    ? <h5 {...props} className={`${variants.common.classNames} ${variants.h5.classNames}`} style={{...variants.common.style, ...variants.h5.style}}>{children}</h5>
    : variant && variant==="h5-hl"
    ? <h5 {...props} className={`${variants.common.classNames} ${variants.h5Hl.classNames}`} style={{...variants.common.style, ...variants.h5Hl.style}}>{children}</h5>
    : variant && variant==="h6"
    ? <h6 {...props} className={`${variants.common.classNames} ${variants.h6.classNames}`} style={{...variants.common.style, ...variants.h6.style}}>{children}</h6>
    : variant && variant==="h6-hl"
    ? <h6 {...props} className={`${variants.common.classNames} ${variants.h6Hl.classNames}`} style={{...variants.common.style, ...variants.h6Hl.style}}>{children}</h6>
    : variant && variant==="body"
    ? <p {...props} className={`${variants.common.classNames} ${variants.body.classNames}`} style={{...variants.common.style, ...variants.body.style}}>{children}</p>
    : variant && variant==="caption"
    ? <p {...props} className={`${variants.common.classNames} ${variants.caption.classNames}`} style={{...variants.common.style, ...variants.caption.style}}>{children}</p>
    : variant && variant==="header-and-footer"
    ? <p {...props} className={`${variants.common.classNames} ${variants.headerAndFooter.classNames}`} style={{...variants.common.style, ...variants.headerAndFooter.style}}>{children}</p>
    : variant && variant==="footnote"
    ? <p {...props} className={`${variants.common.classNames} ${variants.footnote.classNames}`} style={{...variants.common.style, ...variants.footnote.style}}>{children}</p>
    : <p {...props} className={`${variants.common.classNames} ${variants.body.classNames}`} style={{...variants.common.style, ...variants.body.style}}>{children}</p>
  )
};