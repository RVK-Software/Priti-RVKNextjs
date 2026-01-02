import {
  FaCheck,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaBuilding,
} from "react-icons/fa";
import CoreValues from "../../components/Values";
import Testimonials from "../../components/Testimonial";
import AboutUs from "../../components/AboutUs";

export default function Page() {
  return (
    <section className="bg-gray-50 pt-14 ">
      {/* ABOUT US SECTION */}
      <AboutUs showButton={false} />

      {/* OUR VISION SECTION */}
      <div className="bg-black py-4 px-4">
        <div className="mx-auto text-center text-white">
          <h2 className="text-2xl lg:text-4xl font-bold mb-3">Our Vision</h2>
          <p className="text-gray-300 text-[16px] max-w-3xl mx-auto mb-10">
            We aim to empower businesses, creators, and talent through our
            innovative solutions. Our upcoming application,{" "}
            <span className="text-orange-400 font-semibold">
              Navsankalp App
            </span>
            , will transform the way MSME, Influencers, Job Seekers and Property
            Owners and also help to boost the Economy.
          </p>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-black shadow-xl hover:scale-105 transition">
              <FaRocket className="text-orange-400 text-3xl " />
              <h3 className="text-xl font-semibold mb-2">MSMEs</h3>
              <p className="text-gray-700 text-[16px]">
                Smart tools to scale operations, boost visibility, and drive
                sustainable growth.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg hover:scale-105 transition">
              <FaLightbulb className="text-orange-400 text-3xl " />
              <h3 className="text-xl font-semibold mb-2">Influencers</h3>
              <p className="text-gray-700 text-[16px]">
                End-to-end solutions to monetize content and manage brand
                collaborations.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg hover:scale-105 transition">
              <FaUsers className="text-orange-400 text-3xl" />
              <h3 className="text-xl font-semibold mb-2">Job Seekers</h3>
              <p className="text-gray-700 text-[16px]">
                Direct access to verified opportunities with growth-focused
                companies.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-black shadow-lg hover:scale-105 transition">
              <FaBuilding className="text-orange-400 text-3xl" />
              <h3 className="text-xl font-semibold mb-2">Property Owners</h3>
              <p className="text-gray-700 text-[16px]">
                Simplified property listing, management, and customer engagement
                systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE RVK SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
            Why Choose <span className="text-orange-400">RVK Software</span>
          </h2>
          <p className="text-gray-600 max-w-3xl text-[16px] mx-auto mt-4">
            We combine expertise, innovation, and a client-first approach to
            deliver digital solutions that truly make an impact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 text-[16px] lg:grid-cols-3 gap-8">
          {[
            "Proven track record of successful projects",
            "Experienced and skilled development team",
            "Focus on scalable and secure solutions",
            "Client-centric approach with transparent communication",
            "Innovative solutions tailored to your business needs",
            "Ethical and quality-driven project delivery",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaCheck className="text-orange-400 text-lg" />
                <h3 className="font-semibold text-gray-800">{item}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION */}

      <CoreValues />
      <Testimonials />
    </section>
  );
};


