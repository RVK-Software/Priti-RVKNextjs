"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const desktopSlides = [
  "/RVK-desktop-banner1.jpg",
  "/RVK-desktop-banner2.jpg",
  "/RVK-desktop-banner3.jpg",
];

const mobileSlides = [
  "/RVK-mobile-banner1.jpg",
  "/RVK-mobile-banner2.jpg",
  "/RVK-mobile-banner3.jpg",
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen(); // initial
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const slides = isMobile ? mobileSlides : desktopSlides;

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Auto slide
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full overflow-hidden
        min-h-[60vh]
        md:min-h-full
        lg:min-h-full">
      <div className="w-full pt-16 pb-2 lg:pt-16 lg:pb-0">
        <Image
          src={slides[current]}
          alt={`Banner ${current + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
          width={1920}
          height={1000}
          priority
        />
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2
                   bg-black/40 text-white p-2 rounded-full
                   hover:bg-black/60 transition"
        aria-label="Previous Slide"
      >
        <FaChevronLeft />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-3 lg:right-4 top-1/2 -translate-y-1/2
                   bg-black/40 text-white p-2 rounded-full
                   hover:bg-black/60 transition"
        aria-label="Next Slide"
      >
        <FaChevronRight />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition
              ${index === current ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
