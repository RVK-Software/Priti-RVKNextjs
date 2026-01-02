"use client";
import { useState } from "react";
import {
  FaCode,
  FaCloud,
  FaMobileAlt,
  FaDatabase,
  FaCogs,
  FaShieldAlt,
} from "react-icons/fa";
import Services from "../../components/Technologies";
import TechSixPoints from "../../components/TechPoints";
import Image from "next/image";

const technologies = [
  {
    icon: <FaCode />,
    title: "Web Application Development",
    desc: "Custom, responsive, and scalable web solutions using modern technologies.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Application Development",
    desc: "Native and cross-platform apps for Android and iOS.",
  },
  {
    icon: <FaCloud />,
    title: "E-Commerce Solutions Development",
    desc: "Secure, scalable online stores with payment gateway and inventory integration.",
  },
  {
    icon: <FaDatabase />,
    title: "Custom Software Development",
    desc: "Tailored software solutions designed to meet specific business requirements.",
  },
  {
    icon: <FaCogs />,
    title: "AI & Machine Learning Engineering",
    desc: "Process automation and third-party integrations to streamline operations.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Cloud Computing & DevOps Services",
    desc: "Cloud infrastructure setup, CI/CD pipelines, deployment automation, and system optimization.",
  },
];

export default function Page() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="bg-gray-50 overflow-hidden">
      {/* ================= BANNER ================= */}
      <div className="relative h-[72vh] min-h-[500px] overflow-hidden">
        <Image
          src="/technologies desktop.jpg"
          alt="Technologies Banner"
          className="absolute inset-0 w-full h-full object-cover hidden sm:block"
          width={500}
          height={500}
        />

        <Image
          src="/technologies mobile.jpg"
          alt="Technologies Banner Mobile"
          className="absolute inset-0 w-full h-full object-cover sm:hidden"
          width={500}
          height={500}
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl animate-fadeInUp">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Technologies That Power the Future
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              We build secure, scalable, and future-ready technology solutions
              using modern tools and proven engineering practices.
            </p>
          </div>
        </div>
      </div>

      {/* ================= SERVICES ================= */}
      <Services
        mode="modal"
        onSelectService={(service) => setSelectedService(service)}
      />

      {/* ================= TECHNOLOGY STACK ================= */}
      <div className="max-w-7xl mx-auto px-3 py-6">
        <div className="text-center mb-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Our Technology Capabilities
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We choose technologies that scale with your business and adapt to
            future demands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {technologies.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-md transition-all duration-500 hover:-translate-y-3"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

              <div className="relative z-10">
                <div className="text-orange-500 text-3xl mb-4 transition-transform duration-500 ">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SERVICE MODAL ================= */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-white max-w-lg w-full rounded-2xl shadow-2xl p-8 relative animate-fadeInUp">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <div className="text-orange-500 text-4xl mb-4">
              {selectedService.icon}
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {selectedService.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {selectedService.description}
            </p>
          </div>
        </div>
      )}
      <TechSixPoints />
    </section>
  );
}
