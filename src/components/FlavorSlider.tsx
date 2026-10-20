import { useGSAP } from "@gsap/react"
import { flavorlists } from "../constants"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const FlavorSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" })

  useGSAP(
    () => {
      const slider = sliderRef.current
      if (!slider) return

      const scrollAmount = slider.scrollWidth - window.innerWidth

      if (!isTablet) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".flavor-section",
            start: "2% top",
            end: `+=${scrollAmount + 1000}`,
            pin: true,
            scrub: true,
          },
        })

        tl.to(".flavor-section", {
          x: -(scrollAmount + 1000),
          ease: "power1.inOut",
        })
      }

      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top top",
          end: "bottom 80%",
          scrub: true,
        },
      })

      titleTl
        .to(".first-text-split", { xPercent: -30, ease: "power1.inOut" })
        .to(".flavor-text-scroll", { xPercent: -22, ease: "power1.inOut" }, "<")
        .to(".second-text-split", { xPercent: -10, ease: "power1.inOut" }, "<")
    },
    { dependencies: [isTablet], revertOnUpdate: true }
  )

  return (
    <div className="slider-wrapper" ref={sliderRef}>
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <img src={`/images/${flavor.color}-bg.svg`} alt={flavor.name} className="absolute bottom-0" />
            <img src={`/images/${flavor.color}-drink.webp`} alt={flavor.name} className="drinks" />
            <img src={`/images/${flavor.color}-elements.webp`} alt={flavor.name} className="elements" />
            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FlavorSlider