"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero = () => {
  const heroRef = useRef();
  const heroTimeline = useRef();

  useGSAP(
    () => {
      // Hero section animations
      heroTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          endTrigger: ".anchor-about",
          scrub: 1,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        },
      });

      heroTimeline.current
        .fromTo(
          "[data-gsap-hero-image-container]",
          { scale: 1.3 },
          { scale: 6, ease: "none" },
        )
        .fromTo(
          ".hero-text-container",
          { x: 0, z: 0 },
          { x: -500, z: 2000, ease: "none" },
          "<", // Start at the same time as previous animation
        );
    },
    { scope: heroRef, dependencies: [] },
  );

  return (
    <section
      ref={heroRef}
      className="hero-section relative w-full h-screen flex flex-col justify-start items-center z-30 overflow-clip"
    >
      <div
        data-gsap-hero-scroll-area
        className="relative w-screen h-[200vh] z-40 perspective-[1000px]"
      >
        {/* HERO TEXT */}

        <div className="hero-text-container relative flex justify-between items-center top-0 w-full h-[calc(80vh-64px)] z-50 max-w-[90%] mx-auto xl:mt-32 transform-3d">
          <div className="hero-text__left w-full h-full flex flex-col justify-between items-start">
            <h2 className="font-unbounded">
              Defined by <br /> Freedom
            </h2>
            <div className="w-full flex flex-col justify-center items-start pl-10 gap-4 max-w-[55%]">
              <h4>
                Your <br /> time is <br /> invaluable
              </h4>
              <p className="font-bold text-white text-[11px] whitespace-break-spaces">
                Experience unparalleled luxury and efficiency with our world-class
                fleet. Where your journey begins is as important as where it ends.
              </p>
            </div>
          </div>

          <div className="hero-text__right w-full h-full flex flex-col justify-end items-end gap-16">
            <h2 className="font-unbounded text-right">
              Defined by <br /> Freedom
            </h2>
            <p className="font-bold text-white text-[11px]">SCROLL DOWN</p>
          </div>
        </div>

        {/* HERO IMAGES */}

        <div
          data-gsap-hero-image-container
          className="absolute top-0 w-screen h-screen z-40"
        >
          <Image
            data-image-window
            src="/assets/window-main.webp"
            alt="Aircraft window view"
            width={1806}
            height={903}
            className="w-screen h-screen object-cover absolute inset-0 m-auto z-50"
            sizes="100vw"
            priority
          />

          <Image
            src="/assets/window-outline.webp"
            alt="Window outline"
            width={2176}
            height={1088}
            className="w-screen h-screen object-cover absolute inset-0 m-auto z-50"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <div className="anchor-about w-full h-[75vh]" />
    </section>
  );
};

export default Hero;
