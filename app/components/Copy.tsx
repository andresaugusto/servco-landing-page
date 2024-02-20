import { Interface } from "@/app/page";
import { Archivo_Black, Montserrat, Jost, Nunito_Sans } from 'next/font/google'

// const displayFont = Nunito_Sans({
//   subsets: ['latin'],
// })
const displayFont = Archivo_Black({
  subsets: ['latin'],
  weight: ['400']
})
const headlineFont = Jost({
  subsets: ['latin'],
})
const bodyFont = Montserrat({
  subsets: ['latin'],
})

const fontSizes = {
  h1: "text-[2rem] xl:text-[6vmin]",
  h2: "text-[1.5rem] xl:text-[3vmin]",
  h3: "text-[1.3rem] xl:text-[2.8vmin]",
  h4: "text-[.8rem] xl:text-[1.4vmin]",
  h5: "text-[1rem] xl:text-[2vmin]",
  h5Hl: "text-[1rem] xl:text-[2vmin]",
  h6: "text-[.82rem] xl:text-[1.6vmin]",
  h6Hl: "text-[.82rem] xl:text-[1.6vmin]",
  body: "text-[.66rem] xl:text-[1.2vmin]",
  caption: "text-[.66rem] xl:text-[1.2vmin]",
  headerAndFooter: "text-[.66rem] xl:text-[1.2vmin]",
  footnote: "text-[.6rem] xl:text-[1.2vmin]",
}

const variantStyling = {
  h1: "font-black tracking-tight leading-tight",
  h2: "font-light tracking-tight leading-tight",
  h3: "text-primary opacity-50 font-light tracking-tight leading-regular",
  h4: "opacity-95 font-light tracking-snug leading-snug",
  h5: "opacity-75 font-bold tracking-wide leading-regular",
  h5Hl: "opacity-50 tracking-wide leading-regular",
  h6: "opacity-75 font-bold tracking-wide leading-regular",
  h6Hl: "opacity-50 tracking-wide leading-regular",
  body: "opacity-75 tracking-wide leading-tight",
  caption: "opacity-50 tracking-wide font-semibold leading-snug",
  headerAndFooter: "font-black tracking-widest leading-regular",
  footnote: "font-light text-center hover:cursor-none text-base-content/30 hover:text-base-content/60 leading-regular",
}

const variants = {
  common: { classNames: `${bodyFont.className}`, style: {} }, // shared
  h1: { classNames: `${fontSizes.h1} ${displayFont.className} ${variantStyling.h1}`, style: {} },
  h2: { classNames: `${fontSizes.h2} ${headlineFont.className} ${variantStyling.h2}`, style: {} },
  h3: { classNames: `${fontSizes.h3} ${headlineFont.className} ${variantStyling.h3}`, style: {} },
  h4: { classNames: `${fontSizes.h4} ${bodyFont.className} ${variantStyling.h4}`, style: {fontStyle: "italic"} },
  h5: { classNames: `${fontSizes.h5} ${headlineFont.className} ${variantStyling.h5}`, style: {} },
  h5Hl: { classNames: `${fontSizes.h5Hl} ${headlineFont.className} ${variantStyling.h5Hl}`, style: {} },
  h6: { classNames: `${fontSizes.h6} ${headlineFont.className} ${variantStyling.h6}`, style: {} },
  h6Hl: { classNames: `${fontSizes.h6Hl} ${headlineFont.className} ${variantStyling.h6Hl}`, style: {} },
  body: { classNames: `${fontSizes.body} ${variantStyling.body}`, style: {} },
  caption: { classNames: `${fontSizes.caption} ${variantStyling.caption}`, style: {} },
  headerAndFooter: { classNames: `${fontSizes.headerAndFooter} ${variantStyling.headerAndFooter}`, style: {} },
  footnote: { classNames: `${fontSizes.footnote} ${variantStyling.footnote}`, style: {fontStyle: "italic"} },
}

const Copy: React.FC<Interface> = ({
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
}

export default Copy