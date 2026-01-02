const TechStack = () => {
  return (
    <section className="bg-black/20 py-4 mb-4 px-2 sm:px-2 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black">
            Strategic Power for <span className="text-orange-500">Modern Businesses</span>
          </h2>
          <p className="mt-2 text-black text-[15px] sm:text-[20px] max-w-auto mx-auto">
            Built with modern, scalable technologies to deliver high-performance,
            secure, and future-ready digital solutions.
          </p>
        </div> 

        {/* Cards */}
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4">

          {/* Frontend */}
          <div className="group bg-white/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4
                          transition-all duration-300 hover:-translate-y-2
                          hover:border-orange-500/40 hover:shadow-[0_20px_40px_rgba(255,115,0,0.2)]">

            <h3 className="text-2xl font-semibold text-orange-400 mb-3 group-hover:text-orange-500">
              Frontend Excellence
            </h3>

            <ul className="space-y-3 text-[16px]">
              {[
                "React for dynamic user interfaces",
                "HTML5 & CSS3 for modern layouts",
                "JavaScript for interactive experiences",
                "Responsive design frameworks",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-black">
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-500"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="group bg-white/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4
                          transition-all duration-300 hover:-translate-y-2
                          hover:border-orange-500/40 hover:shadow-[0_20px_40px_rgba(255,115,0,0.2)]">

            <h3 className="text-2xl font-semibold text-orange-400 mb-3 group-hover:text-orange-500">
              Backend Power
            </h3>

            <ul className="space-y-3 text-[16px]">
              {[
                "Node.js for scalable server architecture",
                "Express for robust API development",
                "MongoDB for flexible data storage",
                "RESTful & GraphQL integration",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-black">
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-500"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="group bg-white/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4
                          transition-all duration-300 hover:-translate-y-2
                          hover:border-orange-500/40 hover:shadow-[0_20px_40px_rgba(255,115,0,0.2)]">

            <h3 className="text-2xl font-semibold text-orange-400 mb-3 group-hover:text-orange-500">
              Marketing Mastery
            </h3>

            <ul className="space-y-2 text-[16px]">
              {[
                "Search Engine Optimization for organic traffic",
                "Social Media Management for engagement",
                "Email Marketing for conversions",
                "Paid Advertising for results",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-black">
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-500"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
