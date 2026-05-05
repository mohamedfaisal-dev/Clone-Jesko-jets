"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

const FlightSection = () => {
  const flightRef = useRef();
  const flightTimeline = useRef();
  useGSAP(
    () => {
      flightTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".jet-image",
          start: "top center",
          end: "+=400vh",
          scrub: 2,
        },
      });

      flightTimeline.current.to(".jet-image", {
        scale: 0.6,
        ease: "none",
        duration: 10,
      });

      flightTimeline.current.to(
        ".jet-image > img",
        {
          maskSize: "100% 0%",
          ease: "none",
          duration: 8, // 1 out of 4 total duration units
        },
        9, // Start at timeline position 9 (overlapping scale)
      );

      flightTimeline.current.to(
        ".jet-blueprint",
        {
          maskSize: "100% 100%",
          // maskPosition: "50% 0%",
          ease: "none",
          duration: 8,
        },
        9,
      );

      flightTimeline.current.to(
        ".jet-title",
        {
          y: "100vh",
          ease: "none",
          duration: 10,
        },
        0,
      );

      flightTimeline.current.to(
        ".jet-description",
        {
          y: "100vh",
          ease: "none",
          duration: 10,
        },
        0,
      );

      flightTimeline.current.fromTo(
        ".jet-light-bg",
        { opacity: 0 },
        { opacity: 1, ease: "none", duration: 4 },
        0,
      );
    },
    { scope: flightRef },
  );

  return (
    <div
      ref={flightRef}
      className="w-screen relative overflow-clip bg-[#fff8ed] mt-[calc(100vh*-1.2)]"
    >
      <div className="z-50 pt-[10vh]">
        <div className="jet-scroll-area w-full h-[400vh] text-black! relative z-50">
          <div className="flight-content sticky top-0 h-screen">
            <div className="max-w-[86.5%] mx-auto jet-title w-full flex flex-col justify-center items-center h-screen gap-3">
              <div className="w-full flex justify-between items-start relative z-50">
                <h2 className="font-unbounded tracking-wide! text-[72px]!">
                  FLY IN
                </h2>

                <h2 className="font-unbounded tracking-wide! text-[72px]!">
                  LUXURY
                </h2>
              </div>

              <div className="w-full grid grid-cols-7 gap-[0.8em]!">
                <p className="font-unbounded text-[12px]! font-semibold row-start-1 col-start-1 row-end-2 col-end-2">
                  Luxury that moves <br /> with you
                </p>

                <div className="row-start-2 row-end-4 col-start-6 col-end-8">
                  <p>
                    The 650ER sets the standard for performance in business aviation. With its intercontinental range and high-speed cruise capabilities, it connects the world's business capitals.
                  </p>
                  <p className="mt-4">
                    Experience a cabin environment designed for health and comfort, featuring 100% fresh air and low cabin altitude, reducing fatigue on long journeys.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-[86.5%] mx-auto jet-description w-full h-screen flex justify-between items-start z-50 absolute inset-[auto_0_100%] py-[10vh]">
              <div className="w-full h-full grid gap-[0.833em]! grid-cols-7 grid-rows-[auto] z-50">
                <div className="flex flex-col justify-between items-start row-start-1 col-start-1 row-end-2 col-end-3">
                  <h3 className="font-unbounded tracking-wide!">650ER</h3>

                  <div className="w-full grid grid-cols-6 grid-rows-[auto] gap-y-4">
                    <div className="row-span-1 col-span-3">
                      <p className="text-[10px] uppercase text-gray-500">Range</p>
                      <p className="text-[12px]! font-bold uppercase">
                        7,500 NM
                      </p>
                    </div>
                    <div className="row-span-1 col-span-3">
                      <p className="text-[10px] uppercase text-gray-500">High Speed</p>
                      <p className="text-[12px]! font-bold uppercase">
                        Mach 0.925
                      </p>
                    </div>
                    <div className="row-span-1 col-span-3">
                      <p className="text-[10px] uppercase text-gray-500">Long Cruise</p>
                      <p className="text-[12px]! font-bold uppercase">
                        Mach 0.85
                      </p>
                    </div>
                    <div className="row-span-1 col-span-3">
                      <p className="text-[10px] uppercase text-gray-500">Max Altitude</p>
                      <p className="text-[12px]! font-bold uppercase">
                        51,000 ft
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row-start-1 col-start-3 row-end-2 col-end-6 relative">
                  <Image
                    src={"/assets/jet-blueprint.avif"}
                    alt="jet-blueprint"
                    width={1056}
                    height={1416}
                    className="jet-blueprint absolute inset-0 m-auto w-full max-w-[unset]! object-contain perspective-[1000px]"
                  />
                </div>
                <div className="row-start-1 col-start-6 row-end-2 col-end-8 gap-[20vh] flex flex-col justify-start items-start">
                  <h6 className="font-unbounded tracking-wide!">
                    Ultra long-range <br />
                    Aircraft
                  </h6>
                  <p className="text-xs!">
                    A true time-saving machine it brings Tokyo and New York an
                    hour closer, and at 92% of the speed of sound, it can circle
                    the globe with just a single stop.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="jet-light-bg w-screen h-screen pointer-events-none absolute inset-0 m-auto"
              style={{
                background: "linear-gradient(180deg, #7A716E 0%, #FFF8ED 100%)",
              }}
            ></div>
          </div>
          <div className="z-50 sticky top-[50vh] jet-image mt-[100vh]">
            <Image
              src={"/assets/jet-center.webp"}
              alt="jet-center"
              width={2880}
              height={2880}
              className="absolute inset-0 m-auto w-full max-w-[unset]! object-cover perspective-[1000px]"
            />
          </div>
        </div>
      </div>


    </div>
  );
};

export default FlightSection;
