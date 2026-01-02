import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const industries = [
  {
    title: "MSMEs",
    description:
      "Scalable digital listings and recruitment tools designed to boost business credibility, connect local job seekers, and streamline hiring for sustainable enterprise growth.",
  },
  {
    title: "Influencers & Brands",
    description:
      "End-to-end influencer marketplaces connecting niche talent with brands to amplify credibility, monetize content, and scale digital reach through strategic collaborations",
  },
  {
    title: "Property Owners",
    description:
      "Credible digital platforms for property listings and management automation that connect owners with verified seekers, streamlining rentals and maximizing occupancy rates",
  },
  {
    title: "Job Seekers",
    description:
      "Our platform streamlines hiring by matching talent with verified MSME roles, offering a direct pipeline to growth-oriented career opportunities.",
  },
];

const Navsankalp = () => {
  return (
    <section
      className="
        relative
        px-3 sm:px-6 lg:px-8
        py-6
        min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh]
        min-w-full
        bg-[url('/NavSankalp.jpg')]
        bg-cover
        bg-no-repeat
        bg-top sm:bg-center
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 items-center">
          {/* CONTENT */}
          <div className="flex flex-col items-center text-center">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold
                         bg-clip-text text-transparent
                         bg-linear-to-r from-white to-orange-600 mb-3"
            >
              Navsankalp App
            </h2>

            <p className="text-black text-[20px] sm:text-[35px] font-bold max-w-auto">
              Dil Se Dhundho, Yahi Milega
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 text-[16px] lg:grid-cols-2 gap-8">
            {industries.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8
                           transition-all duration-300
                           hover:-translate-y-2
                           hover:shadow-[0_20px_50px_rgba(255,115,0,0.25)]"
              >
                <h3 className="text-xl font-semibold text-orange-400 mb-4">
                  {item.title}
                </h3>
                <p className="text-white leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="flex justify-center pt-6">
            <Link
              href="/navsankalp-blog"
              className="
    inline-flex items-center gap-3
    bg-orange-500 text-white
    px-10 py-4
    rounded-xl font-semibold
    shadow-lg
    hover:bg-orange-600
    hover:shadow-[0_20px_40px_rgba(255,115,0,0.4)]
    transition-all
  "
            >
              Explore NavSankalp
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navsankalp;
