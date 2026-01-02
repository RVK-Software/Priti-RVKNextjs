"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import {useLocation } from "next/navigation";
import Link from "next/link";

const CTA = () => {
  const location = useLocation();

  // Hide CTA on Contact page
  if (location.pathname === "/contact") {
    return null;
  }

  return (
    <section className="p-6 mb-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-black rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-3 items-center p-4 px-4">
            
            {/* LEFT CONTENT */}
            <div className="text-white z-10">
              <h1 className="text-xl lg:text-3xl font-bold leading-tight mb-5">
                Boost Your Business with <br />
                <span className="text-white">Advanced Mobile Apps</span>
              </h1>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-white px-4 py-3 rounded-lg
                           text-white hover:bg-white hover:text-black
                           transition-all duration-300"
              >
                Contact us Today!
                <FaArrowRight />
              </Link>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative flex justify-center items-center">
              <Image
                src="/CTA-image (2).jpg"
                alt="App Screen"
                className="w-full h-[280px] rounded-2xl object-contain"
                width={500}
                height={500}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

