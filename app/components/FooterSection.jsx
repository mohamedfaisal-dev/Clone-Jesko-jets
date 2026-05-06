"use client";
import { useRef, Suspense } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

const cities = [
    "New York",
    "London",
    "Dubai",
    "Paris",
    "Tokyo",
    "Singapore",
    "Los Angeles",
    "Sydney",
    "Riyadh",
    "Shanghai",
    "Mumbai",
    "Toronto",
];

const Earth = () => {
    const arrowRef = useRef();
    const [earthTexture, arrowTexture] = useTexture([
        "/assets/earth rotation.webp",
        "/earth arrow.svg"
    ]);

    useFrame((state) => {
        if (arrowRef.current) {
            // Random "spike" to simulate data packet jumps
            const spike = Math.random() > 0.97 ? 0.15 : 0;

            // Fast "Network Jump" Pulsing effect with spikes
            const jump = 1.02 + Math.abs(Math.sin(state.clock.elapsedTime * 4)) * 0.05 + spike;

            // Smoothly interpolate current scale to target jump for less jitter
            arrowRef.current.scale.lerp(new THREE.Vector3(jump, jump, jump), 0.1);

            // Energetic rotation wiggle
            arrowRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.1;
        }
    });

    return (
        <group>
            {/* Earth Sphere - Smaller size matches reference */}
            <mesh rotation={[0, 0, 0]}>
                <sphereGeometry args={[1.8, 64, 64]} />
                <meshStandardMaterial
                    map={earthTexture}
                    roughness={0.4}
                    metalness={0.3}
                    emissive="#222222"
                    color="#ffffff"
                />
            </mesh>

            {/* Arrow Overlay Sphere - Hugs the earth closely */}
            <mesh ref={arrowRef} rotation={[0, 0, 0]}>
                <sphereGeometry args={[1.85, 64, 64]} />
                <meshStandardMaterial
                    map={arrowTexture}
                    transparent
                    opacity={0.9}
                    side={THREE.DoubleSide}
                    depthWrite={false}
                />
            </mesh>
        </group>
    );
};

