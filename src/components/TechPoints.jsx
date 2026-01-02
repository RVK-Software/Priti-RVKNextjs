const TechSixPoints = () => {
  const techPoints = [
    {
      heading: "Speed You Can Feel",
      description:
        "We build websites that load in a heartbeat and stay online, so your customers never have to wait.",
    },
    {
      heading: "Built to Grow with You",
      description:
        "Your software won't break the moment you get popular. It’s designed to handle your success from day one.",
    },
    {
      heading: "Sleep Better at Night",
      description:
        "We use secure, honest code that protects your hard work and your customers’ privacy like it’s our own.",
    },
    {
      heading: "Giving You Your Time Back",
      description:
        "We create simple tools that handle the boring, repetitive stuff so you can focus on the big picture.",
    },
    {
      heading: "Beauty That Works",
      description:
        "We design interfaces that don't just look pretty—they feel natural and easy for your customers to use.",
    },
    {
      heading: "Steady Under Pressure",
      description:
        "Even when traffic spikes, our systems stay calm and collected, keeping your business running smoothly.",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-orange-200 to-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">
      <span className="text-orange-500">Technology</span> That Works for You
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {techPoints.map((item, index) => (
        <div
          key={index}
          className="relative bg-white border border-gray-200 rounded-xl p-6
                     shadow-sm hover:shadow-lg transition group"
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

          {/* BOTTOM ACCENT */}
          <div className="mt-4 h-1 w-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default TechSixPoints;
