"use client";
import Image from "next/image";
import  Link from "next/link";
import {
  FaCode,
  FaMobileAlt,
  FaGlobe,
  FaShoppingCart,
  FaCloud,
  FaCogs,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "Architecting scalable, secure, and high-performance software tailored to complex business requirements.",
    icon: <FaCode />,
    image: "/web development.jpeg",
  },
  {
    title: "App Development",
    description:
      "Engineering high-performance Android and iOS applications focused on scalability and seamless user experience.",
    icon: <FaMobileAlt />,
    image: "/app development.jpeg",
  },
  {
    title: "Wordpress Web Development",
    description:
      "Engineering modern, responsive, SEO-optimized websites powered by cutting-edge frontend technologies.",
    icon: <FaGlobe />,
    image: "/Best WordPress Development Services Agency (1).jpeg",
  },
  {
    title: "E-Commerce",
    description:
      "Robust e-commerce platforms designed to maximize conversions and customer engagement.",
    icon: <FaShoppingCart />,
    image: "/e-commerce.jpeg",
  },
  {
    title: "Custom Website Development",
    description:
      "Cloud-native architectures, migrations, and DevOps pipelines for reliable deployments.",
    icon: <FaCloud />,
    image: "/customer website development.jpeg",
  },
  {
    title: "Software Development",
    description:
      " Architecting bespoke CRM ecosystems that automate internal workflows and foster long-term customer retention.",
    icon: <FaCogs />,
    image: "/software development.jpeg",
  },
];

const Services = ({ mode = "redirect", onSelectService }) => {
  return (
    <section className="bg-orange-50 pt-6 px-4">
      <div className="max-w-7xl mx-auto pb-8">
        {/* HEADING */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Key Areas of Our Tech Stack
          </h2>
          <p className="mt-2 text-gray-600 text-[16px] max-w-3xl mx-auto">
            We help businesses build modern digital products using cutting-edge
            technologies and proven engineering practices.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[260px] rounded-2xl overflow-hidden shadow-lg"
            >
              {/* BACKGROUND IMAGE */}
              <Image
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover
                           group-hover:scale-110 transition-transform duration-500"
                width={500}
                height={500}
              />

              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* CONTENT */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-end text-white">
                <div className="flex items-center gap-3 mb-3 text-orange-400 text-xl">
                  {service.icon}
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>

                <p className="text-sm text-gray-200 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                {mode === "redirect" ? (
                  <Link
                    href="/technologies"
                    className="mt-4 inline-block text-sm font-medium text-orange-400
                               group-hover:translate-x-1 transition"
                  >
                    Learn More →
                  </Link>
                ) : (
                  <button
                    onClick={() =>
                      onSelectService && onSelectService(service)
                    }
                    className="mt-4 text-sm font-medium text-orange-400
                               group-hover:translate-x-1 transition text-left"
                  >
                    Learn More →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