const FooterSection = () => {
    const containerRef = useRef(null);
    const listRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(
        () => {
            // --- City List Animation ---
            if (listRef.current) {
                const list = listRef.current;
                const items = list.children;
                const itemHeight = items[0].offsetHeight;
                const singleSetCount = cities.length;
                const containerHeight = list.parentElement.offsetHeight;
                const centerOffset = (containerHeight - itemHeight) / 2;
                const startIndex = singleSetCount;
                const startY = centerOffset - (startIndex * itemHeight);

                gsap.set(list, { y: startY });
                gsap.set(items, { opacity: 0.2, scale: 0.9, color: "#fff8ed" });
                gsap.set(items[startIndex], { opacity: 1, scale: 1.1, color: "#ffffff" });

                const tl = gsap.timeline({ repeat: -1 });

                for (let i = 0; i < singleSetCount; i++) {
                    const currentIndex = startIndex + i;
                    const nextIndex = startIndex + i + 1;
                    const nextY = centerOffset - (nextIndex * itemHeight);

                    tl.to(list, { y: nextY, duration: 1.5, ease: "power2.inOut" })
                        .to(items[currentIndex], { opacity: 0.2, scale: 0.9, duration: 1.5, ease: "power2.inOut" }, "<")
                        .to(items[nextIndex], { opacity: 1, scale: 1.1, duration: 1.5, ease: "power2.inOut" }, "<")
                        .to({}, { duration: 1 });
                }
            }

            // --- Global Text Parallax ---
            gsap.fromTo(
                textRef.current,
                { y: "50%" },
                {
                    y: "-50%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                }
            );
        },
        { scope: containerRef }
    );

    return (
        <section
            ref={containerRef}
            className="w-full min-h-[150vh] bg-[#050505] relative overflow-hidden flex flex-col text-[#fff8ed]"
        >
            {/* ==================== 
                PART 1: CITY LIST (Top Half) 
               ==================== */}
            <div className="relative z-30 w-full pt-20 pb-10 flex justify-center items-center h-[50vh]">
                <div className="flex items-center justify-center gap-4 md:gap-8 text-xl md:text-3xl font-unbounded">
                    <div className="opacity-80">Fly anywhere</div>
                    <div className="flex items-center gap-4 opacity-50">
                        <div className="w-8 md:w-16 h-[1px] bg-[#fff8ed]"></div>
                        <div className="w-6 h-6 md:w-8 md:h-8 text-[#fff8ed]">
                            <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0354 9.33333L6.66699 14.6667L5.33366 14.6667L7.01786 9.33333L3.44479 9.33333L2.33366 11.3333L1.33366 11.3333L2.00033 8.33333L1.33366 5.33333L2.33366 5.33333L3.44479 7.33333L7.01786 7.33333L5.33366 2L6.66699 2L10.0354 7.33333L13.667 7.33333C14.2193 7.33333 14.667 7.78107 14.667 8.33333C14.667 8.8856 14.2193 9.33333 13.667 9.33333L10.0354 9.33333Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <div className="w-8 md:w-16 h-[1px] bg-[#fff8ed]"></div>
                    </div>

                    <div className="h-[20vh] md:h-[30vh] overflow-hidden relative w-[200px] md:w-[300px] flex items-center">
                        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#050505] via-transparent via-30% to-[#050505]"></div>
                        <div ref={listRef}>
                            {[...cities, ...cities, ...cities].map((city, i) => (
                                <div key={i} className="text-center text-3xl md:text-5xl font-bold py-2 transition-all">
                                    {city}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Gradient to blend into earth section below */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10"></div>
            </div>

            {/* ==================== 
                PART 2: GLOBAL EARTH (Bottom Half) 
               ==================== */}
            <div className="relative w-full flex-grow z-10 -mt-20">
                {/* Background Global Text */}
                <div
                    ref={textRef}
                    className="absolute inset-x-0 top-[10%] flex justify-center pointer-events-none opacity-80 z-0 scale-150 md:scale-110"
                >
                    <Image
                        src="/global text.svg"
                        alt="Global"
                        width={1440}
                        height={360}
                        className="w-full max-w-[90vw] object-contain"
                    />
                </div>

                {/* Main 3D Canvas Container - Pushed down */}
                <div className="relative w-full h-[80vh] flex justify-center items-center z-30 translate-y-48">
                    {/* Left Text */}
                    <div className="hidden md:block absolute left-10 lg:left-20 top-1/2 -translate-y-1/2 max-w-xs z-20 pointer-events-none">
                        <h2 className="text-2xl md:text-3xl font-bold leading-[1.1] tracking-tight drop-shadow-2xl">
                            Fly anywhere with <br /> total comfort and <br /> control
                        </h2>
                    </div>

                    {/* Right Text - Contact Info */}
                    <div className="hidden md:block absolute right-10 lg:right-20 top-1/2 -translate-y-1/2 text-right z-20 pointer-events-none">
                        <div className="mb-6 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                            <p className="text-xs uppercase tracking-wider opacity-60 mb-3">Portfolio Contact</p>
                            <a href="mailto:mohamedfaisal.dev@gmail.com" className="font-bold text-base mb-2 block hover:text-purple-400 transition-colors pointer-events-auto">
                                mohamedfaisal.dev@gmail.com
                            </a>
                            <a href="tel:+971544325050" className="font-bold text-base mb-4 block hover:text-purple-400 transition-colors pointer-events-auto">
                                +971 54 432 5050
                            </a>
                            <div className="flex flex-col items-end gap-1 text-[10px] uppercase font-bold tracking-widest opacity-60 border-t border-white/10 pt-3">
                                <span>Available for</span>
                                <span>Freelance & Full-time</span>
                            </div>
                        </div>
                    </div>

                    <Canvas className="w-full h-full" camera={{ position: [0, 0, 6.5], fov: 40 }}>
                        <ambientLight intensity={2} />
                        <pointLight position={[-5, 5, 5]} intensity={10} color="#ffffff" />
                        <pointLight position={[5, -5, -5]} intensity={5} color="#ffffff" />
                        <Suspense fallback={null}>
                            <Earth />
                        </Suspense>
                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            autoRotate
                            autoRotateSpeed={1.5}
                            enableDamping
                            dampingFactor={0.05}
                            rotateSpeed={0.5}
                        />
                    </Canvas>

                    {/* Contact Buttons - Moved to Bottom */}
                    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex flex-col md:flex-row gap-3 items-center">
                        <a 
                            href="mailto:mohamedfaisal.dev@gmail.com"
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-bold flex items-center gap-2 hover:scale-110 transition-transform shadow-lg shadow-purple-500/30"
                        >
                            Get in Touch
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 2L11 13"></path>
                                <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                            </svg>
                        </a>
                        <a 
                            href="tel:+971544325050"
                            className="bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded-full font-bold flex items-center gap-2 hover:scale-110 transition-transform shadow-lg shadow-white/20"
                        >
                            Call Now
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Footer Links - Very Small Font */}
                <div className="absolute bottom-6 md:bottom-10 w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-4 text-[7px] md:text-[8px] uppercase font-bold tracking-widest opacity-40 font-mono z-20">
                    <div className="flex flex-col gap-2 items-center md:items-start">
                        <div className="w-8 h-[1px] bg-white mb-2"></div>
                        <p className="text-center md:text-left">©2026 PORTFOLIO SHOWCASE - CLONED FOR DEMONSTRATION</p>
                        <p className="text-purple-400 opacity-60">Original Design by Jesko Jets | Recreated by Mohamed Faisal</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
                        <div className="flex flex-col gap-1 items-center md:items-start">
                            <span className="text-purple-400">Showcasing Skills:</span>
                            <span className="opacity-60">Next.js • GSAP • Three.js • Tailwind</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>Mohamed Faisal</span>
                            <div className="w-3 h-3 border border-purple-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterSection;
