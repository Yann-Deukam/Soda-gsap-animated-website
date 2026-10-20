import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar"
import HeroSection from "./sections/HeroSection"
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(()=>{
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    })
  })
  return (
    <main>
      <Navbar/>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection/>
          <MessageSection/>
          <FlavorSection/>
      <div className="h-dvh">

      </div>
        </div>
      </div>
    </main>
  )
}

export default App