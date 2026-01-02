import { FaBullhorn, FaChartLine, FaUsers, FaLightbulb } from "react-icons/fa";
import DigitalServices from "../../components/Digital-services";
import MarketingSixPoints from "../../components/MarketingPoints";
import Image from "next/image";

const recommendations = [
  {
    icon: <FaBullhorn />,
    title: "Clear Brand Positioning",
    desc: "Define what makes your product unique. A clear value proposition helps customers instantly understand why they should choose you.",
  },
  {
    icon: <FaUsers />,
    title: "Audience-First Strategy",
    desc: "Marketing works best when tailored to a specific audience. Understand user intent, pain points, and buying behavior.",
  },
  {
    icon: <FaChartLine />,
    title: "Data-Driven Decisions",
    desc: "Track performance across channels and optimize continuously. Data removes guesswork from marketing.",
  },
  {
    icon: <FaLightbulb />,
    title: "Consistent Messaging",
    desc: "Consistency across ads, website, and social platforms builds trust and long-term brand recall.",
  },
];

export default function Page () {
  return (
    <section className="bg-linear-to-r to-orange-400 via-transparent from-black">

      {/* ================= BANNER ================= */}
<div className="relative h-[72vh] min-h-[500px] overflow-hidden">
  {/* Banner Image */}
  <Image
    src="/marketing desktop.jpg"
    alt="Technologies Banner"
    className="
      absolute inset-0
      w-full h-full
      object-cover
      hidden sm:block
    "
    width={500}
    height={500}
  />

  {/* Mobile Image */}
  <Image
    src="/marketing mobile .jpg"
    alt="Technologies Banner Mobile"
    className="
      absolute inset-0
      w-full h-full
      object-cover
      sm:hidden
    "
    width={500}
    height={500}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/45"></div>

  {/* Optional Texture Overlay */}
  <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] bg-repeat"></div>

  {/* Content */}
  <div className="relative h-full flex items-center justify-center text-center px-6">
    <div className="max-w-4xl animate-fadeInUp">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        Marketing That Drives Growth
      </h1>
      <p className="mt-6 text-lg text-gray-200">
        Strategic marketing solutions designed to build visibility,
              generate leads, and convert attention into revenue.
      </p>
    </div>
  </div>
</div>


      <DigitalServices />

      {/* ================= WHAT WE RECOMMEND ================= */}
      <div className="relative overflow-hidden">
  {/* Animated Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-200/40 via-white to-blue-200/40 animate-gradientMove"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 py-8">
    <div className="text-center mb-8">
      <h2 className="text-[20px] lg:text-4xl font-bold text-gray-900">
        What We Recommend
      </h2>
      <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
        Our marketing approach focuses on long-term value, scalability,
        and measurable business outcomes.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      {recommendations.map((item, index) => (
        <div
          key={index}
          className="
            group
            relative
            rounded-2xl
            p-6
            bg-white/70
            backdrop-blur-xl
            border border-white/40
            shadow-lg
            transition-all
            duration-500
            hover:-translate-y-3
            hover:scale-[1.03]
          "
        >
          {/* Glow Effect */}
          <div
            className="
              absolute
              inset-0
              rounded-2xl
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
              bg-gradient-to-r
              from-orange-200/40
              via-pink-200/30
              to-blue-200/40
              blur-xl
            "
          ></div>

          <div className="relative z-10">
            {/* Icon */}
            <div
              className="
                text-orange-500
                text-3xl
                mb-5
                transition-all
                duration-200
                group-hover:text-orange-600
              "
            >
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* ================= OUR OPINION ================= */}
      <MarketingSixPoints />

    </section>
  );
};

