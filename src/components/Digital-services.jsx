"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  FaShareAlt,
  FaBullhorn,
  FaUsers,
  FaPalette,
  FaSearch,
  FaMicrophoneAlt,
  FaTimes,
} from "react-icons/fa";


const services = [
  {
    title: "Social Media Page Management",
    shortDesc: "Scalable, secure, and high-performance digital brand handling.",
    fullDesc: "...",
    icon: <FaShareAlt />,
    image: "/SocialMediaMarketing.jpeg",
  },
  {
    title: "Paid Ads",
    shortDesc: "Result-driven paid campaigns for maximum ROI.",
    fullDesc: "...",
    icon: <FaBullhorn />,
    image: "/paid-ads.jpeg",
  },
  {
    title: "Influencer Marketing",
    shortDesc: "Brand collaborations that drive trust and reach.",
    fullDesc: "...",
    icon: <FaUsers />,
    image: "/influencer-marketing.jpeg",
  },
  {
    title: "Graphic Designing",
    shortDesc: "Creative visuals aligned with brand identity.",
    fullDesc: "...",
    icon: <FaPalette />,
    image: "/graphic.jpeg",
  },
  {
    title: "Search Engine Optimization",
    shortDesc: "Improve visibility and organic traffic.",
    fullDesc: "...",
    icon: <FaSearch />,
    image: "/SearchEngineOptimization.jpeg",
  },
  {
    title: "Podcast Services",
    shortDesc: "Amplify Your Brand Voice Through Engaging Audio Content",
    fullDesc: "...",
    icon: <FaMicrophoneAlt />,
    image: "/customize-web-development.jpeg",
  },
];


const DigitalServices = ({ variant = "services" }) => {
  const [activeService, setActiveService] = useState(null);
  const router = useRouter();

  const handleShowMore = (service) => {
    if (variant === "home") {
      router.push("/marketing-services");
    } else {
      setActiveService(service);
    }
  };

  return (
    <section className="bg-gray-50 py-4 px-2">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Our Digital Marketing Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-4xl mx-auto text-[16px]">
            We build reliable digital solutions using modern marketing and
            technology practices.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
          {services.map((service, index) => {
            const isHome = variant === "home";

            return (
              <div
                key={index}
                onClick={() => isHome && handleShowMore(service)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
        ${isHome ? "text-white" : " border"}`}
                style={
                  isHome
                    ? {
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : {}
                }
              >
                {/* OVERLAY ONLY ON HOME */}
                {isHome && <div className="absolute inset-0 bg-black/60"></div>}

                {/* CONTENT */}
                <div className="relative z-10 p-3 h-full flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-lg text-xl
      ${isHome ? "bg-white/20 text-orange-400" : "text-orange-400"}`}
                    >
                      {service.icon}
                    </div>

                    <h3 className="text-[18px] text-orange-400 font-semibold leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p
                    className={`text-sm leading-relaxed mb-4
            ${isHome ? "text-gray-200" : "text-gray-600"}`}
                  >
                    {service.shortDesc}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShowMore(service);
                    }}
                    className={`font-medium text-sm text-start underline-offset-4
            ${
              isHome
                ? "text-orange-400 hover:underline"
                : "text-orange-500 hover:underline"
            }`}
                  >
                    Show More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL ONLY FOR SERVICES PAGE */}
      {variant === "services" && activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setActiveService(null)}
          ></div>

          <div className="relative bg-white max-w-lg w-full rounded-2xl p-8 z-10">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <FaTimes />
            </button>

            <div
              className="w-14 h-14 flex items-center justify-center rounded-xl
                            bg-orange-50 text-orange-400 text-2xl mb-6"
            >
              {activeService.icon}
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {activeService.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {activeService.fullDesc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default DigitalServices;
