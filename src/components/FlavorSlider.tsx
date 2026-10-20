import { useGSAP } from "@gsap/react"
import { flavorlists } from "../constants"
import gsap from "gsap"
import { useRef } from "react";

const FlavorSlider = () => {

const sliderRef = useRef<HTMLDivElement | null>(null);

useGSAP(()=>{
    const slider = sliderRef.current
    if (!slider) return
    const scrollAmount = slider.scrollWidth - window.innerWidth;

    const tl=gsap.timeline({
        scrollTrigger:{
            trigger:".flavor-section",
            start:"2% top",
            end: `+=${scrollAmount +1000}px`,
            pin: true,
            scrub:true,
        }
    })

    tl.to(".flavor-section", {
        x: `-${scrollAmount+1000}px`,
        ease:"power1.inOut"
    })

    const titleTl = gsap.timeline({
        scrollTrigger:{
            trigger:".flavor-section",
            start:"top top",
            end:"bottom 80%",
            scrub:true,
        },

    })

    titleTl.to(".first-text-split", {
        xPercent: -30,
        ease:"power1.inOut"
    }).to(".flavor-text-scroll", {
        xPercent: -22,
        ease:"power1.inOut"
    }, "<").to(".second-text-split", {
        xPercent: -10,
        ease:"power1.inOut"
    }, "<")
})

  return (
    <div className="slider-wrapper" ref={sliderRef}>
      <div className="flavors">
        {
            flavorlists.map((flavor) =>(    
                <div key={flavor.name} className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90Vw] md:h-[50Vh] h-80 flex-none ${flavor.rotation}`}>
                    <img src={`/images/${flavor.color}-bg.svg`} alt={flavor.name} className="absolute bottom-0"/>
                    <img src={`/images/${flavor.color}-drink.webp`} alt={flavor.name} className="drinks"/>
                    <img src={`/images/${flavor.color}-elements.webp`} alt={flavor.name} className="elements"/>

                    <h1>{flavor.name} </h1>
                </div>
                )
            )
        }
      </div>
    </div>
  )
}

export default FlavorSlider