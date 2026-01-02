
const journeySteps = [
  {
    step: "Step 1",
    title: "Product & Market Research",
    description:
      "We deeply research your product or service and analyze how your competitors are performing in the online market.",
  },
  {
    step: "Step 2",
    title: "Technology & Product Development",
    description:
      "We build or enhance your tech product based on competitor analysis, market gaps, and user expectations.",
  },
  {
    step: "Step 3",
    title: "Testing & Optimization",
    description:
      "Rigorous testing ensures your product is stable, user-friendly, and ready for real-world performance.",
  },
  {
    step: "Step 4",
    title: "Marketing Strategy Research",
    description:
      "We study competitor marketing strategies, channels, and ROI to design a high-impact growth plan.",
  },
  {
    step: "Step 5",
    title: "Marketing Execution & Scaling",
    description:
      "We apply SEO, social media, paid ads, and branding strategies to drive measurable growth.",
  },
  {
    step: "Step 6",
    title: "Market Fit & Brand Recognition",
    description:
      "Your brand achieves product–market fit, gains customer trust, and becomes a recognized name in the market.",
  },
];

const BrandJourney = () => {
  return (
    <section className="relative bg-black/80 py-4 overflow-hidden">
      {/* soft corner gradients */}
      <div className="absolute -top-28 -right-[60px] w-[360px] h-[360px] bg-orange-300 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-30 left-[60px] w-[380px] h-[360px] bg-linear-to-r from-orange-500 via-orange-400 to-orange-500 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-5 -left-[180px] w-[360px] h-[320px] bg-orange-300 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-[240px] right-[280px] w-[360px] h-[320px] bg-linear-to-r from-orange-500 via-orange-400 to-orange-500 rounded-full blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Your Brand Journey
          </h2>
          <p className="mt-3 text-[14px] sm:text-xl text-white max-w-4xl mx-auto">
            A structured path from research to recognition — designed for
            sustainable growth.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* MOBILE LINE */}

          <div className="absolute -left-2 top-0 h-full w-px bg-gray-200 md:hidden" />

          {/* DESKTOP LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200" />

          <div className="space-y-4">
            {journeySteps.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative md:grid md:grid-cols-2 md:gap-8 items-start`}
                >
                  {/* DOT */}
                  <div
                    className="
    absolute top-4
    -left-1.5 md:left-1/2
    w-4 h-4 rounded-full
    bg-gradient-to-r from-orange-400 to-orange-600
    transform -translate-x-1/2
  "
                  />

                  {/* CONTENT */}
                  <div
                    className={`pl-2 md:pl-0
                       ${
                         isEven
                           ? "md:col-start-1 md:text-right md:mt-0"
                           : "md:col-start-2 md:-mt-0"
                       }`}
                  >
                    <div className="inline-block bg-gray-50 px-2 py-2 rounded-[8px] shadow-sm hover:shadow-md transition max-w-md">
                      <span className="text-orange-500 font-semibold text-[14px]">
                        {item.step}
                      </span>
                      <h3 className="text-[16px] font-semibold text-gray-900 mt-0.5">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandJourney;
