import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";

function SkyBackground() {
  const cloudRef = useRef();
  const cloudTimeline = useRef();

  useGSAP(() => {
    // Cloud parallax animations
    cloudTimeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: "[data-gsap-cloud-bg]",
        start: "top top",
        end: "top center",
        endTrigger: "[data-about-parallax]",
        scrub: 1,
      },
    });

    cloudTimeline.current
      .fromTo(
        "[data-gsap-cloud-bg]",
        { y: "0vh" },
        { y: "-20vh", ease: "none" },
      )
      .fromTo(".sky-about", { y: "0vh" }, { y: "-20vh", ease: "none" }, "=");
  });
  return (
    <div
      ref={cloudRef}
      className="sky-container absolute top-0 bottom-0 left-0 right-0 m-auto z-10"
    >
      <div data-gsap-cloud-bg className="sky-hero relative h-[200vh]">
        <Image
          src="/assets/cloud-bg.webp"
          alt="Cloud background"
          width={2176}
          height={1088}
          className="z-10 w-full h-full object-cover align-middle inline-block"
          sizes="100vw"
        />

        <div
          className="absolute top-[20%] w-screen h-[80%] z-20"
          style={{
            background:
              "linear-gradient(180deg, rgba(1, 90, 169, 0.00) 0%, rgba(1, 90, 169, 0.01) 11.79%, rgba(1, 90, 169, 0.03) 21.38%, rgba(1, 90, 169, 0.07) 29.12%, rgba(1, 90, 169, 0.12) 35.34%, rgba(1, 90, 169, 0.18) 40.37%, rgba(1, 90, 169, 0.25) 44.56%, rgba(1, 90, 169, 0.33) 48.24%, rgba(1, 90, 169, 0.41) 51.76%, rgba(1, 90, 169, 0.50) 55.44%, rgba(1, 90, 169, 0.59) 59.63%, rgba(1, 90, 169, 0.67) 64.66%, rgba(1, 90, 169, 0.76) 70.88%, rgba(1, 90, 169, 0.85) 78.62%, rgba(1, 90, 169, 0.93) 88.21%, #015AA9 100%)",
          }}
          data-gsap-cloud-overlay
        />
      </div>

      <div className="sky-about relative w-full h-[300vh]">
        <Image
          src="/assets/sky-about.avif"
          alt="Sky background"
          width={2176}
          height={1088}
          className="z-20 w-full h-full object-fill relative"
          sizes="100vw"
        />

        <div
          style={{
            background:
              "linear-gradient(180deg, #015AA9 0%, #8FC2D7 50%, #FFF8ED 100%)",
          }}
          className="w-full h-full absolute top-0 z-10"
        />
      </div>
    </div>
  );
}

export default SkyBackground;
