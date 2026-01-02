import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Website Design & Development",
    description:
      "We go beyond standard web development to engineer immersive digital experiences that drive engagement and ROI. Our multidisciplinary team fuses high-level design with robust code to transform your vision into a high-performance digital asset.",
    tags: ["Bespoke UI/UX Design", "Responsive Cross-Platform Layouts", "Exclusive Brand-Centric Themes", "Modular, Component-Based Architecture"],
  },
  {
    title: "SEO Friendly Websites",
    description:
      "SEO-Optimized Architecture Deploy high-performance websites engineered with user-centric CMS frameworks. From industry leaders like WordPress and Drupal to bespoke custom engines, we deliver complete content autonomy tailored to your technical requirements.",
    tags: [
      "Performance-First Load Speeds",
      "Original, High-Authority Content",
      "Conversion-Optimized Workflows",
      "Superior UX/UI Design",
    ],
  },
  {
    title: "Other Services We Offer",
    description:
      "Advanced Integration & Support Ecosystem Expand your platform’s capabilities through expert API development and seamless third-party integrations, creating a dynamic and interconnected user environment.",
    tags: [
      "Complimentary Enterprise Hosting & Domain (12 Months)",
      "Unified Social Media Ecosystem Integration",
      "End-to-End SSL Encryption & Security Protocols",
      "Post-Launch Maintenance & Technical Support (6 Months)",
    ],
  },
];

const CustWebDev = () => {
  return (
    <section className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-2">
        {/* Heading */}
        <div className="text-center mb-4">
          
          <h2 className="text-2xl sm:text-[18px] max-w-auto lg:text-5xl font-bold text-gray-900 leading-tight">
            Customized Web Development Services 
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                {/* Top Line */}
                <div className="h-1 w-24 bg-orange-400 mb-6 rounded-full"></div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap flex-col gap-3">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm rounded-full bg-orange-50 text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustWebDev;
