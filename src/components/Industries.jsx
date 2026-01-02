import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
const industries = [
  {
    title: "Banking & Finance",
    image: "/banking&finance.jpg",
  },
  {
    title: "E-Commerce",
    image: "/e-commerce.jpg",
  },
  {
    title: "Healthcare",
    image: "/healthcare.jpg",
  },
  {
    title: "EV Solutions",
    image: "/ev solutions.jpg",
  },
  {
    title: "Travel & Hospitality",
    image: "/travel hospitality.jpg",
  },
  {
    title: "Real Estate",
    image: "/real estate.jpg",
  },
];

const Industries = () => {
  return (
    <section className="bg-gray-50 py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-xl font-semibold text-orange-500 bg-orange-100 rounded-xl">
              Industries We Serve
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Tailored Digital Solutions for
              <span className="text-orange-500"> Every Industry</span>
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We partner with businesses across diverse industries to build
              scalable, secure, and future-ready digital products. Our approach
              blends deep domain understanding with cutting-edge technology.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Industry-specific architecture & UX",
                "Scalable & secure solutions",
                "Compliance-ready development",
                "High-performance & growth-focused",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <FaCheckCircle className="text-orange-500 text-lg" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact">
              <button className="inline-flex items-center justify-center px-6 py-4 bg-orange-500 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-600 transition">
                Discuss Your Industry
              </button>
            </Link>
          </div>

          {/* RIGHT INDUSTRIES GRID */}
          <div className="grid sm:grid-cols-2 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="group relative h-48 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              >
                {/* BACKGROUND IMAGE */}
                <Image
                  src={industry.image}
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                  width={500}
                  height={500}
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

                {/* CONTENT */}
                <div className="relative z-10 h-full flex items-end p-6">
                  <h3 className="text-white text-xl font-semibold leading-snug">
                    {industry.title}
                  </h3>
                </div>

                {/* HOVER BORDER EFFECT */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-400 transition" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
