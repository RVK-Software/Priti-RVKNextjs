const MarketingSixPoints = () => {
  const marketingPoints = [
    {
      heading: "Finding Your Ideal Customer",
      description:
        "We stop chasing everyone and start attracting the specific people who truly love and value what you do.",
    },
    {
      heading: "Being Seen Where It Matters",
      description:
        "We help you show up on the first page of search results, right when someone is looking for a solution.",
    },
    {
      heading: "Ads That Make Sense",
      description:
        "We create ads that feel like a helpful suggestion, turning curious clicks into happy customers.",
    },
    {
      heading: "Earning Real Trust",
      description:
        "We help you share your expertise through content that makes people say, “These guys really know their stuff.”",
    },
    {
      heading: "Seeing the Full Picture",
      description:
        "No marketing magic—just clear, honest data so you know exactly how your budget is helping you grow.",
    },
    {
      heading: "Momentum That Lasts",
      description:
        "We build a marketing rhythm that keeps your business moving forward, month after month.",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-orange-200">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">
      <span className="text-orange-500">Marketing</span> That Connects with Real
      People
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {marketingPoints.map((item, index) => (
        <div
          key={index}
          className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-sm
                     hover:shadow-lg transition group"
        >
          {/* STEP BADGE */}
          <span
            className="absolute -top-3 left-6 px-3 py-1 text-xs font-semibold
                       bg-gradient-to-r from-orange-400 to-orange-600
                       text-white rounded-full"
          >
            Step {index + 1}
          </span>

          {/* HEADING */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-500 transition">
            {item.heading}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed">
            {item.description}
          </p>

          {/* BOTTOM ACCENT LINE */}
          <div className="mt-4 h-1 w-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default MarketingSixPoints;
