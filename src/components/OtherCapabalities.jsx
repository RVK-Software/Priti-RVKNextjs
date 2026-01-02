const SixPointGrid = ({ title, points }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {title && (
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-10">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.heading}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SixPointGrid;
